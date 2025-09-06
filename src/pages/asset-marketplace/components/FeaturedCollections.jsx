import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedCollections = ({ onViewCollection }) => {
  const collections = [
    {
      id: 'trending-2025',
      title: 'Trending in 2025',
      description: 'The most popular assets this year',
      curator: 'PixelForge Team',
      assetCount: 156,
      previewImages: [
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&h=200&fit=crop',
        'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=200&h=200&fit=crop',
        'https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=200&h=200&fit=crop',
        'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=200&h=200&fit=crop'
      ],
      badge: 'Hot',
      badgeColor: 'bg-red-500'
    },
    {
      id: 'ai-generated',
      title: 'AI-Generated Masterpieces',
      description: 'Cutting-edge AI artwork and designs',
      curator: 'AI Creative Lab',
      assetCount: 89,
      previewImages: [
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&h=200&fit=crop',
        'https://images.unsplash.com/photo-1686191128892-3b4e0e4b8e3a?w=200&h=200&fit=crop',
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&h=200&fit=crop',
        'https://images.unsplash.com/photo-1686191128892-3b4e0e4b8e3a?w=200&h=200&fit=crop'
      ],
      badge: 'New',
      badgeColor: 'bg-green-500'
    },
    {
      id: 'minimalist-design',
      title: 'Minimalist Design',
      description: 'Clean, simple, and elegant assets',
      curator: 'Design Studio Pro',
      assetCount: 234,
      previewImages: [
        'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=200&h=200&fit=crop',
        'https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=200&h=200&fit=crop',
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&h=200&fit=crop',
        'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=200&h=200&fit=crop'
      ],
      badge: 'Featured',
      badgeColor: 'bg-blue-500'
    },
    {
      id: 'nature-photography',
      title: 'Nature & Landscapes',
      description: 'Breathtaking natural scenery',
      curator: 'Nature Collective',
      assetCount: 412,
      previewImages: [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=200&fit=crop',
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=200&h=200&fit=crop',
        'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=200&h=200&fit=crop'
      ],
      badge: 'Popular',
      badgeColor: 'bg-purple-500'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Featured Collections</h2>
          <p className="text-muted-foreground mt-1">Curated asset collections for every project</p>
        </div>
        <Button variant="outline" size="sm">
          <Icon name="Grid3X3" size={16} className="mr-2" />
          View All Collections
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {collections?.map((collection) => (
          <div
            key={collection?.id}
            className="group bg-card border border-border rounded-xl overflow-hidden shadow-creative-sm hover:shadow-creative transition-all duration-300 hover:-translate-y-1"
          >
            {/* Preview Grid */}
            <div className="relative h-48 p-4">
              <div className="grid grid-cols-2 gap-2 h-full">
                {collection?.previewImages?.map((image, index) => (
                  <div
                    key={index}
                    className={`relative overflow-hidden rounded-lg ${
                      index === 0 ? 'row-span-2' : ''
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>

              {/* Badge */}
              <div className="absolute top-6 left-6">
                <span className={`px-2 py-1 rounded-md text-xs font-medium text-white ${collection?.badgeColor}`}>
                  {collection?.badge}
                </span>
              </div>

              {/* Asset Count */}
              <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm rounded-md px-2 py-1">
                <span className="text-xs font-medium text-white">
                  {collection?.assetCount} assets
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-card-foreground mb-1 group-hover:text-accent transition-colors">
                    {collection?.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {collection?.description}
                  </p>
                  <div className="flex items-center space-x-2">
                    <Icon name="User" size={14} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Curated by {collection?.curator}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Icon name="Image" size={14} />
                    <span>{collection?.assetCount}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Eye" size={14} />
                    <span>{Math.floor(Math.random() * 10000) + 1000}</span>
                  </div>
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onViewCollection(collection?.id)}
                  className="group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-colors"
                >
                  <Icon name="ArrowRight" size={14} className="mr-2" />
                  Explore
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCollections;