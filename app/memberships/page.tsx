import React from 'react';
import { Check, Star, Gift, Calendar, Users, Award } from 'lucide-react';

const MembershipPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative text-white overflow-hidden" style={{backgroundColor: '#8e24aa'}}>
        <div className="relative max-w-7xl mx-auto px-4 py-28 sm:px-6 lg:px-8">
          <div className="text-center">
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your Body with <br />
              <span>Exclusive Memberships</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white">
              💎 Get VIP access to premium body sculpting treatments at unbeatable prices.
            </p>
            <div className="flex items-center justify-center gap-2 mb-8">
              <Calendar className="w-6 h-6" style={{color: '#e1bee7'}} />
              <p className="text-lg text-white">
                📆 Stay consistent, see results, and enjoy exclusive savings every month!
              </p>
            </div>
            <button 
              className="font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:bg-[#512da8] hover:text-white"
              style={{backgroundColor: '#512da8', color: 'white'}}
            >
               Explore Our Membership Plans Below
            </button>
          </div>
        </div>
      </div>

      {/* Why Become a Member Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{color: '#8e24aa'}}>Why Become a Member?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlock exclusive perks, priority booking, and deep discounts with our membership plans. 
              Your journey to a sculpted, confident you starts with consistency and savings!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300" style={{backgroundColor: '#e1bee7'}}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#8e24aa'}}>
                <Gift className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{color: '#512da8'}}>✅ $75 OFF Your First Month</h3>
              <p style={{color: '#512da8'}}>Enjoy instant savings when you sign up.</p>
            </div>

            <div className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300" style={{backgroundColor: '#e1bee7'}}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#8e24aa'}}>
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{color: '#512da8'}}>✅ 30% Off All Body Sculpting Treatments</h3>
              <p style={{color: '#512da8'}}>The best deals, exclusively for members.</p>
            </div>

            <div className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300" style={{backgroundColor: '#e1bee7'}}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#8e24aa'}}>
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{color: '#512da8'}}>✅ Priority Booking for Appointments</h3>
              <p style={{color: '#512da8'}}>Schedule your treatments ahead of others.</p>
            </div>

            <div className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300" style={{backgroundColor: '#e1bee7'}}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#8e24aa'}}>
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{color: '#512da8'}}>✅ Earn Rewards for Visits & Purchases</h3>
              <p style={{color: '#512da8'}}>Get points for every dollar spent.</p>
            </div>

            <div className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300" style={{backgroundColor: '#e1bee7'}}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#8e24aa'}}>
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{color: '#512da8'}}>✅Exclusive Birthday Perks & Member-Only Events</h3>
              <p style={{color: '#512da8'}}>Special gifts & early access to promotions.</p>
            </div>

            <div className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300" style={{backgroundColor: '#e1bee7'}}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#8e24aa'}}>
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{color: '#512da8'}}>✅ 7-Month Loyalty Bonus</h3>
              <p style={{color: '#512da8'}}>Special reward for maintaining membership for 7 months.</p>
            </div>

            <div className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300" style={{backgroundColor: '#e1bee7'}}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#8e24aa'}}>
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{color: '#512da8'}}>✅ Exclusive Access to Member-Only Events & Promotions</h3>
              <p style={{color: '#512da8'}}>Get VIP treatment.</p>
            </div>

            <div className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300" style={{backgroundColor: '#e1bee7'}}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#8e24aa'}}>
                <Gift className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{color: '#512da8'}}>✅ Bonus Discounts on Treatment Packages & Upgrades</h3>
              <p style={{color: '#512da8'}}>Additional savings on bundled services.</p>
            </div>

            <div className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300" style={{backgroundColor: '#e1bee7'}}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#8e24aa'}}>
                <Gift className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{color: '#512da8'}}>✅ Free Birthday Perk</h3>
              <p style={{color: '#512da8'}}>A special reward or discount on your birthday.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              className="text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:bg-[#512da8] hover:text-white"
              style={{backgroundColor: '#8e24aa'}}
              
            >
              Claim My Membership
            </button>
          </div>
        </div>
      </div>

      {/* Rewards Section */}
      {/* <div className="py-20" style={{backgroundColor: '#b39ddb'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Exclusive Member Rewards 🎉
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-white">
              Unlock special discounts, cash rewards, and perks just for being a valued member. 
              Earn rewards with every visit and redeem them for treatments, memberships, and in-app purchases.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { amount: '$75', description: 'Towards Your Next Purchase', detail: 'Applied to your first month of membership.' },
              { amount: '30%', description: 'Off All Body Sculpting Treatments', detail: 'Exclusive ongoing discount.' },
              { amount: 'Priority', description: 'Booking for Appointments', detail: 'Get access to the best time slots.' },
              { amount: '7-Month', description: 'Loyalty Bonus', detail: 'Special reward for maintaining membership for 7 months.' }
            ].map((reward, index) => (
              <div key={index} className="bg-white p-6 rounded-xl text-center shadow-lg">
                <div className="text-3xl font-bold mb-2" style={{color: '#8e24aa'}}>{reward.amount}</div>
                <div className="font-semibold mb-1" style={{color: '#512da8'}}>{reward.description}</div>
                <div className="text-sm" style={{color: '#512da8'}}>{reward.detail}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-xl text-center shadow-lg">
              <div className="font-semibold mb-1" style={{color: '#512da8'}}>Exclusive Access to Member-Only Events & Promotions</div>
              <div className="text-sm" style={{color: '#8e24aa'}}>Get VIP treatment.</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-lg">
              <div className="font-semibold mb-1" style={{color: '#512da8'}}>Bonus Discounts on Treatment Packages & Upgrades</div>
              <div className="text-sm" style={{color: '#8e24aa'}}>Additional savings on bundled services.</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-lg">
              <div className="font-semibold mb-1" style={{color: '#512da8'}}>Free Birthday Perk</div>
              <div className="text-sm" style={{color: '#8e24aa'}}>A special reward or discount on your birthday.</div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Membership Plans Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{color: '#8e24aa'}}>Membership Plans & Pricing</h2>
            <p className="text-xl text-gray-600">Choose the perfect plan for your transformation journey</p>
          </div>

          {/* First Row - 2 Plans */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Self Care – Forever Young */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border-2" style={{borderColor: '#b39ddb'}}>
              <div className="p-6 text-white" style={{backgroundColor: '#8e24aa'}}>
                <h3 className="text-xl font-bold mb-2">Self Care – Forever Young</h3>
                <p className="text-sm mb-4 text-white">(Best for Anti-Aging & Skin Tightening)</p>
                <div className="text-3xl font-bold">$125<span className="text-lg font-normal">/month</span></div>
                <p className="text-sm text-white">(6-month commitment)</p>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Includes:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: '#8e24aa'}} />
                      <span className="text-gray-700">✔ Thermalift RF Skin Tightening – Stimulate collagen production and improve skin elasticity every month.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: '#8e24aa'}} />
                      <span className="text-gray-700">✔ Priority Booking for Appointments</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: '#8e24aa'}} />
                      <span className="text-gray-700">✔ Exclusive Member Perks & Promotions</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="p-4 rounded-lg mb-3" style={{backgroundColor: '#e1bee7'}}>
                    <p className="font-semibold" style={{color: '#512da8'}}>🎁 Sign-up Bonus: $75 off your first month</p>
                  </div>
                  <div className="p-4 rounded-lg" style={{backgroundColor: '#e1bee7'}}>
                    <p className="font-semibold" style={{color: '#512da8'}}>🎉7-Month Bonus: Receive an exclusive one-time reward after maintaining membership for 7 months.</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold" style={{color: '#512da8'}}>Exclusive Member Discounts:</h4>
                  <p className="font-semibold" style={{color: '#8e24aa'}}>🔹 50% Off HIFU, Cryo Frotox, and Neck & Jawline Treatment.</p>
                </div>
              </div>
            </div>

            {/* Self Care – Body Basics */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border-2" style={{borderColor: '#b39ddb'}}>
              <div className="p-6 text-white" style={{backgroundColor: '#8e24aa'}}>
                <h3 className="text-xl font-bold mb-2">Self Care – Body Basics</h3>
                <p className="text-sm mb-4 text-white">(Best for Beginners)</p>
                <div className="text-3xl font-bold">$149<span className="text-lg font-normal">/month</span></div>
                <p className="text-sm text-white">(6-month commitment)</p>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Includes:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: '#8e24aa'}} />
                      <span className="text-gray-700">✔ Lipo Sculpt Lite – Advanced laser-based fat reduction every month</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: '#8e24aa'}} />
                      <span className="text-gray-700">✔ Choose One Treatment Per Month:</span>
                    </div>
                    <div className="ml-7 space-y-2">
                      <p className="text-gray-600">    🔹 Ultrasonic Cavitation Fat Reduction</p>
                      <p className="text-gray-600">    🔹 Thermalift RF Skin Tightening</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: '#8e24aa'}} />
                      <span className="text-gray-700">✔ Priority Booking for Appointments</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: '#8e24aa'}} />
                      <span className="text-gray-700">✔ Exclusive Access to Member-Only Events & Promotions</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="p-4 rounded-lg" style={{backgroundColor: '#e1bee7'}}>
                    <p className="font-semibold" style={{color: '#512da8'}}>🎁 Sign-up Bonus: $75 off your first month</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold" style={{color: '#512da8'}}>Exclusive Member Discounts:</h4>
                  <p className="font-semibold" style={{color: '#8e24aa'}}>🔹20% Off All Additional Body Sculpting Treatments</p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row - 2 Plans */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Self Care – Body Basics Plus */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border-4" style={{borderColor: '#8e24aa'}}>
              <div className="p-6 text-white relative" style={{backgroundColor: '#8e24aa'}}>
                <div className="absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-bold" style={{backgroundColor: '#e1bee7', color: '#512da8'}}>
                  POPULAR
                </div>
                <h3 className="text-xl font-bold mb-2">Self Care – Body Basics Plus</h3>
                <p className="text-sm mb-4 text-white">(Best for Fat Reduction & Toning)</p>
                <div className="text-3xl font-bold">$199<span className="text-lg font-normal">/month</span></div>
                <p className="text-sm text-white">(6-month commitment)</p>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Includes:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: '#8e24aa'}} />
                      <span className="text-gray-700">Non-Invasive Muscle Toning – Equivalent to 20,000 crunches in 30 minutes.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: '#8e24aa'}} />
                      <span className="text-gray-700">Liposculpt Fat Reduction – Monthly non-invasive fat reduction session.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: '#8e24aa'}} />
                      <span className="text-gray-700">Priority Booking for Appointments</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: '#8e24aa'}} />
                      <span className="text-gray-700">Exclusive Member-Only Events & Promotions</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="p-4 rounded-lg mb-3" style={{backgroundColor: '#e1bee7'}}>
                    <p className="font-semibold" style={{color: '#512da8'}}>🎁 Sign-up Bonus: $75 off your first month</p>
                  </div>
                  <div className="p-4 rounded-lg" style={{backgroundColor: '#e1bee7'}}>
                    <p className="font-semibold" style={{color: '#512da8'}}>🎉7-Month Bonus: Receive an exclusive one-time reward after maintaining membership for 7 months.</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold" style={{color: '#512da8'}}>Exclusive Member Discounts:</h4>
                  <p className="font-semibold" style={{color: '#8e24aa'}}>🔹30% Off All Body Sculpting Treatments</p>
                </div>
              </div>
            </div>

            {/* Self Care – Body Transformation */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border-2" style={{borderColor: '#b39ddb'}}>
              <div className="p-6 text-white" style={{backgroundColor: '#8e24aa'}}>
                <h3 className="text-xl font-bold mb-2">Self Care – Body Transformation</h3>
                <p className="text-sm mb-4 text-white">(Best for Full-Body Results)</p>
                <div className="text-3xl font-bold">$299<span className="text-lg font-normal">/month</span></div>
                <p className="text-sm text-white">(6-month commitment)</p>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Includes:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: '#8e24aa'}} />
                      <span className="text-gray-700">✔ 1 Session of Liposculpt (Abdomen, Arms, Thighs, or Love Handles)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: '#8e24aa'}} />
                      <span className="text-gray-700">✔ Choose 1 Session: Ultrasonic Cavitation, Thermalfift, DermaSmooth, or Liposculpt</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: '#8e24aa'}} />
                      <span className="text-gray-700">✔ 1 Month Supply of Skinny Drops OR One 30-Min Session of Non-Invasive Muscle Toning</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: '#8e24aa'}} />
                      <span className="text-gray-700">✔ Priority Booking for Appointments</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: '#8e24aa'}} />
                      <span className="text-gray-700">✔ Exclusive Member Events & Promotions</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="p-4 rounded-lg" style={{backgroundColor: '#e1bee7'}}>
                    <p className="font-semibold" style={{color: '#512da8'}}>🎉7-Month Bonus: Free Age-Defying HIFU Treatment</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold" style={{color: '#512da8'}}>Exclusive Member Discounts:</h4>
                  <p className="font-semibold" style={{color: '#8e24aa'}}>🔹50% Off All Body Sculpting Treatments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20" style={{backgroundColor: '#8e24aa'}}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Body?</h2>
          <p className="text-xl mb-8 text-white">
            Join thousands of satisfied members who have already started their journey to a sculpted, confident new you!
          </p>
          <a 
            href="https://mdbodysculpting.repeatmd.app/shop/memberships"
            className="inline-block bg-white font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            style={{color: '#8e24aa'}}
          >
            I Want This Membership!
          </a>
          <div className="mt-8 flex items-center justify-center gap-4 text-white">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>6-Month Commitment</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Cancel Anytime After</span>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default MembershipPage;