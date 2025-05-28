
import React from 'react';
import { Link } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <h3 className="text-xl font-bold">Notion Features Blog</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Stay updated with the latest Notion features, updates, and innovations. 
              Your go-to source for all things Notion.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => window.open('https://www.notion.so', '_blank')}
                className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
              >
                Subscribe to Updates
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="hover:text-white transition-colors text-left"
                >
                  Latest Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('updates')}
                  className="hover:text-white transition-colors text-left"
                >
                  Recent Updates
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.open('https://www.notion.so/contact', '_blank')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => window.open('https://www.notion.so', '_blank')}
                  className="hover:text-white transition-colors flex items-center"
                >
                  Official Notion <Link size={14} className="ml-1" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.open('https://www.notion.so/help', '_blank')}
                  className="hover:text-white transition-colors text-left"
                >
                  Help Center
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.open('https://www.notion.so/community', '_blank')}
                  className="hover:text-white transition-colors text-left"
                >
                  Community
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.open('https://developers.notion.com', '_blank')}
                  className="hover:text-white transition-colors text-left"
                >
                  API Docs
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Notion Features Blog. Made with ❤️ for the Notion community.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
