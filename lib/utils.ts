import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Spam Protection Utilities
const SUBMISSION_TIMESTAMPS: { [key: string]: number[] } = {}
const RATE_LIMIT_WINDOW = 60000 // 1 minute
const MAX_SUBMISSIONS_PER_WINDOW = 3

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) return false
  
  // Block suspicious email patterns
  const localPart = email.split('@')[0]
  
  // Check for gibberish in email local part (random letters)
  if (isGibberish(localPart.replace(/[0-9._-]/g, ''))) {
    return false
  }
  
  return true
}

export const validatePhoneNumber = (phone: string): boolean => {
  // Remove common formatting characters
  const cleaned = phone.replace(/[\s\-\(\)\.]/g, '')
  // Check if it's a valid phone format (10+ digits)
  return /^\d{10,}$/.test(cleaned)
}

// Check if text looks like gibberish (random letter sequences)
export const isGibberish = (text: string): boolean => {
  if (!text || text.length < 4) return false
  
  const cleaned = text.toLowerCase()
  
  // Check vowel ratio - real words have ~40% vowels, gibberish often has very few or too many
  const vowels = (cleaned.match(/[aeiou]/g) || []).length
  const vowelRatio = vowels / cleaned.length
  
  // Too few vowels (less than 15%) or no vowels in 6+ char string = likely gibberish
  if (cleaned.length >= 6 && vowelRatio < 0.15) return true
  
  // Check for excessive consonant clusters (4+ consonants in a row)
  if (/[bcdfghjklmnpqrstvwxyz]{5,}/i.test(cleaned)) return true
  
  // Check for random case mixing (CamelCase spam pattern)
  const upperCount = (text.match(/[A-Z]/g) || []).length
  const lowerCount = (text.match(/[a-z]/g) || []).length
  if (text.length > 8 && upperCount >= 3 && lowerCount >= 3) {
    // More than 3 uppercase switches is suspicious for a name
    const caseChanges = (text.match(/[a-z][A-Z]|[A-Z][a-z]/g) || []).length
    if (caseChanges >= 4) return true
  }
  
  // Check for unlikely letter combinations (qx, xq, jx, vq, etc.)
  const unlikelyCombos = /qx|xq|jx|xj|vq|qv|zx|xz|jq|qj|vx|xv|bk|kb|fq|qf|wq|qw|zj|jz|zk|kz/i
  if (unlikelyCombos.test(cleaned)) return true
  
  // Check for repeating patterns (abcabc, xyzxyz)
  if (cleaned.length >= 6) {
    const half = Math.floor(cleaned.length / 2)
    for (let len = 2; len <= half; len++) {
      const pattern = cleaned.slice(0, len)
      const repeated = pattern.repeat(Math.ceil(cleaned.length / len)).slice(0, cleaned.length)
      if (repeated === cleaned) return true
    }
  }
  
  return false
}

export const validateName = (name: string): boolean => {
  const cleaned = name.trim()
  
  // Names should be 2-20 characters
  if (cleaned.length < 2 || cleaned.length > 20) return false
  
  // Allow letters, spaces, hyphens, apostrophes only
  if (!/^[a-zA-Z\s\-\']+$/.test(cleaned)) return false
  
  // Check for gibberish
  if (isGibberish(cleaned)) return false
  
  // Must start with a capital letter or be all lowercase (not random case)
  if (!/^[A-Z][a-z]*$|^[a-z]+$|^[A-Z][a-z]+[\-\'][A-Z][a-z]+$/.test(cleaned.replace(/\s/g, ''))) {
    // Allow common patterns like "McDonald" or "O'Brien"
    if (!/^(Mc|Mac|O\'|De|La|Le|Van|Von)?[A-Z][a-z]+$/i.test(cleaned.replace(/\s/g, ''))) {
      // If it has weird casing, flag it
      const upperCount = (cleaned.match(/[A-Z]/g) || []).length
      if (upperCount > 2) return false
    }
  }
  
  return true
}

export const checkSpamPatterns = (text: string): boolean => {
  if (!text) return false
  
  const spamPatterns = [
    /[a-z]{25,}/i, // Very long unbroken letter sequences are suspicious
    /[0-9]{15,}/, // Long sequences of numbers
    /(.)(\1){5,}/, // Repeated characters (reduced from 10)
    /http[s]?:\/\//, // URLs
    /viagra|cialis|casino|lottery|prize|bitcoin|crypto|forex|investment|loan|credit/i,
    /[A-Z][a-z][A-Z][a-z][A-Z]/, // Alternating case pattern (CaMeL)
  ]
  
  if (spamPatterns.some(pattern => pattern.test(text))) return true
  
  // Check if text is mostly gibberish
  if (isGibberish(text)) return true
  
  return false
}

export const checkRateLimit = (identifier: string): boolean => {
  const now = Date.now()
  const timestamps = SUBMISSION_TIMESTAMPS[identifier] || []
  
  // Remove timestamps outside the window
  const recentSubmissions = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW)
  
  if (recentSubmissions.length >= MAX_SUBMISSIONS_PER_WINDOW) {
    return false // Rate limited
  }
  
  // Update timestamps
  SUBMISSION_TIMESTAMPS[identifier] = [...recentSubmissions, now]
  return true
}

export const validateFormData = (data: {
  firstName: string
  lastName: string
  email: string
  phone: string
  comments?: string
  subject?: string
  message?: string
  honeypot?: string
}): { valid: boolean; errors: string[] } => {
  const errors: string[] = []

  // Check honeypot field (should be empty)
  if (data.honeypot && data.honeypot.trim()) {
    return { valid: false, errors: ['Invalid submission'] }
  }

  // Validate name
  if (!validateName(data.firstName)) {
    errors.push('First name appears invalid')
  }
  if (!validateName(data.lastName)) {
    errors.push('Last name appears invalid')
  }

  // Validate email
  if (!validateEmail(data.email)) {
    errors.push('Email is invalid')
  }

  // Validate phone
  if (!validatePhoneNumber(data.phone)) {
    errors.push('Phone number is invalid')
  }

  // Check for spam patterns in comments/message
  const messageContent = (data.comments || '') + (data.message || '')
  if (messageContent && checkSpamPatterns(messageContent)) {
    errors.push('Message contains suspicious content')
  }

  // Check name for spam patterns
  if (checkSpamPatterns(data.firstName + ' ' + data.lastName)) {
    errors.push('Name contains suspicious patterns')
  }

  return {
    valid: errors.length === 0,
    errors
  }
}
