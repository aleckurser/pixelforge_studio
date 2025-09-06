import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TestimonialCard = ({ testimonial }) => {
  const {
    name,
    role,
    company,
    avatar,
    content,
    metrics,
    plan,
    rating = 5
  } = testimonial;

  return (
    <div className="bg-card border border-border rounded-2xl p-8 h-full flex flex-col">
      {/* Rating */}
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(5)]?.map((_, i) => (
          <Icon
            key={i}
            name="Star"
            size={16}
            className={i < rating ? 'text-warning fill-current' : 'text-text-secondary'}
          />
        ))}
      </div>
      {/* Content */}
      <blockquote className="text-card-foreground mb-6 flex-grow">
        "{content}"
      </blockquote>
      {/* Metrics */}
      {metrics && (
        <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-muted/20 rounded-xl">
          {metrics?.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-accent">{metric?.value}</div>
              <div className="text-xs text-text-secondary">{metric?.label}</div>
            </div>
          ))}
        </div>
      )}
      {/* Author */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Image
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
          {plan && (
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
              <Icon name="Crown" size={12} className="text-accent-foreground" />
            </div>
          )}
        </div>
        <div className="flex-grow">
          <div className="font-semibold text-card-foreground">{name}</div>
          <div className="text-sm text-text-secondary">{role}</div>
          <div className="text-sm text-text-secondary">{company}</div>
        </div>
        {plan && (
          <div className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full font-medium">
            {plan}
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;