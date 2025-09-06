import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const AssetPreviewModal = ({ asset, isOpen, onClose, onAddToCart, onDownload }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(asset?.isLiked || false);

  if (!isOpen || !asset) return null;

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const formatPrice = (price) => {
    return price === 0 ? 'Free' : `$${price}`;
  };

  const getLicenseInfo = (license) => {
    const licenses = {
      free: {
        name: 'Free License',
        description: 'Free for personal and commercial use',
        icon: 'Gift',
        color: 'text-green-600'
      },
      commercial: {
        name: 'Commercial License',
        description: 'Full commercial rights included',
        icon: 'Briefcase',
        color: 'text-blue-600'
      },
      editorial: {
        name: 'Editorial License',
        description: 'For editorial use only',
        icon: 'FileText',
        color: 'text-orange-600'
      },
      extended: {
        name: 'Extended License',
        description: 'Extended commercial rights',
        icon: 'Crown',
        color: 'text-purple-600'
      }
    };
    return licenses?.[license] || licenses?.free;
  };

  const licenseInfo = getLicenseInfo(asset?.license);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal */}
      <div className="relative bg-background border border-border rounded-2xl shadow-creative-lg max-w-6xl w-full mx-4 max-h-[90vh] overflow-hidden">
        <div className="flex h-full">
          {/* Preview Section */}
          <div className="flex-1 bg-muted relative">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
            >
              <Icon name="X" size={20} />
            </button>

            {/* Asset Preview */}
            <div className="h-full flex items-center justify-center p-8">
              {asset?.type === 'video' ? (
                <div className="relative w-full h-full max-w-4xl max-h-96 bg-black rounded-lg overflow-hidden">
                  <video
                    src={asset?.previewUrl || asset?.thumbnail}
                    controls
                    className="w-full h-full object-contain"
                    poster={asset?.thumbnail}
                  />
                </div>
              ) : (
                <div className="relative w-full h-full max-w-4xl max-h-96">
                  <Image
                    src={asset?.previewImages?.[currentImageIndex] || asset?.thumbnail}
                    alt={asset?.title}
                    className="w-full h-full object-contain rounded-lg"
                  />
                  
                  {/* Image Navigation */}
                  {asset?.previewImages && asset?.previewImages?.length > 1 && (
                    <>
                      <button
                        onClick={() => setCurrentImageIndex(Math.max(0, currentImageIndex - 1))}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                        disabled={currentImageIndex === 0}
                      >
                        <Icon name="ChevronLeft" size={20} />
                      </button>
                      <button
                        onClick={() => setCurrentImageIndex(Math.min(asset?.previewImages?.length - 1, currentImageIndex + 1))}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                        disabled={currentImageIndex === asset?.previewImages?.length - 1}
                      >
                        <Icon name="ChevronRight" size={20} />
                      </button>
                      
                      {/* Image Indicators */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {asset?.previewImages?.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Details Section */}
          <div className="w-96 bg-background border-l border-border flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-border">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-foreground mb-2">{asset?.title}</h2>
                  <div className="flex items-center space-x-2 mb-3">
                    <Image
                      src={asset?.creator?.avatar}
                      alt={asset?.creator?.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <div className="flex items-center space-x-1">
                        <span className="text-sm font-medium text-foreground">{asset?.creator?.name}</span>
                        {asset?.creator?.isVerified && (
                          <Icon name="BadgeCheck" size={16} className="text-blue-500" />
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {asset?.creator?.followers} followers
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleLike}
                    className="p-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    <Icon 
                      name="Heart" 
                      size={20} 
                      className={isLiked ? 'text-red-500 fill-current' : 'text-muted-foreground'} 
                    />
                  </button>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-foreground">
                      {formatPrice(asset?.price)}
                    </div>
                    {asset?.originalPrice && asset?.originalPrice > asset?.price && (
                      <div className="text-sm text-muted-foreground line-through">
                        ${asset?.originalPrice}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                {asset?.price === 0 ? (
                  <Button
                    variant="default"
                    fullWidth
                    onClick={() => onDownload(asset)}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <Icon name="Download" size={16} className="mr-2" />
                    Download Free
                  </Button>
                ) : (
                  <>
                    <Button
                      variant="default"
                      fullWidth
                      onClick={() => onAddToCart(asset)}
                    >
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      Add to Cart
                    </Button>
                    <Button
                      variant="outline"
                      fullWidth
                      onClick={() => onDownload(asset)}
                    >
                      <Icon name="CreditCard" size={16} className="mr-2" />
                      Buy Now
                    </Button>
                  </>
                )}
              </div>
            </div>

            {/* Asset Details */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* License Info */}
              <div>
                <h3 className="font-semibold text-foreground mb-3">License</h3>
                <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                  <Icon name={licenseInfo?.icon} size={20} className={licenseInfo?.color} />
                  <div>
                    <div className="font-medium text-foreground">{licenseInfo?.name}</div>
                    <div className="text-sm text-muted-foreground">{licenseInfo?.description}</div>
                  </div>
                </div>
              </div>

              {/* Asset Info */}
              <div>
                <h3 className="font-semibold text-foreground mb-3">Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type:</span>
                    <span className="text-foreground capitalize">{asset?.type}</span>
                  </div>
                  {asset?.dimensions && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Dimensions:</span>
                      <span className="text-foreground">{asset?.dimensions}</span>
                    </div>
                  )}
                  {asset?.fileSize && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">File Size:</span>
                      <span className="text-foreground">{asset?.fileSize}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Downloads:</span>
                    <span className="text-foreground">{asset?.downloads?.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rating:</span>
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={14} className="text-yellow-500 fill-current" />
                      <span className="text-foreground">{asset?.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div>
                <h3 className="font-semibold text-foreground mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {asset?.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              {asset?.description && (
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Description</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {asset?.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetPreviewModal;