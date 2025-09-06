import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CreatorSpotlight = ({ onFollowCreator, onViewCreatorProfile }) => {
  const featuredCreators = [
    {
      id: 'sarah-chen',
      name: 'Sarah Chen',
      username: '@sarahcreates',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=200&fit=crop',
      specialty: 'Digital Art & Illustrations',
      followers: 15420,
      assets: 89,
      totalDownloads: 234567,
      rating: 4.9,
      isVerified: true,
      isFollowing: false,
      bio: 'Creating vibrant digital art that brings stories to life. Specializing in character design and fantasy illustrations.',
      recentAssets: [
        'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=100&h=100&fit=crop',
        'https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=100&h=100&fit=crop',
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&h=100&fit=crop'
      ]
    },
    {
      id: 'marcus-photo',
      name: 'Marcus Rodriguez',
      username: '@marcusphoto',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop',
      specialty: 'Nature & Landscape Photography',
      followers: 28750,
      assets: 156,
      totalDownloads: 567890,
      rating: 4.8,
      isVerified: true,
      isFollowing: false,
      bio: 'Professional photographer capturing the beauty of our natural world. Available for commercial licensing.',
      recentAssets: [
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=100&h=100&fit=crop',
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=100&h=100&fit=crop',
        'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=100&h=100&fit=crop'
      ]
    },
    {
      id: 'design-studio',
      name: 'Minimal Design Co.',
      username: '@minimaldesign',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
      coverImage: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=200&fit=crop',
      specialty: 'UI/UX Templates & Graphics',
      followers: 42300,
      assets: 203,
      totalDownloads: 892345,
      rating: 4.9,
      isVerified: true,
      isFollowing: false,
      bio: 'Clean, modern design templates for web and mobile. Helping designers create beautiful interfaces faster.',
      recentAssets: [
        'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=100&h=100&fit=crop',
        'https://images.unsplash.com/photo-1558655146-d09347e92766?w=100&h=100&fit=crop',
        'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=100&h=100&fit=crop'
      ]
    }
  ];

  const handleFollow = (creatorId, isCurrentlyFollowing) => {
    onFollowCreator?.(creatorId, !isCurrentlyFollowing);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Creator Spotlight</h2>
          <p className="text-muted-foreground mt-1">Discover talented creators and their amazing work</p>
        </div>
        <Button variant="outline" size="sm">
          <Icon name="Users" size={16} className="mr-2" />
          Browse All Creators
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {featuredCreators?.map((creator) => (
          <div
            key={creator?.id}
            className="group bg-card border border-border rounded-xl overflow-hidden shadow-creative-sm hover:shadow-creative transition-all duration-300 hover:-translate-y-1"
          >
            {/* Cover Image */}
            <div className="relative h-24 overflow-hidden">
              <Image
                src={creator?.coverImage}
                alt={`${creator?.name} cover`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Verified Badge */}
              {creator?.isVerified && (
                <div className="absolute top-3 right-3">
                  <Icon name="BadgeCheck" size={20} className="text-blue-500" />
                </div>
              )}
            </div>

            {/* Profile Section */}
            <div className="relative px-6 pb-6">
              {/* Avatar */}
              <div className="flex justify-center -mt-8 mb-4">
                <div className="relative">
                  <Image
                    src={creator?.avatar}
                    alt={creator?.name}
                    className="w-16 h-16 rounded-full border-4 border-background shadow-creative-sm"
                  />
                  {creator?.isVerified && (
                    <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
                      <Icon name="Check" size={12} color="white" strokeWidth={3} />
                    </div>
                  )}
                </div>
              </div>

              {/* Creator Info */}
              <div className="text-center mb-4">
                <h3 className="font-bold text-lg text-card-foreground mb-1">{creator?.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{creator?.username}</p>
                <p className="text-sm font-medium text-accent">{creator?.specialty}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                <div>
                  <div className="font-bold text-card-foreground">{creator?.followers?.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">Followers</div>
                </div>
                <div>
                  <div className="font-bold text-card-foreground">{creator?.assets}</div>
                  <div className="text-xs text-muted-foreground">Assets</div>
                </div>
                <div className="flex items-center justify-center space-x-1">
                  <Icon name="Star" size={14} className="text-yellow-500 fill-current" />
                  <div className="font-bold text-card-foreground">{creator?.rating}</div>
                </div>
              </div>

              {/* Bio */}
              <p className="text-sm text-muted-foreground text-center mb-4 line-clamp-2">
                {creator?.bio}
              </p>

              {/* Recent Assets Preview */}
              <div className="flex justify-center space-x-2 mb-4">
                {creator?.recentAssets?.map((asset, index) => (
                  <div key={index} className="w-12 h-12 rounded-lg overflow-hidden">
                    <Image
                      src={asset}
                      alt={`Recent work ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <Button
                  variant={creator?.isFollowing ? "outline" : "default"}
                  size="sm"
                  fullWidth
                  onClick={() => handleFollow(creator?.id, creator?.isFollowing)}
                  className={creator?.isFollowing ? "border-accent text-accent hover:bg-accent hover:text-accent-foreground" : ""}
                >
                  <Icon 
                    name={creator?.isFollowing ? "UserCheck" : "UserPlus"} 
                    size={14} 
                    className="mr-2" 
                  />
                  {creator?.isFollowing ? 'Following' : 'Follow'}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  onClick={() => onViewCreatorProfile?.(creator?.id)}
                >
                  <Icon name="Eye" size={14} className="mr-2" />
                  View Profile
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Creator Program CTA */}
      <div className="bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-accent/10 rounded-xl">
              <Icon name="Palette" size={24} className="text-accent" />
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-1">Join Our Creator Program</h3>
              <p className="text-muted-foreground">
                Share your creative work and earn revenue from downloads
              </p>
            </div>
          </div>
          <Button variant="default" className="bg-accent hover:bg-accent/90">
            <Icon name="ArrowRight" size={16} className="mr-2" />
            Become a Creator
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreatorSpotlight;