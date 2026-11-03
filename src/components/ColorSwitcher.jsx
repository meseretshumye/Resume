import React, { useState, useEffect, useRef } from 'react';
import { Settings, Check } from 'lucide-react';

// 10 Color Swatches exactly matching the user's reference
export const THEME_PALETTES = [
  // Row 1
  {
    id: 'indigo',
    name: 'Indigo',
    hex: '#6610f2',
    hover: '#520dc2',
    active: '#4409a8',
    rgb: '102, 16, 242',
    light: 'rgba(102, 16, 242, 0.12)',
    border: 'rgba(102, 16, 242, 0.45)',
    glow: 'rgba(102, 16, 242, 0.35)',
  },
  {
    id: 'blue',
    name: 'Blue',
    hex: '#007bff',
    hover: '#0069d9',
    active: '#0056b3',
    rgb: '0, 123, 255',
    light: 'rgba(0, 123, 255, 0.12)',
    border: 'rgba(0, 123, 255, 0.45)',
    glow: 'rgba(0, 123, 255, 0.35)',
  },
  {
    id: 'purple',
    name: 'Purple',
    hex: '#6f42c1',
    hover: '#59339d',
    active: '#482782',
    rgb: '111, 66, 193',
    light: 'rgba(111, 66, 193, 0.12)',
    border: 'rgba(111, 66, 193, 0.45)',
    glow: 'rgba(111, 66, 193, 0.35)',
  },
  {
    id: 'cyan',
    name: 'Cyan',
    hex: '#17a2b8',
    hover: '#138496',
    active: '#117a8b',
    rgb: '23, 162, 184',
    light: 'rgba(23, 162, 184, 0.12)',
    border: 'rgba(23, 162, 184, 0.45)',
    glow: 'rgba(23, 162, 184, 0.35)',
  },
  {
    id: 'red',
    name: 'Red',
    hex: '#dc3545',
    hover: '#c82333',
    active: '#bd2130',
    rgb: '220, 53, 69',
    light: 'rgba(220, 53, 69, 0.12)',
    border: 'rgba(220, 53, 69, 0.45)',
    glow: 'rgba(220, 53, 69, 0.35)',
  },
  // Row 2
  {
    id: 'pink',
    name: 'Pink',
    hex: '#e83e8c',
    hover: '#d62575',
    active: '#bd1563',
    rgb: '232, 62, 140',
    light: 'rgba(232, 62, 140, 0.12)',
    border: 'rgba(232, 62, 140, 0.45)',
    glow: 'rgba(232, 62, 140, 0.35)',
  },
  {
    id: 'green',
    name: 'Green',
    hex: '#28a745',
    hover: '#218838',
    active: '#1e7e34',
    rgb: '40, 167, 69',
    light: 'rgba(40, 167, 69, 0.12)',
    border: 'rgba(40, 167, 69, 0.45)',
    glow: 'rgba(40, 167, 69, 0.35)',
  },
  {
    id: 'yellow',
    name: 'Yellow',
    hex: '#ffc107',
    hover: '#e0a800',
    active: '#d39e00',
    rgb: '255, 193, 7',
    light: 'rgba(255, 193, 7, 0.16)',
    border: 'rgba(255, 193, 7, 0.5)',
    glow: 'rgba(255, 193, 7, 0.35)',
  },
  {
    id: 'orange',
    name: 'Orange',
    hex: '#fd7e14',
    hover: '#e36209',
    active: '#cc5404',
    rgb: '253, 126, 20',
    light: 'rgba(253, 126, 20, 0.12)',
    border: 'rgba(253, 126, 20, 0.45)',
    glow: 'rgba(253, 126, 20, 0.35)',
  },
  {
    id: 'brown',
    name: 'Brown',
    hex: '#795548',
    hover: '#5d3f34',
    active: '#4e342e',
    rgb: '121, 85, 72',
    light: 'rgba(121, 85, 72, 0.12)',
    border: 'rgba(121, 85, 72, 0.45)',
    glow: 'rgba(121, 85, 72, 0.35)',
  },
];

// Default Teal Theme
export const DEFAULT_TEAL = {
  id: 'teal',
  name: 'Default Teal',
  hex: '#20c997',
  hover: '#1baa80',
  active: '#16936e',
  rgb: '32, 201, 151',
  light: 'rgba(32, 201, 151, 0.12)',
  border: 'rgba(32, 201, 151, 0.45)',
  glow: 'rgba(32, 201, 151, 0.35)',
};

/**
 * Apply theme variables directly to documentElement
 */
export function applyThemeColor(theme) {
  if (!theme) return;
  const root = document.documentElement;
  root.style.setProperty('--theme-color', theme.hex);
  root.style.setProperty('--theme-hover', theme.hover);
  root.style.setProperty('--theme-active', theme.active);
  root.style.setProperty('--theme-rgb', theme.rgb);
  root.style.setProperty('--theme-light', theme.light);
  root.style.setProperty('--theme-border', theme.border);
  root.style.setProperty('--theme-glow', theme.glow);
  root.setAttribute('data-theme-color', theme.id);
  localStorage.setItem('resume-theme-color', theme.id);
}

export default function ColorSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeThemeId, setActiveThemeId] = useState(() => {
    return localStorage.getItem('resume-theme-color') || 'teal';
  });
  const containerRef = useRef(null);

  // Initialize theme on mount
  useEffect(() => {
    const savedId = localStorage.getItem('resume-theme-color') || 'teal';
    const found = THEME_PALETTES.find((p) => p.id === savedId) || DEFAULT_TEAL;
    setActiveThemeId(found.id);
    applyThemeColor(found);
  }, []);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSelectTheme = (palette) => {
    setActiveThemeId(palette.id);
    applyThemeColor(palette);
  };

  const handleResetTeal = () => {
    setActiveThemeId(DEFAULT_TEAL.id);
    applyThemeColor(DEFAULT_TEAL);
  };

  return (
    <div
      ref={containerRef}
      className="fixed right-0 top-36 sm:top-40 z-50 flex items-start select-none no-print transition-transform duration-300 ease-out"
      style={{
        transform: isOpen ? 'translateX(0)' : 'translateX(240px)',
      }}
      aria-label="Color Switcher Panel"
    >
      {/* Attached Gear Tab Button pinned to the left edge of the card */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle Color Switcher"
        title="Toggle Color Switcher"
        className="w-11 h-11 bg-[#555555] hover:bg-[#444444] text-white flex items-center justify-center rounded-l-md shadow-xl cursor-pointer transition-colors focus:outline-none shrink-0"
      >
        <Settings
          className={`w-5 h-5 text-white transition-transform duration-500 ease-in-out ${
            isOpen ? 'rotate-180' : 'hover:rotate-90'
          }`}
        />
      </button>

      {/* Color Switcher Card */}
      <div className="w-[240px] bg-white dark:bg-[#111827] border-l border-b border-t border-slate-200 dark:border-slate-700 shadow-2xl p-4 sm:p-5 rounded-bl-lg shrink-0">
        <h3 className="text-base font-bold text-slate-800 dark:text-white tracking-tight">
          Color Switcher
        </h3>

        <div className="h-px bg-slate-200 dark:bg-slate-700 my-3" />

        {/* 10 Circular Color Swatches (2 rows of 5) */}
        <div className="grid grid-cols-5 gap-2.5 my-3.5">
          {THEME_PALETTES.map((color) => {
            const isSelected = activeThemeId === color.id;
            return (
              <button
                key={color.id}
                type="button"
                onClick={() => handleSelectTheme(color)}
                title={color.name}
                aria-label={`Select ${color.name} theme`}
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full transition-transform hover:scale-110 focus:outline-none flex items-center justify-center shadow-sm relative ${
                  isSelected
                    ? 'ring-2 ring-offset-2 ring-slate-400 dark:ring-offset-slate-900 scale-105'
                    : ''
                }`}
                style={{ backgroundColor: color.hex }}
              >
                {isSelected && (
                  <Check className="w-3.5 h-3.5 text-white drop-shadow-sm stroke-[3]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Reset Default Teal Button */}
        <button
          type="button"
          onClick={handleResetTeal}
          className="w-full mt-2 py-2.5 px-3 rounded-md font-bold text-white text-xs sm:text-sm text-center shadow transition-all duration-150 hover:brightness-105 active:scale-[0.98] cursor-pointer"
          style={{ backgroundColor: DEFAULT_TEAL.hex }}
        >
          Reset Default Teal
        </button>
      </div>
    </div>
  );
}

