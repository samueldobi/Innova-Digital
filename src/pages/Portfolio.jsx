import { useState, useEffect } from 'react';
import { portfolioProjects,categoryColors } from '../data/data';


const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(portfolioProjects);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const filterCategories = ['All', 'Web Application', 'Mobile Application', 'Automation Platform', 'Web Design'];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(portfolioProjects);
    } else {
      setFilteredProjects(portfolioProjects.filter(project => project.type === activeFilter));
    }
  }, [activeFilter]);

  return (
    <div className="relative min-h-screen hero-pattern overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-red-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-yellow-200/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
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
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider bg-orange-100/80 px-4 py-2 rounded-full border border-orange-200">
              Our Portfolio
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent mb-6">
            Digital Masterpieces
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore our collection of innovative web solutions, mobile applications, and automation platforms 
            that have transformed businesses and delighted users worldwide.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 border-2 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white border-transparent shadow-lg scale-105'
                  : 'bg-white/80 text-gray-700 border-gray-200 hover:border-orange-300 hover:bg-orange-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className={`relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg border border-gray-200/50 transition-all duration-500
              
              ${hoveredProject === project.id ? 'shadow-2xl shadow-orange-200/50 scale-[1.02] border-orange-300' : ''}`}>
                
                {/* Featured Badge */}
                {/* {project.featured && (
                  <div className="absolute top-6 right-6 z-20">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Featured
                    </span>
                  </div>
                )} */}

                <div >
                  {/* Project Image */}
                  <div className={`relative overflow-hidden `}>
                    <div className="aspect-[16/10] relative">
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className={`w-full h-full object-cover transition-transform duration-700 ${
                          hoveredProject === project.id ? 'scale-110' : 'scale-100'
                        }`}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
                        hoveredProject === project.id ? 'opacity-80' : 'opacity-40'
                      }`}></div>
                      
                      {/* Overlay Content */}
                      <div className="absolute inset-0 flex items-end p-6">
                        <div className="text-white">
                          <div className="flex items-center gap-3 mb-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                              categoryColors[project.type] || 'bg-gray-100 text-gray-800 border-gray-200'
                            }`}>
                              {project.type}
                            </span>
                            <span className="text-sm opacity-75">{project.year}</span>
                          </div>
                          <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                          <p className="text-sm opacity-90">{project.category}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className= "p-8">
                    
                    {/* Mobile Title (hidden on desktop for featured projects) */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-2xl font-bold text-gray-900">{project.name}</h3>
                        <span className="text-sm text-gray-500">{project.year}</span>
                      </div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                          categoryColors[project.type] || 'bg-gray-100 text-gray-800 border-gray-200'
                        }`}>
                          {project.type}
                        </span>
                        <span className="text-sm text-gray-600">{project.category}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <a 
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        View Project
                      </a>
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-full font-semibold transition-all duration-300 hover:border-orange-300 hover:bg-orange-50"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 opacity-90">Let's create something amazing together</p>
            <button className="group relative px-8 py-4 bg-white text-orange-600 rounded-full font-bold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-orange-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;