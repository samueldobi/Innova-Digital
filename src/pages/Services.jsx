import { useState, useEffect } from 'react';
import { servicesList } from '../data/data'; 
import { Link } from 'react-router';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-purple-500/5 to-transparent rounded-full"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-purple-400 uppercase tracking-wider bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">
              Our Expertise
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-100 to-blue-100 bg-clip-text  mb-6">
            Digital Excellence
          </h2>
          <p className="text-xl 0 max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into extraordinary digital experiences through innovation, 
            creativity, and cutting-edge technology solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card Container */}
              <div className="relative h-full bg-gradient-to-br from-orange-400 to-red-500 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/30 group-hover:border-purple-500/50 transition-all duration-500 overflow-hidden">
                
                {/* Hover Glow Effect */}
                {/* <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div> */}
                
                {/* Animated Border */}
                {/* <div className="absolute inset-0 rounded-3xl">
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/50 to-blue-500/50 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm`}></div>
                </div> */}

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`text-6xl mb-6 transform transition-all duration-500 ${
                    hoveredIndex === index ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
                  }`}>
                    <div className="relative">
                      <div className="absolute inset-0 rounded-2xl blur-xl group-hover:bg-purple-400/30 transition-colors duration-500"></div>
                      <div className="relative bg-gradient-to-br p-4 rounded-2xl border border-slate-600/50   transition-colors duration-500">
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-100 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white group-hover:text-slate-200 transition-colors duration-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Arrow */}
                  <div className={`mt-6 transform transition-all duration-300 ${
                    hoveredIndex === index ? 'translate-x-2 opacity-100' : 'translate-x-0 opacity-0'
                  }`}>
                    <div className="flex items-center text-purple-400">
                      <span className="text-sm font-medium">Learn more</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Flowing Animation Lines */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-3xl">
                  <div className={`absolute -top-2 -left-2 w-4 h-4 bg-purple-400/30 rounded-full transition-all duration-1000 ${
                    hoveredIndex === index ? 'animate-ping' : ''
                  }`}></div>
                  <div className={`absolute -bottom-2 -right-2 w-3 h-3 bg-blue-400/30 rounded-full transition-all duration-1000 ${
                    hoveredIndex === index ? 'animate-ping' : ''
                  }`} style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="group relative px-8 py-4 bg-gradient-to-br from-orange-400 to-red-500 rounded-full text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
          <Link to="/contact">
            <span className="relative z-10">Contact Us</span>
          </Link>
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-red-800  opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;