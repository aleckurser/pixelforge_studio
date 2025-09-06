import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CategoryGrid = ({ onCategorySelect }) => {
  const categories = [
    {
      id: 'photography',
      name: 'Photography',
      description: 'Professional stock photos',
      icon: 'Camera',
      count: '2.5M+',
      color: 'from-blue-500 to-blue-600',
      preview: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400&h=300&fit=crop'
    },
    {
      id: 'video',
      name: 'Video Footage',
      description: 'HD & 4K video clips',
      icon: 'Video',
      count: '850K+',
      color: 'from-purple-500 to-purple-600',
      preview: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop'
    },
    {
      id: 'templates',
      name: 'Design Templates',
      description: 'Ready-to-use layouts',
      icon: 'Layout',
      count: '450K+',
      color: 'from-green-500 to-green-600',
      preview: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop'
    },
    {
      id: 'graphics',
      name: 'Vector Graphics',
      description: 'Scalable illustrations',
      icon: 'Shapes',
      count: '320K+',
      color: 'from-orange-500 to-orange-600',
      preview: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=300&fit=crop'
    },
    {
      id: 'brushes',
      name: 'Brushes & Tools',
      description: 'Digital painting assets',
      icon: 'Paintbrush',
      count: '180K+',
      color: 'from-pink-500 to-pink-600',
      preview: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop'
    },
    {
      id: 'effects',
      name: 'Effects & Filters',
      description: 'Creative enhancements',
      icon: 'Sparkles',
      count: '95K+',
      color: 'from-indigo-500 to-indigo-600',
      preview: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop'
    },
    {
      id: 'fonts',
      name: 'Typography',
      description: 'Premium font collections',
      icon: 'Type',
      count: '25K+',
      color: 'from-teal-500 to-teal-600',
      preview: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop'
    },
    {
      id: 'audio',
      name: 'Audio Assets',
      description: 'Music & sound effects',
      icon: 'Music',
      count: '120K+',
      color: 'from-red-500 to-red-600',
      preview: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories?.map((category) => (
        <button
          key={category?.id}
          onClick={() => onCategorySelect(category?.id)}
          className="group relative overflow-hidden rounded-xl bg-card border border-border shadow-creative-sm hover:shadow-creative transition-all duration-300 hover:-translate-y-1"
        >
          {/* Background Image */}
          <div className="relative h-32 overflow-hidden">
            <Image
              src={category?.preview}
              alt={category?.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${category?.color} opacity-80`} />
            
            {/* Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                <Icon name={category?.icon} size={24} color="white" strokeWidth={2} />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 text-left">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-semibold text-card-foreground group-hover:text-accent transition-colors">
                {category?.name}
              </h3>
              <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                {category?.count}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              {category?.description}
            </p>
          </div>

          {/* Hover Arrow */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <Icon name="ArrowRight" size={16} color="white" />
          </div>
        </button>
      ))}
    </div>
  );
};

export default CategoryGrid;