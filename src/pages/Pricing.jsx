import { plans } from "../data/data"

const Pricing = () => {
  return (
    <div>
         {/* Pricing */}
                <div className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Choose Your{" "}
                    <span className="gradient-text">Money-Making Package</span>
                  </h2>
                  <p className="text-xl text-gray-600">
                    Investment plans that pay for themselves
                  </p>
                </div>
        
                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                  {plans.map((plan, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200 hover:border-orange-300 transition-all duration-300"
                    >
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {plan.title}
                        </h3>
                        <div className="text-4xl font-bold gradient-text mb-4">
                          {plan.price}
                        </div>
                        <p className="text-gray-600">{plan.description}</p>
                      </div>
                      <ul className="space-y-4 mb-8">
                        {plan.features.map((feature, fIndex) => (
                          <li
                            key={fIndex}
                            className="flex items-center space-x-3"
                          >
                            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                              <svg
                                className="w-3 h-3 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                ></path>
                              </svg>
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <button className={`w-full ${plan.buttonClass}`}>
                        Get Started
                      </button>
                    </div>
                  ))}
                </div>
        
                {/* Footer */}
                <div className="text-center mt-12">
                  <p className="text-gray-600 text-lg mb-4">
                    <span className="font-semibold">Monthly plans available</span> for
                    automation management & performance tweaks
                  </p>
                  <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    Book Free Strategy Call
                  </button>
                </div>
              </div>
                </div>
    </div>
  )
}

export default Pricing