import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AssetCard = ({ asset, onPreview, onAddToCart, onLike }) => {
  const [isLiked, setIsLiked] = useState(asset?.isLiked || false);
  const [isHovered, setIsHovered] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike?.(asset?.id, !isLiked);
  };

  const formatPrice = (price) => {
    return price === 0 ? 'Free' : `$${price}`;
  };

  const getLicenseIcon = (license) => {
    switch (license) {
      case 'commercial': return 'Briefcase';
      case 'editorial': return 'FileText';
      case 'extended': return 'Crown';
      default: return 'Shield';
    }
  };

  return (
    <div 
      className="group relative bg-card rounded-xl border border-border overflow-hidden shadow-creative-sm hover:shadow-creative transition-all duration-300 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Asset Preview */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={asset?.thumbnail}
          alt={asset?.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Overlay Actions */}
        <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex items-center space-x-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => onPreview(asset)}
              className="bg-white/90 hover:bg-white text-gray-900"
            >
              <Icon name="Eye" size={16} className="mr-2" />
              Preview
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={() => onAddToCart(asset)}
              className="bg-accent hover:bg-accent/90"
            >
              <Icon name="Plus" size={16} className="mr-2" />
              Add
            </Button>
          </div>
        </div>

        {/* Asset Type Badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 rounded-md text-xs font-medium ${
            asset?.type === 'photo' ? 'bg-blue-500/90 text-white' :
            asset?.type === 'video' ? 'bg-purple-500/90 text-white' :
            asset?.type === 'template' ? 'bg-green-500/90 text-white' :
            asset?.type === 'brush'? 'bg-orange-500/90 text-white' : 'bg-gray-500/90 text-white'
          }`}>
            {asset?.type?.charAt(0)?.toUpperCase() + asset?.type?.slice(1)}
          </span>
        </div>

        {/* Like Button */}
        <button
          onClick={handleLike}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white transition-colors"
        >
          <Icon 
            name="Heart" 
            size={16} 
            className={isLiked ? 'text-red-500 fill-current' : 'text-gray-600'} 
          />
        </button>

        {/* Premium Badge */}
        {asset?.isPremium && (
          <div className="absolute top-3 right-12">
            <Icon name="Crown" size={16} className="text-yellow-500" />
          </div>
        )}
      </div>
      {/* Asset Info */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-card-foreground line-clamp-2 flex-1 mr-2">
            {asset?.title}
          </h3>
          <div className="flex items-center space-x-1">
            <Icon name={getLicenseIcon(asset?.license)} size={14} className="text-muted-foreground" />
            <span className="text-sm font-bold text-primary">
              {formatPrice(asset?.price)}
            </span>
          </div>
        </div>

        {/* Creator Info */}
        <div className="flex items-center space-x-2 mb-3">
          <Image
            src={asset?.creator?.avatar}
            alt={asset?.creator?.name}
            className="w-6 h-6 rounded-full"
          />
          <span className="text-sm text-muted-foreground">{asset?.creator?.name}</span>
          {asset?.creator?.isVerified && (
            <Icon name="BadgeCheck" size={14} className="text-blue-500" />
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Icon name="Download" size={14} />
              <span>{asset?.downloads}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Heart" size={14} />
              <span>{asset?.likes}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Star" size={14} className="text-yellow-500 fill-current" />
            <span>{asset?.rating}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-3">
          {asset?.tags?.slice(0, 3)?.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
          {asset?.tags?.length > 3 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
              +{asset?.tags?.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default AssetCard;