import { Check } from "lucide-react"

const MembershipPage = () => {
  const memberships = [
    {
      name: "Self Care - Forever Young",
      price: 275,
      description: "Best for Anti-Aging & Skin Tightening",
      ctaUrl: "https://mdbodysculpting.repeatmd.app/pdp/membership/0199b74f-369e-780b-80ac-619b7773a46c",
      commitment: "4 month commitment",
      signupBonus: "$75 off your first month",
      includes: [
        
        "Thermalift RF Skin Tightening – Stimulate collagen production and improve skin elasticity every month",
        "Priority Booking for Appointments",
        "Exclusive Member Perks & Promotions",
      ],
      sevenMonthBonus: "Body Contouring (RF and Ultrasound) – HIFU Face And Neck Lift",
      memberDiscount: "50% Off HIFU, Cryo Protox, and Neck & Jawline Treatment",
    },
    {
      name: "Self Care - Body Basics",
      price: 199,
      description: "Best for Beginners",
      ctaUrl: "https://mdbodysculpting.repeatmd.app/pdp/membership/0199b751-affe-79d1-9e96-1362bb0d23d6",
      commitment: "4 month commitment",
      signupBonus: "$75 off your first month",
      includes: [
        "Lipo Sculpt Lite – Advanced laser-based fat reduction every month",
        "Choose One Treatment Per Month: Ultrasonic Cavitation Fat Reduction or Thermalift RF Skin Tightening",
        "Priority Booking for Appointments",
        "Exclusive Access to Member-Only Events & Promotions",
      ],
      sevenMonthBonus: "Thermalift RF Skin Tightening",
      memberDiscount: "20% Off All Additional Body Sculpting Treatments",
    },
    {
      name: "Self Care - Body Basics Plus",
      price: 499,
      description: "Best for Fat Reduction & Toning",
      ctaUrl: "https://mdbodysculpting.repeatmd.app/pdp/membership/0199b74f-b4d8-75d4-96d8-a70650b8ebb1",
      commitment: "4 month commitment",
      signupBonus: "$75 off your first month",
      includes: [
        "EMS Based Sculpting! 20,000 Contractions per 30 min",
        "Lipo Sculpt Fat Reduction every Month",
        "Priority Booking for Appointments",
        "Exclusive access to member-only events and promotions",
      ],
      sevenMonthBonus: "Thermalift RF Skin Tightening",
      memberDiscount: "30% Off All Body Sculpting Treatments",
    },
    {
      name: "Self Care - Body Transformation",
      price: 799,
      description: "Best for Full-Body Results",
      ctaUrl: "https://mdbodysculpting.repeatmd.app/pdp/membership/0199b74e-2efe-75ba-b920-051b01bce576",
      commitment: "4 month commitment",
      signupBonus: "$75 off your first month",
      includes: [
        "1 Session of LipoSculpt - Abdomen, Love Handles, Flanks, Thighs",
        "Choose 1 Session: Ultrasonic Cavitation, Thermalift RF or LipoSculpt",
        "1 Month Supply of Skinny Drops OR Cryo 30M",
        "Exclusive Member Events & Promotions",
      ],
      sevenMonthBonus: "Age Defying HIFU Treatment",
      memberDiscount: "50% Off All Body Sculpting Treatments",
    },
    {
      name: "Self Care - Frosted Glow",
      price: 299,
      description: "Best for Cryo Treatments",
      ctaUrl: "hhttps://mdbodysculpting.repeatmd.app/pdp/membership/0199b751-5ea6-72b6-a52b-a2746b83b37f",
      commitment: "4 month commitment",
      signupBonus: "$75 off your first month",
      includes: [
        "1 Treatment of Cryo Sculpting or Cryo Protox Every Month",
        "Choose from Cryo Contouring – Cryo Sculpting or Cryo Contouring – Protox – Cryo Facial",
        "Exclusive Member-Only Benefits",
      ],
      sevenMonthBonus: "Special Cryo Treatment",
      memberDiscount: "20% Off All Treatments",
    },
    {
      name: "Self Care - Frosted Fit",
      price: 599,
      description: "Best for Advanced Cryo",
      ctaUrl: "https://mdbodysculpting.repeatmd.app/pdp/membership/0199b751-00af-7d2b-82f9-2b776649dd3c",
      commitment: "4 month commitment",
      signupBonus: "$75 off your first month",
      includes: [
        "2 Cryo Sculpting Treatments",
        "Choose 1: Cryo Protox, Cryo Grow Hair Restoration, Neck & Jawline Treatment, or Cryo Relief",
        "Exclusive Member-Only Benefits",
      ],
      sevenMonthBonus: "Premium Cryo Treatment",
      memberDiscount: "30% Off All Treatments",
    },
    {
      name: "Self Care - Frosted Fit - GLYPTO",
      price: 349,
      description: "Best for GLYPTO Body",
      ctaUrl: "https://mdbodysculpting.repeatmd.app/pdp/membership/0199d412-dcbd-750c-a433-99c618e98ad8",
      commitment: "4 month commitment",
      signupBonus: "$75 off your first month",
      includes: [
        "Choose 2 GLYPTO Body Treatments Every Month",
        "Glypto Body Sculpting – Glypto – Body",
        "Exclusive Member-Only Benefits",
      ],
      sevenMonthBonus: "Premium GLYPTO Treatment",
      memberDiscount: "30% Off All Body Sculpting Treatments",
    },
    {
      name: "Self Care - Frosted Elite",
      price: 799,
      description: "3 Cryo Treatments (60-seconds each) Every Month",
      ctaUrl: "https://mdbodysculpting.repeatmd.app/pdp/membership/0199b750-a98c-7269-b667-13aaee9c0b81",
      commitment: "4 month commitment required",
      signupBonus: null,
      includes: [
        "3 Cryo Treatments (60-seconds each) Every Month",
        "Cryo Contouring - Cryo Sculpting",
        "Cryo Contouring - Protox - Cryo Facial",
        "Choose 1 of the following every month (Cryo Relief, Cryo Grow, or Neck/Jawline Treatment)",
        "Exclusive Member-Only Benefits"
      ],
      sevenMonthBonus: null,
      memberDiscount: "50% Off All Treatments",
    },
    {
      name: "Self Care - Frosted Elite - GLYPTO",
      price: 399,
      description: "Best for Premium GLYPTO",
      ctaUrl: "https://mdbodysculpting.repeatmd.app/pdp/membership/0199d3cf-d070-7c92-a1f0-99b809c295bb",
      commitment: "4 month commitment",
      signupBonus: "$75 off your first month",
      includes: [
        "3 Treatments of GLYPTO Every Month (Sculpting, Protox, Neck And Decollette)",
        "Glypto Body Sculpting – Glypto – Body",
        "Glypto Body Sculpting – Glypto – Neck and Decollette",
        "Glypto Body Sculpting – Glypto – Protox",
      ],
      sevenMonthBonus: "Exclusive GLYPTO Bonus",
      memberDiscount: "50% Off All Treatments",
    },
    {
      name: "Self Care - Frosted Glow - GLYPTO",
      price: 199,
      description: "Best for GLYPTO Beginners",
      ctaUrl: "https://mdbodysculpting.repeatmd.app/pdp/membership/0199d410-62b9-7eb7-bbcd-54d5b99bbb6f",
      commitment: "4 month commitment",
      signupBonus: "$75 off your first month",
      includes: [
        "1 Treatment of GLYPTO Sculpting or Protox Every Month",
        "Choose from Glypto Body Sculpting – Glypto – Body or Glypto Body Sculpting – Glypto – Protox",
        "Exclusive Member-Only Benefits",
      ],
      sevenMonthBonus: "GLYPTO Treatment Bonus",
      memberDiscount: "20% Off All Body Sculpting Treatments",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative text-[#8e24aa] overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundColor: "#e1bee7" }}></div>
        <div className="relative max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-balance">
              Transform Your Body with <br />
              <span className="bg-gradient-to-r from-[#8e24aa] to-[#512da8] bg-clip-text text-transparent">
                Exclusive Memberships
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-[#512da8] font-medium">
              💎 Get VIP access to premium body sculpting treatments at unbeatable prices.
            </p>
            <a href="#membership-plans" aria-label="Explore Our Membership Plans Below">
              <button
                className="cursor-pointer font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: "#8e24aa", color: "white" }}
              >
                Explore Our Membership Plans Below
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Membership Plans Section - 3x3 Grid */}
      <div className="py-24 bg-gradient-to-b from-white to-[#f9f5fb]" id="membership-plans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance" style={{ color: "#8e24aa" }}>
              Membership Plans & Pricing
            </h2>
            <p className="text-lg text-gray-600 font-medium">Choose the perfect plan for your transformation journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {memberships.map((plan, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 border overflow-hidden hover:scale-105 transform flex flex-col h-full"
                style={{ borderColor: "#e1bee7", borderWidth: "2px" }}
              >
                {/* Header */}
                <div className="p-8 text-white" style={{ backgroundColor: "#8e24aa" }}>
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm mb-6 text-white opacity-90 font-medium">{plan.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-base font-normal opacity-90">/month</span>
                  </div>
                  <p className="text-xs text-white opacity-80 mt-3 font-medium">{plan.commitment}</p>
                </div>

                {/* Content */}
                <div className="p-8 flex-grow flex flex-col gap-5">
                  {/* Sign-up Bonus */}
                  <div className="p-4 rounded-2xl" style={{ backgroundColor: "#e1bee7" }}>
                    <p className="text-sm font-bold" style={{ color: "#512da8" }}>
                      🎁 {plan.signupBonus}
                    </p>
                  </div>

                  {/* Includes */}
                  <div className="flex-grow">
                    <h4
                      className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wide"
                      style={{ color: "#512da8" }}
                    >
                      Includes:
                    </h4>
                    <div className="space-y-3">
                      {plan.includes.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#8e24aa" }} />
                          <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 7-Month Bonus */}
                  <div className="p-4 rounded-2xl" style={{ backgroundColor: "#e1bee7" }}>
                    <p className="text-sm font-bold" style={{ color: "#512da8" }}>
                      🎉 7-Month Bonus: {plan.sevenMonthBonus}
                    </p>
                  </div>

                  {/* Member Discount */}
                  <div className="p-4 rounded-2xl" style={{ backgroundColor: "#f3e5f5" }}>
                    <p className="text-sm font-bold" style={{ color: "#8e24aa" }}>
                      💜 {plan.memberDiscount}
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="p-6 border-t" style={{ borderColor: "#e1bee7" }}>
                  <a
                    href={plan.ctaUrl}
                    className="block w-full text-center font-bold py-3 px-4 rounded-xl text-white transition-all duration-300 hover:opacity-90 shadow-md hover:shadow-lg"
                    style={{ backgroundColor: "#8e24aa" }}
                  >
                    Claim Membership
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24" style={{ backgroundColor: "#8e24aa" }}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-balance">Ready to Transform Your Body?</h2>
          <p className="text-lg md:text-xl mb-12 text-white font-medium leading-relaxed">
            Join thousands of satisfied members who have already started their journey to a sculpted, confident new you!
          </p>
          <a
            href="https://mdbodysculpting.repeatmd.app/shop/memberships"
            className="inline-block bg-white font-bold py-4 px-14 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            style={{ color: "#8e24aa" }}
          >
            I Want This Membership!
          </a>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white">
            <div className="flex items-center gap-3">
              <Check className="w-6 h-6 flex-shrink-0" />
              <span className="font-medium">No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-6 h-6 flex-shrink-0" />
              <span className="font-medium">4-Month Commitment</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-6 h-6 flex-shrink-0" />
              <span className="font-medium">Cancel Anytime After</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MembershipPage
