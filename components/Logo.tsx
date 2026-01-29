
import React from 'react';

interface LogoProps {
  className?: string;
  color?: 'black' | 'white' | 'currentColor';
}

const Logo: React.FC<LogoProps> = ({ className = "h-8", color = "white" }) => {
  // Directly using the raw URL from the user's provided GitHub repository
  const logoUrl = "https://raw.githubusercontent.com/hanseokbang85/Mu/main/public/images/LOGO.png";

  /**
   * We use CSS filters to ensure the logo is visible regardless of its original color.
   * If color is 'white', we force it to white using brightness and invert.
   * If color is 'black', we force it to black using brightness.
   */
  const filterStyle = color === 'white' 
    ? { filter: 'brightness(0) invert(1)' } 
    : color === 'black' 
      ? { filter: 'brightness(0)' } 
      : {};

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src={logoUrl} 
        alt="DESIGN MU Logo" 
        className="h-full w-auto object-contain transition-all duration-300"
        style={filterStyle}
        onError={(e) => {
          // Fallback if the image fails to load for any reason
          console.error("Logo failed to load from GitHub");
        }}
      />
    </div>
  );
};

export default Logo;
