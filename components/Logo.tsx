
import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  color?: 'black' | 'white' | 'currentColor';
}

const Logo: React.FC<LogoProps> = ({ className = "h-8", color = "white" }) => {
  /**
   * 1. /public/images/... : 사용자가 명시적으로 요청한 경로
   * 2. GitHub Raw URL : GitHub 저장소의 실제 이미지 데이터 주소
   * 3. /images/... : 일반적인 웹 환경의 루트 경로
   */
  const paths = [
    "/public/images/site-logo.png",
    "https://raw.githubusercontent.com/hanseokbang85/Mu/main/public/images/site-logo.png",
    "https://github.com/hanseokbang85/Mu/blob/main/public/images/site-logo.png?raw=true",
    "public/images/site-logo.png",
    "/images/site-logo.png"
  ];

  const [pathIndex, setPathIndex] = useState(0);
  const [isFailed, setIsFailed] = useState(false);

  // 로고 색상 제어 (이미지가 검은색일 경우를 대비해 필터 적용)
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
      console.error("로고 이미지를 불러올 수 없습니다. 경로를 확인해주세요.");
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
