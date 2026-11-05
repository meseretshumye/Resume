import React from 'react';

export default function Logo({ size = 'md', className = '', showGlow = true }) {
  const sizeMap = {
    sm: 'w-9 h-9',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const selectedSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`relative group shrink-0 ${className}`}>
      {/* Ambient Backlight Glow */}
      {showGlow && (
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 opacity-40 group-hover:opacity-80 blur-md transition-all duration-500 group-hover:scale-110" />
      )}

      {/* Modern Logo Container with Beveled Gradient Border */}
      <div className={`relative ${selectedSize} rounded-2xl overflow-hidden p-[1px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-amber-400 shadow-lg shadow-indigo-950/40 border border-white/20 group-hover:scale-105 transition-all duration-300`}>
        <div className="w-full h-full rounded-[15px] overflow-hidden bg-[#f6f7f2] flex items-center justify-center">
          <img
            src="/images/ms-luxury-logo.png"
            alt="Meseret Shumye - MS Logo"
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}
