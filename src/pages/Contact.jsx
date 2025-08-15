import { useState, useEffect } from 'react';
import { contactMethods, serviceOptions, budgetRanges,faqs } from '../data/data';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form will be submitted to the dummy action URL
    console.log('Form submitted:', formData);
  };

  return (
    <div className="relative min-h-screen hero-pattern overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-yellow-200/15 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-orange-300/40 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider bg-orange-100/80 px-4 py-2 rounded-full border border-orange-200">
              Get In Touch
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent mb-6">
            Let's Create Together
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your digital presence? We're here to help bring your vision to life. 
            Get in touch and let's discuss how we can accelerate your business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Methods */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Multiple Ways to Connect</h2>
              <p className="text-gray-600 text-lg">
                Choose the communication method that works best for you. We're available through 
                all channels and ready to discuss your project.
              </p>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  className="group block bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-gray-200/50 hover:shadow-xl hover:border-orange-300 transition-all duration-500 hover:scale-[1.02]"
                >
                  <div className="flex items-start gap-6">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                        {method.title}
                      </h3>
                      <div className="text-lg font-semibold text-gray-700 mb-2">
                        {method.value}
                      </div>
                      <p className="text-gray-600">
                        {method.description}
                      </p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Business Hours */}
            <div className="mt-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-sm opacity-90">
                  Emergency support available 24/7 for existing clients
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-xl">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your Project</h2>
                <p className="text-gray-600">
                  Tell us about your project and we'll get back to you with a detailed proposal and timeline.
                </p>
              </div>

              <form action="https://dummy-form-endpoint.com/contact" method="POST" onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                        focusedField === 'name' 
                          ? 'border-orange-400 bg-orange-50/50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                        focusedField === 'email' 
                          ? 'border-orange-400 bg-orange-50/50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Phone and Company Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                        focusedField === 'phone' 
                          ? 'border-orange-400 bg-orange-50/50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('company')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                        focusedField === 'company' 
                          ? 'border-orange-400 bg-orange-50/50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                {/* Service and Budget Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('service')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                        focusedField === 'service' 
                          ? 'border-orange-400 bg-orange-50/50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('budget')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                        focusedField === 'budget' 
                          ? 'border-orange-400 bg-orange-50/50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Timeline */}
                <div className="relative">
                  <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('timeline')}
                    onBlur={() => setFocusedField('')}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                      focusedField === 'timeline' 
                        ? 'border-orange-400 bg-orange-50/50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <option value="">When do you need this completed?</option>
                    <option value="ASAP">ASAP (Rush Job)</option>
                    <option value="1-2 weeks">1-2 weeks</option>
                    <option value="1 month">1 month</option>
                    <option value="2-3 months">2-3 months</option>
                    <option value="3+ months">3+ months</option>
                    <option value="Flexible">I'm flexible</option>
                  </select>
                </div>

                {/* Message */}
                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField('')}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none resize-none ${
                      focusedField === 'message' 
                        ? 'border-orange-400 bg-orange-50/50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="Tell us about your project, goals, and any specific requirements you have in mind..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group relative w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-bold overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Send Project Details
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <p className="text-sm text-gray-500 text-center">
                  We'll respond within 24 hours with a detailed proposal and next steps.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className={`mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Quick answers to common questions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
                <h4 className="font-bold text-gray-900 mb-3">{faq.q}</h4>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;