import React from 'react';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  compact?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  className = '',
  showTagline = true,
  compact = false,
}) => {
  return (
    <div
      className={`flex items-center gap-3 ${className}`}
      aria-label="IronPeak Construction Group"
    >
      <img
        src="/logo.png"
        alt="IronPeak Construction Group"
        className={`object-contain object-left transition-transform duration-300 hover:scale-[1.02] ${compact ? 'h-8 md:h-9 max-w-[120px]' : 'h-10 md:h-12 max-w-[180px]'}`}
        width={compact ? 120 : 180}
        height={compact ? 32 : 48}
      />
      {showTagline && !compact && (
        <span className="sr-only">Construction Group</span>
      )}
    </div>
  );
};

export default Logo;
