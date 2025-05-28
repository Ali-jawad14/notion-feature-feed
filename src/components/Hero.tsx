
import React from 'react';

const Hero = () => {
  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Discover Notion's
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Latest Features</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Stay up-to-date with the newest innovations, updates, and powerful features 
            that make Notion the ultimate workspace for teams and individuals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={scrollToFeatures}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Explore Features
            </button>
            <button 
              onClick={() => window.open('https://www.notion.so', '_blank')}
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
            >
              Watch Demo
            </button>
          </div>
        </div>
        
        {/* Hero Image/Illustration */}
        <div className="mt-16 relative">
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-8 shadow-xl">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="text-left space-y-3">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-4 bg-purple-200 rounded w-2/3"></div>
                <div className="h-4 bg-blue-200 rounded w-3/5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
