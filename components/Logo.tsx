
import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  color?: 'black' | 'white' | 'currentColor';
}

const Logo: React.FC<LogoProps> = ({ className = "h-8", color = "white" }) => {
  /**
   * 저장소가 Public으로 전환되었으므로 깃허브 원격 주소가 가장 확실한 방법입니다.
   * 또한 사용자가 요청한 로컬 상대 경로들을 순차적으로 시도합니다.
   */
  const paths = [
    "https://raw.githubusercontent.com/hanseokbang85/Mu/main/public/images/site-logo.png",
    "/public/images/site-logo.png",
    "public/images/site-logo.png",
    "/images/site-logo.png"
  ];

  const [pathIndex, setPathIndex] = useState(0);
  const [isFailed, setIsFailed] = useState(false);

  const filterStyle = color === 'white' 
    ? { filter: 'brightness(0) invert(1)' } 
    : color === 'black' 
      ? { filter: 'brightness(0)' } 
      : {};

  const handleError = () => {
    if (pathIndex < paths.length - 1) {
      setPathIndex(pathIndex + 1);
    } else {
      setIsFailed(true);
      console.error("모든 경로에서 로고 이미지를 불러오는 데 실패했습니다.");
    }
  };

  if (isFailed) {
    return (
      <div className={`flex items-center justify-center font-bold tracking-tighter ${className} ${color === 'white' ? 'text-white' : 'text-black'}`}>
        DESIGN MU
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src={paths[pathIndex]} 
        alt="DESIGN MU Logo" 
        className="h-full w-auto object-contain transition-all duration-300"
        style={filterStyle}
        onError={handleError}
      />
    </div>
  );
};

export default Logo;
