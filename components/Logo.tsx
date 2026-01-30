
import React from 'react';

interface LogoProps {
  className?: string;
  color?: 'black' | 'white' | 'currentColor';
}

const Logo: React.FC<LogoProps> = ({ className = "h-8", color = "white" }) => {
  const fillColor = color === 'white' ? '#FFFFFF' : color === 'black' ? '#000000' : 'currentColor';

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto transition-colors duration-300"
      >
        {/* Geometric 'M' Symbol representing architectural structure */}
        <path 
          d="M20 80V20L50 50L80 20V80" 
          stroke={fillColor} 
          strokeWidth="8" 
          strokeLinecap="square" 
          strokeLinejoin="miter"
        />
        <path 
          d="M20 80H35" 
          stroke={fillColor} 
          strokeWidth="8" 
        />
        <path 
          d="M65 80H80" 
          stroke={fillColor} 
          strokeWidth="8" 
        />
        <rect 
          x="46" 
          y="70" 
          width="8" 
          height="10" 
          fill={fillColor}
        />
      </svg>
    </div>
  );
};

export default Logo;
