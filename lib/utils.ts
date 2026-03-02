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
  return emailRegex.test(email)
}

export const validatePhoneNumber = (phone: string): boolean => {
  // Remove common formatting characters
  const cleaned = phone.replace(/[\s\-\(\)\.]/g, '')
  // Check if it's a valid phone format (10+ digits)
  return /^\d{10,}$/.test(cleaned)
}

export const validateName = (name: string): boolean => {
  // Names should be 2+ characters, contain mostly letters
  const cleaned = name.trim()
  if (cleaned.length < 2) return false
  // Allow letters, spaces, hyphens, apostrophes only
  return /^[a-zA-Z\s\-\']+$/.test(cleaned)
}

export const checkSpamPatterns = (text: string): boolean => {
  const spamPatterns = [
    /[a-z]{20,}/, // Long sequences of random characters
    /[0-9]{20,}/, // Long sequences of numbers
    /(.)(\1){10,}/, // Repeated characters (aaaaaa...)
    /http[s]?:\/\//, // URLs in text (unless legitimate)
    /viagra|cialis|casino|lottery|prize|bitcoin|crypto/i, // Common spam keywords
  ]
  
  return spamPatterns.some(pattern => pattern.test(text))
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
