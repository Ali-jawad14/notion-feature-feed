
import React from 'react';
import FeatureCard from './FeatureCard';

const features = [
  {
    title: "AI-Powered Writing Assistant",
    description: "Get help writing, editing, and summarizing content with Notion's built-in AI assistant that understands context and improves your productivity.",
    date: "December 2024",
    category: "AI & Automation",
    image: "🤖",
    highlights: ["Smart content generation", "Context-aware suggestions", "Grammar and style improvements"],
    isNew: true
  },
  {
    title: "Advanced Database Views",
    description: "Create sophisticated database layouts with new view types including timeline, gallery, and board views for better data visualization.",
    date: "November 2024",
    category: "Databases",
    image: "📊",
    highlights: ["Timeline view", "Enhanced filtering", "Custom sorting options"],
    isNew: true
  },
  {
    title: "Team Collaboration Hub",
    description: "Enhanced real-time collaboration features with live cursors, comments, and improved sharing controls for seamless teamwork.",
    date: "October 2024",
    category: "Collaboration",
    image: "👥",
    highlights: ["Live cursors", "Threaded comments", "Permission management"],
    isNew: false
  },
  {
    title: "Template Gallery Expansion",
    description: "Access hundreds of new professionally designed templates for every use case, from project management to personal planning.",
    date: "September 2024",
    category: "Templates",
    image: "📝",
    highlights: ["50+ new templates", "Industry-specific designs", "Customizable layouts"],
    isNew: false
  },
  {
    title: "Mobile App Redesign",
    description: "Completely redesigned mobile experience with improved navigation, faster performance, and offline functionality.",
    date: "August 2024",
    category: "Mobile",
    image: "📱",
    highlights: ["Offline mode", "Redesigned interface", "Faster sync"],
    isNew: false
  },
  {
    title: "API v2.0 Launch",
    description: "More powerful API with expanded endpoints, better documentation, and enhanced integration capabilities for developers.",
    date: "July 2024",
    category: "Developer",
    image: "⚡",
    highlights: ["New endpoints", "Better rate limits", "Webhook support"],
    isNew: false
  }
];

const FeaturesGrid = () => {
  return (
    <section id="features" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Feature Updates</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the newest additions and improvements that make Notion more powerful than ever
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
