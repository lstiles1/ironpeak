import React from 'react';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  compact?: boolean;
  tight?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  className = '',
  showTagline = true,
  compact = false,
  tight = false,
}) => {
  const sizeClass = tight ? 'h-10 md:h-11 max-w-[120px]' : compact ? 'h-12 md:h-14 max-w-[180px]' : 'h-12 md:h-14 max-w-[200px]';
  return (
    <div
      className={`flex items-center shrink-0 gap-3 ${className}`}
      aria-label="IronPeak Construction Group"
    >
      <img
        src="/logo.png"
        alt="IronPeak Construction Group"
        className={`object-contain object-left transition-transform duration-300 hover:scale-[1.02] ${sizeClass}`}
        width={tight ? 120 : compact ? 180 : 200}
        height={tight ? 40 : compact ? 48 : 56}
      />
      {showTagline && !compact && (
        <span className="sr-only">Construction Group</span>
      )}
    </div>
  );
};

export default Logo;
