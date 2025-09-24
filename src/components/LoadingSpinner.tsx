import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <div className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-muted border-t-primary`} />
    </div>
  );
};

export const LoadingSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`loading-shimmer rounded-lg ${className}`} />
  );
};

export const ProductCardSkeleton: React.FC = () => {
  return (
    <div className="card-elevated p-4 space-y-4">
      <LoadingSkeleton className="w-full h-48 rounded-lg" />
      <LoadingSkeleton className="h-4 w-20" />
      <LoadingSkeleton className="h-5 w-full" />
      <LoadingSkeleton className="h-4 w-24" />
      <LoadingSkeleton className="h-6 w-16" />
      <LoadingSkeleton className="h-10 w-full rounded-lg" />
    </div>
  );
};

export const PageLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center space-y-4">
        <LoadingSpinner size="lg" />
        <p className="text-muted-foreground animate-pulse">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;