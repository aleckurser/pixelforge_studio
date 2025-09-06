import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const SearchFilters = ({ filters, onFiltersChange, onClearFilters }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const assetTypes = [
    { value: 'all', label: 'All Types' },
    { value: 'photo', label: 'Photos' },
    { value: 'video', label: 'Videos' },
    { value: 'template', label: 'Templates' },
    { value: 'brush', label: 'Brushes' },
    { value: 'effect', label: 'Effects' },
    { value: 'font', label: 'Fonts' }
  ];

  const licenseTypes = [
    { value: 'all', label: 'All Licenses' },
    { value: 'free', label: 'Free' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'editorial', label: 'Editorial' },
    { value: 'extended', label: 'Extended' }
  ];

  const sortOptions = [
    { value: 'relevance', label: 'Most Relevant' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'price_low', label: 'Price: Low to High' },
    { value: 'price_high', label: 'Price: High to Low' },
    { value: 'downloads', label: 'Most Downloaded' },
    { value: 'rating', label: 'Highest Rated' }
  ];

  const orientations = [
    { value: 'all', label: 'All Orientations' },
    { value: 'horizontal', label: 'Horizontal' },
    { value: 'vertical', label: 'Vertical' },
    { value: 'square', label: 'Square' }
  ];

  const resolutions = [
    { value: 'all', label: 'All Resolutions' },
    { value: 'small', label: 'Small (< 2MP)' },
    { value: 'medium', label: 'Medium (2-8MP)' },
    { value: 'large', label: 'Large (8-20MP)' },
    { value: 'extra_large', label: 'Extra Large (> 20MP)' }
  ];

  const handleFilterChange = (key, value) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (filters?.type !== 'all') count++;
    if (filters?.license !== 'all') count++;
    if (filters?.orientation !== 'all') count++;
    if (filters?.resolution !== 'all') count++;
    if (filters?.priceRange?.min > 0 || filters?.priceRange?.max < 1000) count++;
    if (filters?.isPremium !== null) count++;
    return count;
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-creative-sm">
      {/* Search Bar */}
      <div className="relative mb-6">
        <Input
          type="search"
          placeholder="Search assets, creators, or tags..."
          value={filters?.search}
          onChange={(e) => handleFilterChange('search', e?.target?.value)}
          className="pl-10"
        />
        <Icon 
          name="Search" 
          size={18} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
        />
      </div>
      {/* Quick Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        <Button
          variant={filters?.type === 'all' ? 'default' : 'outline'}
          size="sm"
          onClick={() => handleFilterChange('type', 'all')}
        >
          All
        </Button>
        <Button
          variant={filters?.type === 'photo' ? 'default' : 'outline'}
          size="sm"
          onClick={() => handleFilterChange('type', 'photo')}
        >
          <Icon name="Image" size={16} className="mr-2" />
          Photos
        </Button>
        <Button
          variant={filters?.type === 'video' ? 'default' : 'outline'}
          size="sm"
          onClick={() => handleFilterChange('type', 'video')}
        >
          <Icon name="Video" size={16} className="mr-2" />
          Videos
        </Button>
        <Button
          variant={filters?.type === 'template' ? 'default' : 'outline'}
          size="sm"
          onClick={() => handleFilterChange('type', 'template')}
        >
          <Icon name="Layout" size={16} className="mr-2" />
          Templates
        </Button>
        <Button
          variant={filters?.isPremium === false ? 'default' : 'outline'}
          size="sm"
          onClick={() => handleFilterChange('isPremium', filters?.isPremium === false ? null : false)}
        >
          <Icon name="Gift" size={16} className="mr-2" />
          Free
        </Button>
      </div>
      {/* Advanced Filters Toggle */}
      <div className="flex items-center justify-between mb-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-muted-foreground hover:text-foreground"
        >
          <Icon name={isExpanded ? "ChevronUp" : "ChevronDown"} size={16} className="mr-2" />
          Advanced Filters
          {getActiveFiltersCount() > 0 && (
            <span className="ml-2 px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">
              {getActiveFiltersCount()}
            </span>
          )}
        </Button>
        
        {getActiveFiltersCount() > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="text-muted-foreground hover:text-foreground"
          >
            <Icon name="X" size={16} className="mr-2" />
            Clear All
          </Button>
        )}
      </div>
      {/* Advanced Filters */}
      {isExpanded && (
        <div className="space-y-4 pt-4 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Select
              label="Asset Type"
              options={assetTypes}
              value={filters?.type}
              onChange={(value) => handleFilterChange('type', value)}
            />
            
            <Select
              label="License"
              options={licenseTypes}
              value={filters?.license}
              onChange={(value) => handleFilterChange('license', value)}
            />
            
            <Select
              label="Sort By"
              options={sortOptions}
              value={filters?.sortBy}
              onChange={(value) => handleFilterChange('sortBy', value)}
            />
            
            <Select
              label="Orientation"
              options={orientations}
              value={filters?.orientation}
              onChange={(value) => handleFilterChange('orientation', value)}
            />
            
            <Select
              label="Resolution"
              options={resolutions}
              value={filters?.resolution}
              onChange={(value) => handleFilterChange('resolution', value)}
            />
          </div>

          {/* Price Range */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Price Range</label>
            <div className="flex items-center space-x-4">
              <Input
                type="number"
                placeholder="Min"
                value={filters?.priceRange?.min}
                onChange={(e) => handleFilterChange('priceRange', {
                  ...filters?.priceRange,
                  min: parseInt(e?.target?.value) || 0
                })}
                className="w-24"
              />
              <span className="text-muted-foreground">to</span>
              <Input
                type="number"
                placeholder="Max"
                value={filters?.priceRange?.max}
                onChange={(e) => handleFilterChange('priceRange', {
                  ...filters?.priceRange,
                  max: parseInt(e?.target?.value) || 1000
                })}
                className="w-24"
              />
            </div>
          </div>

          {/* Premium Toggle */}
          <div className="flex items-center space-x-4">
            <Button
              variant={filters?.isPremium === true ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleFilterChange('isPremium', filters?.isPremium === true ? null : true)}
            >
              <Icon name="Crown" size={16} className="mr-2" />
              Premium Only
            </Button>
            <Button
              variant={filters?.isPremium === false ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleFilterChange('isPremium', filters?.isPremium === false ? null : false)}
            >
              <Icon name="Gift" size={16} className="mr-2" />
              Free Only
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilters;