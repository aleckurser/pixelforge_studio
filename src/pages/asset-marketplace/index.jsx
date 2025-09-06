import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import AssetCard from './components/AssetCard';
import SearchFilters from './components/SearchFilters';
import CategoryGrid from './components/CategoryGrid';
import FeaturedCollections from './components/FeaturedCollections';
import AssetPreviewModal from './components/AssetPreviewModal';
import CreatorSpotlight from './components/CreatorSpotlight';

const AssetMarketplace = () => {
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [currentView, setCurrentView] = useState('browse'); // browse, category, collection
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filters, setFilters] = useState({
    search: '',
    type: 'all',
    license: 'all',
    sortBy: 'relevance',
    orientation: 'all',
    resolution: 'all',
    priceRange: { min: 0, max: 1000 },
    isPremium: null
  });

  // Mock data for assets
  const mockAssets = [
    {
      id: 'asset-1',
      title: 'Modern Workspace Photography',
      type: 'photo',
      thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop',
      previewImages: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop'
      ],
      price: 29,
      originalPrice: 39,
      license: 'commercial',
      creator: {
        id: 'creator-1',
        name: 'Alex Johnson',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
        isVerified: true,
        followers: 12500
      },
      downloads: 15420,
      likes: 2340,
      rating: 4.8,
      tags: ['workspace', 'office', 'modern', 'business', 'professional'],
      dimensions: '4000x3000px',
      fileSize: '8.5MB',
      isPremium: true,
      isLiked: false,
      description: 'High-quality modern workspace photography perfect for business presentations, websites, and marketing materials.'
    },
    {
      id: 'asset-2',
      title: 'Minimalist UI Design Template',
      type: 'template',
      thumbnail: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=400&fit=crop',
      previewImages: [
        'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop'
      ],
      price: 0,
      license: 'free',
      creator: {
        id: 'creator-2',
        name: 'Design Studio Pro',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face',
        isVerified: true,
        followers: 8900
      },
      downloads: 45670,
      likes: 5670,
      rating: 4.9,
      tags: ['ui', 'template', 'minimalist', 'design', 'web'],
      dimensions: '1920x1080px',
      fileSize: '2.1MB',
      isPremium: false,
      isLiked: true,
      description: 'Clean and modern UI template perfect for web applications and mobile interfaces.'
    },
    {
      id: 'asset-3',
      title: 'Nature Landscape Collection',
      type: 'photo',
      thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
      previewImages: [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop'
      ],
      price: 45,
      license: 'extended',
      creator: {
        id: 'creator-3',
        name: 'Nature Collective',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
        isVerified: true,
        followers: 25600
      },
      downloads: 8920,
      likes: 1890,
      rating: 4.7,
      tags: ['nature', 'landscape', 'mountains', 'scenic', 'outdoor'],
      dimensions: '6000x4000px',
      fileSize: '15.2MB',
      isPremium: true,
      isLiked: false,
      description: 'Breathtaking landscape photography collection featuring pristine natural environments.'
    },
    {
      id: 'asset-4',
      title: 'Digital Art Brush Pack',
      type: 'brush',
      thumbnail: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop',
      previewImages: [
        'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop'
      ],
      price: 19,
      license: 'commercial',
      creator: {
        id: 'creator-4',
        name: 'Sarah Chen',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
        isVerified: true,
        followers: 15400
      },
      downloads: 12340,
      likes: 3450,
      rating: 4.9,
      tags: ['brush', 'digital art', 'painting', 'creative', 'tools'],
      dimensions: 'Various',
      fileSize: '45MB',
      isPremium: true,
      isLiked: false,
      description: 'Professional digital art brush collection for creating stunning digital paintings and illustrations.'
    },
    {
      id: 'asset-5',
      title: 'Corporate Video Background',
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=400&fit=crop',
      previewUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
      price: 35,
      license: 'commercial',
      creator: {
        id: 'creator-5',
        name: 'Video Pro Studios',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face',
        isVerified: true,
        followers: 18700
      },
      downloads: 6780,
      likes: 1230,
      rating: 4.6,
      tags: ['video', 'corporate', 'background', 'professional', 'motion'],
      dimensions: '1920x1080px',
      fileSize: '125MB',
      isPremium: true,
      isLiked: false,
      description: 'High-quality corporate video background perfect for presentations and professional content.'
    },
    {
      id: 'asset-6',
      title: 'Typography Font Collection',
      type: 'font',
      thumbnail: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop',
      previewImages: [
        'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop'
      ],
      price: 25,
      license: 'commercial',
      creator: {
        id: 'creator-6',
        name: 'Type Foundry',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face',
        isVerified: true,
        followers: 9800
      },
      downloads: 23450,
      likes: 4560,
      rating: 4.8,
      tags: ['font', 'typography', 'design', 'text', 'creative'],
      dimensions: 'Vector',
      fileSize: '12MB',
      isPremium: true,
      isLiked: true,
      description: 'Modern typography collection featuring versatile fonts for branding and design projects.'
    }
  ];

  const [displayedAssets, setDisplayedAssets] = useState(mockAssets);

  useEffect(() => {
    // Filter assets based on current filters
    let filtered = mockAssets;

    if (filters?.search) {
      filtered = filtered?.filter(asset =>
        asset?.title?.toLowerCase()?.includes(filters?.search?.toLowerCase()) ||
        asset?.tags?.some(tag => tag?.toLowerCase()?.includes(filters?.search?.toLowerCase()))
      );
    }

    if (filters?.type !== 'all') {
      filtered = filtered?.filter(asset => asset?.type === filters?.type);
    }

    if (filters?.license !== 'all') {
      filtered = filtered?.filter(asset => asset?.license === filters?.license);
    }

    if (filters?.isPremium !== null) {
      filtered = filtered?.filter(asset => asset?.isPremium === filters?.isPremium);
    }

    // Sort assets
    switch (filters?.sortBy) {
      case 'popular':
        filtered?.sort((a, b) => b?.downloads - a?.downloads);
        break;
      case 'newest':
        filtered?.sort((a, b) => b?.id?.localeCompare(a?.id));
        break;
      case 'oldest':
        filtered?.sort((a, b) => a?.id?.localeCompare(b?.id));
        break;
      case 'price_low':
        filtered?.sort((a, b) => a?.price - b?.price);
        break;
      case 'price_high':
        filtered?.sort((a, b) => b?.price - a?.price);
        break;
      case 'rating':
        filtered?.sort((a, b) => b?.rating - a?.rating);
        break;
      default:
        // Keep original order for relevance
        break;
    }

    setDisplayedAssets(filtered);
  }, [filters]);

  const handlePreview = (asset) => {
    setSelectedAsset(asset);
    setIsPreviewOpen(true);
  };

  const handleAddToCart = (asset) => {
    if (!cartItems?.find(item => item?.id === asset?.id)) {
      setCartItems([...cartItems, asset]);
    }
  };

  const handleLike = (assetId, isLiked) => {
    setDisplayedAssets(prev =>
      prev?.map(asset =>
        asset?.id === assetId
          ? { ...asset, isLiked, likes: isLiked ? asset?.likes + 1 : asset?.likes - 1 }
          : asset
      )
    );
  };

  const handleDownload = (asset) => {
    console.log('Downloading asset:', asset?.title);
    // Implement download logic
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentView('category');
    setFilters(prev => ({ ...prev, type: categoryId === 'photography' ? 'photo' : categoryId }));
  };

  const handleViewCollection = (collectionId) => {
    setCurrentView('collection');
    console.log('Viewing collection:', collectionId);
  };

  const handleFollowCreator = (creatorId, shouldFollow) => {
    console.log('Following creator:', creatorId, shouldFollow);
  };

  const handleViewCreatorProfile = (creatorId) => {
    console.log('Viewing creator profile:', creatorId);
  };

  const clearFilters = () => {
    setFilters({
      search: '',
      type: 'all',
      license: 'all',
      sortBy: 'relevance',
      orientation: 'all',
      resolution: 'all',
      priceRange: { min: 0, max: 1000 },
      isPremium: null
    });
    setCurrentView('browse');
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-accent/5 to-accent/10 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Asset <span className="text-accent">Marketplace</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover millions of high-quality photos, videos, templates, and creative assets.\n
              From free resources to premium collections, find everything you need for your next project.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-foreground">2.5M+</div>
                <div className="text-sm text-muted-foreground">Assets</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Creators</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">1M+</div>
                <div className="text-sm text-muted-foreground">Downloads</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">4.8★</div>
                <div className="text-sm text-muted-foreground">Avg Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-80 space-y-6">
            <SearchFilters
              filters={filters}
              onFiltersChange={setFilters}
              onClearFilters={clearFilters}
            />

            {/* Cart Summary */}
            {cartItems?.length > 0 && (
              <div className="bg-card border border-border rounded-xl p-6 shadow-creative-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">Cart</h3>
                  <span className="text-sm text-muted-foreground">
                    {cartItems?.length} item{cartItems?.length !== 1 ? 's' : ''}
                  </span>
                </div>
                <div className="space-y-2 mb-4">
                  {cartItems?.slice(0, 3)?.map((item) => (
                    <div key={item?.id} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-muted rounded overflow-hidden">
                        <img src={item?.thumbnail} alt={item?.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-foreground truncate">{item?.title}</div>
                        <div className="text-xs text-muted-foreground">${item?.price}</div>
                      </div>
                    </div>
                  ))}
                  {cartItems?.length > 3 && (
                    <div className="text-sm text-muted-foreground text-center">
                      +{cartItems?.length - 3} more items
                    </div>
                  )}
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-foreground">Total:</span>
                    <span className="font-bold text-foreground">
                      ${cartItems?.reduce((sum, item) => sum + item?.price, 0)}
                    </span>
                  </div>
                  <Button variant="default" fullWidth>
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Checkout
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-12">
            {currentView === 'browse' && (
              <>
                {/* Categories */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-foreground">Browse Categories</h2>
                  </div>
                  <CategoryGrid onCategorySelect={handleCategorySelect} />
                </div>

                {/* Featured Collections */}
                <FeaturedCollections onViewCollection={handleViewCollection} />

                {/* Creator Spotlight */}
                <CreatorSpotlight
                  onFollowCreator={handleFollowCreator}
                  onViewCreatorProfile={handleViewCreatorProfile}
                />
              </>
            )}

            {/* Assets Grid */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {currentView === 'category' && selectedCategory
                      ? `${selectedCategory?.charAt(0)?.toUpperCase() + selectedCategory?.slice(1)} Assets`
                      : currentView === 'collection' ?'Collection Assets' :'All Assets'
                    }
                  </h2>
                  <p className="text-muted-foreground mt-1">
                    {displayedAssets?.length?.toLocaleString()} assets found
                  </p>
                </div>
                
                {(currentView !== 'browse' || filters?.search || filters?.type !== 'all') && (
                  <Button variant="outline" size="sm" onClick={clearFilters}>
                    <Icon name="X" size={16} className="mr-2" />
                    Clear Filters
                  </Button>
                )}
              </div>

              {displayedAssets?.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {displayedAssets?.map((asset) => (
                    <AssetCard
                      key={asset?.id}
                      asset={asset}
                      onPreview={handlePreview}
                      onAddToCart={handleAddToCart}
                      onLike={handleLike}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">No assets found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your search criteria or browse our categories
                  </p>
                  <Button variant="outline" onClick={clearFilters}>
                    <Icon name="RotateCcw" size={16} className="mr-2" />
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Asset Preview Modal */}
      <AssetPreviewModal
        asset={selectedAsset}
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        onAddToCart={handleAddToCart}
        onDownload={handleDownload}
      />
      {/* Footer */}
      <footer className="bg-card border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={18} color="white" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground">PixelForge Studio</h3>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Discover, create, and share amazing visual content with our comprehensive creative platform.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm">
                  <Icon name="Twitter" size={16} />
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="Instagram" size={16} />
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="Youtube" size={16} />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Marketplace</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Browse Assets</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Collections</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Creators</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Licensing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date()?.getFullYear()} PixelForge Studio. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AssetMarketplace;