
import React, { useState } from 'react';

interface Feature {
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
  highlights: string[];
  isNew: boolean;
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getCategoryColor = (category: string) => {
    const colors = {
      "AI & Automation": "bg-purple-100 text-purple-800",
      "Databases": "bg-blue-100 text-blue-800",
      "Collaboration": "bg-green-100 text-green-800",
      "Templates": "bg-orange-100 text-orange-800",
      "Mobile": "bg-pink-100 text-pink-800",
      "Developer": "bg-gray-100 text-gray-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  const handleLearnMore = () => {
    // Open Notion's official website in a new tab
    window.open('https://www.notion.so', '_blank');
  };

  return (
    <div 
      className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:scale-105 ${
        isHovered ? 'ring-2 ring-purple-300' : ''
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="text-4xl">{feature.image}</div>
          <div className="flex items-center space-x-2">
            {feature.isNew && (
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                NEW
              </span>
            )}
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${getCategoryColor(feature.category)}`}>
              {feature.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>

        {/* Highlights */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Highlights:</h4>
          <ul className="space-y-1">
            {feature.highlights.map((highlight, idx) => (
              <li key={idx} className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-sm text-gray-500">{feature.date}</span>
          <button 
            onClick={handleLearnMore}
            className="text-purple-600 hover:text-purple-800 font-medium text-sm transition-colors"
          >
            Learn More →
          </button>
        </div>
      </div>

      {/* Hover Effect */}
      <div className={`h-1 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}></div>
    </div>
  );
};

export default FeatureCard;
