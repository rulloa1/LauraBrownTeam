import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '' }) => {
  const isDark = variant === 'dark';
  
  // Colors based on variant
  const primaryColor = isDark ? '#050505' : '#ffffff';
  const accentColor = '#C5A059'; // Gold
  
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      {/* Custom Icon matching the House Logo Style with LB initials */}
      <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        {/* Left House Structure (Dark/White) */}
        <path 
          d="M50 12 L15 38 V90 H48" 
          stroke={primaryColor} 
          strokeWidth="5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        {/* Right House Structure (Gold) */}
        <path 
          d="M50 12 L85 38 V82 H62" 
          stroke={accentColor} 
          strokeWidth="5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        {/* Letters */}
        <text 
          x="22" 
          y="78" 
          fontFamily="serif" 
          fontSize="45" 
          fontWeight="bold" 
          fill={primaryColor}
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          L
        </text>
        <text 
          x="60" 
          y="78" 
          fontFamily="serif" 
          fontSize="45" 
          fontWeight="bold" 
          fill={accentColor}
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          B
        </text>
      </svg>
      
      <div className="flex flex-col justify-center">
        <span className={`text-xl font-serif font-bold tracking-wide leading-none uppercase ${isDark ? 'text-brand-dark' : 'text-white'}`}>
          Laura Brown Team
        </span>
        <span className={`text-[10px] font-sans font-bold tracking-[0.3em] uppercase leading-none mt-2 ${isDark ? 'text-brand-dark' : 'text-white/80'}`}>
          Real Estate
        </span>
      </div>
    </div>
  );
};

export default Logo;