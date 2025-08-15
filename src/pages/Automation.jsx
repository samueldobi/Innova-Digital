import {automationBenefits, automationSolutions, successStories} from '../data/data';
import { useState, useEffect } from 'react';

const Automation = () => {
  const [activeTab, setActiveTab] = useState('benefits');
  const [expandedCard, setExpandedCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentStory, setCurrentStory] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % successStories.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
         <div className="relative min-h-screen hero-pattern overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-yellow-200/15 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider bg-orange-100/80 px-4 py-2 rounded-full border border-orange-200">
              Business Automation
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent mb-6">
            Automate to Accelerate
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Transform your business operations with intelligent automation that works 24/7 to increase revenue, 
            reduce costs, and free your team to focus on what matters most - growing your business.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-200/50">
              <div className="text-3xl font-bold text-orange-600 mb-2">300-500%</div>
              <div className="text-gray-700">Average ROI</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-red-200/50">
              <div className="text-3xl font-bold text-red-600 mb-2">60-80%</div>
              <div className="text-gray-700">Time Saved</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-yellow-200/50">
              <div className="text-3xl font-bold text-yellow-600 mb-2">25-40%</div>
              <div className="text-gray-700">Revenue Increase</div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { id: 'benefits', label: 'Revenue Benefits' },
            { id: 'solutions', label: 'Automation Solutions' },
            { id: 'success', label: 'Success Stories' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 border-2 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white border-transparent shadow-lg scale-105'
                  : 'bg-white/80 text-gray-700 border-gray-200 hover:border-orange-300 hover:bg-orange-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Benefits Section */}
        {activeTab === 'benefits' && (
          <div className="space-y-8">
            {automationBenefits.map((benefit, index) => (
              <div
                key={index}
                className={`transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:shadow-xl hover:border-orange-300 transition-all duration-500">
                  <div className="lg:flex items-center gap-8">
                    {/* Icon and Stats */}
                    <div className="lg:w-1/3 mb-6 lg:mb-0">
                      <div className="text-6xl mb-4">{benefit.icon}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-gray-600">Impact:</span>
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                            {benefit.impact}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-gray-600">ROI:</span>
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                            {benefit.roi}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-gray-600">Timeline:</span>
                          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
                            {benefit.timeframe}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description and Details */}
                    <div className="lg:w-2/3">
                      <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                        {benefit.description}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {benefit.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            <span className="text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Solutions Section */}
        {activeTab === 'solutions' && (
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            {automationSolutions.map((solution, index) => (
              <div
                key={index}
                className={`transition-all duration-700 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200/50 hover:shadow-xl hover:border-orange-300 transition-all duration-500">
                  <div className="lg:flex">
                    {/* Left Side - Problems & Solutions */}
                    <div className="lg:w-2/3 p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-semibold">
                          {solution.category}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-gray-900 mb-6">{solution.title}</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Problems */}
                        <div>
                          <h4 className="text-lg font-semibold text-red-700 mb-4 flex items-center gap-2">
                            <span className="text-red-500">⚠️</span>
                            Common Problems
                          </h4>
                          <ul className="space-y-3">
                            {solution.problems.map((problem, pIndex) => (
                              <li key={pIndex} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-600">{problem}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Solutions */}
                        <div>
                          <h4 className="text-lg font-semibold text-green-700 mb-4 flex items-center gap-2">
                            <span className="text-green-500">✅</span>
                            Our Solutions
                          </h4>
                          <ul className="space-y-3">
                            {solution.solutions.map((sol, sIndex) => (
                              <li key={sIndex} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-600">{sol}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Impact & Investment */}
                    <div className="lg:w-1/3 bg-gradient-to-br from-orange-50 to-red-50 p-8">
                      <h4 className="text-xl font-bold text-gray-900 mb-6">Expected Impact</h4>
                      
                      <div className="space-y-4 mb-8">
                        <div className="bg-white/80 rounded-xl p-4">
                          <div className="text-sm text-gray-600 mb-1">Revenue Impact</div>
                          <div className="text-lg font-bold text-green-600">{solution.impact.revenue}</div>
                        </div>
                        <div className="bg-white/80 rounded-xl p-4">
                          <div className="text-sm text-gray-600 mb-1">Efficiency Gain</div>
                          <div className="text-lg font-bold text-blue-600">{solution.impact.efficiency}</div>
                        </div>
                        <div className="bg-white/80 rounded-xl p-4">
                          <div className="text-sm text-gray-600 mb-1">Cost Reduction</div>
                          <div className="text-lg font-bold text-purple-600">{solution.impact.cost}</div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Investment Range</div>
                          <div className="text-lg font-bold text-gray-900">{solution.investment}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Payback Period</div>
                          <div className="text-lg font-bold text-orange-600">{solution.payback}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Success Stories Section */}
        {activeTab === 'success' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Real Success Stories</h3>
                <div className="flex justify-center gap-2">
                  {successStories.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStory(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        currentStory === index ? 'bg-orange-500' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="transition-all duration-500">
                {successStories.map((story, index) => (
                  <div
                    key={index}
                    className={`${currentStory === index ? 'block' : 'hidden'}`}
                  >
                    <div className="lg:flex items-center gap-8">
                      <div className="lg:w-1/2 mb-6 lg:mb-0">
                        <div className="flex items-center gap-4 mb-4">
                          <h4 className="text-2xl font-bold text-gray-900">{story.company}</h4>
                          <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                            {story.industry}
                          </span>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-red-700 mb-2">Challenge:</h5>
                            <p className="text-gray-600">{story.challenge}</p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-green-700 mb-2">Solution:</h5>
                            <p className="text-gray-600">{story.solution}</p>
                          </div>
                        </div>
                      </div>

                      <div className="lg:w-1/2">
                        <h5 className="font-semibold text-gray-900 mb-4">Results Achieved:</h5>
                        <div className="grid grid-cols-1 gap-4">
                          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                            <div className="text-2xl font-bold text-green-600 mb-1">{story.results.revenue}</div>
                            <div className="text-sm text-green-700">Revenue Growth</div>
                          </div>
                          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                            <div className="text-2xl font-bold text-blue-600 mb-1">{story.results.efficiency}</div>
                            <div className="text-sm text-blue-700">Efficiency Improvement</div>
                          </div>
                          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                            <div className="text-2xl font-bold text-purple-600 mb-1">{story.results.satisfaction}</div>
                            <div className="text-sm text-purple-700">Additional Benefit</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Automate Your Success?</h2>
            <p className="text-xl mb-8 opacity-90">Let's identify the automation opportunities that will drive your business growth</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative px-8 py-4 bg-white text-orange-600 rounded-full font-bold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <span className="relative z-10">Get Free Automation Audit</span>
                <div className="absolute inset-0 bg-orange-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-orange-600 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Automation;