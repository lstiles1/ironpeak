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
        className={`object-cover transition-transform duration-300 hover:scale-[1.02] rounded-full ${
          compact ? 'h-11 md:h-12 w-11 md:w-12' : 'h-14 md:h-16 w-14 md:w-16'
        }`}
        width={compact ? 170 : 240}
        height={compact ? 40 : 56}
      />
      {showTagline && !compact && (
        <span className="sr-only">Construction Group</span>
      )}
    </div>
  );
};

export default Logo;
