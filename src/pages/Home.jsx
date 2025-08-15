import {  features, buttons, contactInfo } from "../data/data"

const Home = () => {

  return (
    
    <div>
      {/*Hero Section  */}
      <div className="relative min-h-screen flex items-center justify-center hero-pattern">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50"></div>

          {/* Floating Money Icons */}
          <div className="absolute top-20 left-10 money-icon w-12 h-12 rounded-full flex items-center justify-center animate-float">
            <span className="text-white text-xl">💰</span>
          </div>
          <div
            className="absolute top-40 right-20 money-icon w-16 h-16 rounded-full flex items-center justify-center animate-float">
            <span className="text-white text-2xl">💸</span>
          </div>
          <div
            className="absolute bottom-40 left-20 money-icon w-14 h-14 rounded-full flex items-center justify-center animate-float">
            <span className="text-white text-xl">📈</span>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-slide-up">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Turn Your Website Into a{" "}
                <span className="gradient-text animate-slide-up">Money-Making Machine</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                We build digital systems that work for you — even when you sleep. From
                beautiful design to intelligent automation, we help your business grow
                smarter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  Start Making More Money
                </button>
                <button className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300">
                  See How It Works
                </button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-orange-500 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-orange-500 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
      </div>

      {/* Problem Section */}
        <div className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Your Business Is Losing Money{" "}
                <span className="text-red-400">Every Single Day</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Most businesses don't just need a website — they need a system that
                captures, converts, and keeps customers coming back.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-red-500 transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📉</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">
                  Leads Go Nowhere
                </h3>
                <p className="text-gray-300">
                  Website visitors fill forms and disappear into the void. No follow-up,
                  no conversion.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-red-500 transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⏰</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">
                  Slow Follow-Up
                </h3>
                <p className="text-gray-300">
                  By the time you respond, your potential customers have already moved
                  on to competitors.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-red-500 transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📧</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">
                  Sales in Chaos
                </h3>
                <p className="text-gray-300">
                  Important deals get buried in inboxes and WhatsApp chats. Nothing gets
                  tracked properly.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-red-500 transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">
                  Manual Everything
                </h3>
                <p className="text-gray-300">
                  You're stuck doing repetitive tasks that don't scale, instead of
                  growing your business.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*Solutions Section  */}
        <div className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Website + Smart Automation ={" "}
                <span className="gradient-text">More Money</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine high-converting websites with powerful backend automation to
                create systems that work 24/7.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Steps */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Customer Visits Your Site
                    </h3>
                    <p className="text-gray-600">
                      Beautiful, responsive website that converts visitors into leads
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Automation Kicks In
                    </h3>
                    <p className="text-gray-600">
                      Smart workflows powered by n8n handle everything automatically
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Money Flows In
                    </h3>
                    <p className="text-gray-600">
                      Higher conversions, better follow-up, recovered revenue
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Automation List */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 card-glow">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  What Happens Automatically:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">
                      Lead added to your CRM instantly
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Welcome email sent immediately</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Team notified via WhatsApp</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">
                      Customer tagged for future offers
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">
                      Automatic follow-up if no response
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">
                      Abandoned cart recovery (e-commerce)
                    </span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
                  <p className="text-green-800 font-semibold text-center">
                    All hands-free. 24/7. Even while you sleep.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
         <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to{" "}
            <span className="gradient-text">Make More Money</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-3xl border border-orange-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Custom Website Design
            </h3>
            <p className="text-gray-600 mb-6">
              Beautiful, responsive websites that convert visitors into paying
              customers.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li> Mobile-first responsive design</li>
              <li> High-converting landing pages</li>
              <li> Fast loading & SEO optimized</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl border border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Smart Automation
            </h3>
            <p className="text-gray-600 mb-6">
              n8n-powered workflows that handle leads, follow-ups, and customer
              nurturing automatically.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li> Lead capture & CRM integration</li>
              <li> Email & WhatsApp automation</li>
              <li> Abandoned cart recovery</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl border border-green-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Sales Pipeline
            </h3>
            <p className="text-gray-600 mb-6">
              Complete CRM integration with Google Sheets, Airtable, or HubSpot
              to track every lead.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li> Real-time lead tracking</li>
              <li> Sales funnel optimization</li>
              <li> Monthly performance reports</li>
            </ul>
          </div>
        </div>
      </div>
        </div>

        {/*  */}
         <div className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real Results for Real Businesses
          </h2>
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-3xl p-12 border border-gray-600">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl">👗</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Fashion Brand</h3>
                  <p className="text-gray-300">E-commerce Store</p>
                </div>
              </div>
              <blockquote className="text-xl italic text-gray-300 mb-6">
                "We used to follow up manually. Now it's all automatic — and our
                sales have gone up!"
              </blockquote>
              <p className="text-gray-400">
                Our smart automation system helped them recover lost sales from
                customers who abandoned their shopping carts.
              </p>
            </div>

            {/* Right Side */}
            <div className="text-center">
              <div className="inline-block bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl p-8">
                <div className="text-5xl font-bold text-white mb-2">₦200k+</div>
                <div className="text-green-100 text-lg">Recovered Revenue</div>
                <div className="text-green-200 text-sm mt-2">in just 3 months</div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded-xl p-4">
                  <div className="text-2xl font-bold text-orange-400">85%</div>
                  <div className="text-gray-300 text-sm">Cart Recovery Rate</div>
                </div>
                <div className="bg-gray-800 rounded-xl p-4">
                  <div className="text-2xl font-bold text-blue-400">3x</div>
                  <div className="text-gray-300 text-sm">Faster Follow-up</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>

       

        {/*  Why Choose Us*/}
        <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="gradient-text">DigitalFlow</span>
          </h2>
          <p className="text-xl text-gray-600">
            We're not here to sell you a site. We're here to help you make more
            money.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div
                className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6`}
              >
                <span className="text-3xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
        </div>
        {/* Call To Action */}
        
        <div className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Heading */}
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Build Something That Works While You Sleep?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Stop losing money. Start making more. Let's build your money-making
              machine today.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              {buttons.map((btn, index) => (
                <button key={index} className={btn.classes}>
                  <span>{btn.icon}</span>
                  <span>{btn.text}</span>
                </button>
              ))}
            </div>

            {/* Contact Form */}
            <form
              action="https://lemonchiffon-magpie-532997.hostingersite.com/mailer/submitform.php"
              method="POST"
              className="bg-white text-gray-900 rounded-xl p-8 shadow-lg max-w-xl mx-auto mb-12"
            >
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition duration-300"
              >
                Send Message
              </button>
            </form>

            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {contactInfo.map((info, index) => (
                <div key={index}>
                  <div className="text-2xl font-bold mb-2">{info.icon}</div>
                  <p className="text-orange-100">{info.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>
  )
}

export default Home