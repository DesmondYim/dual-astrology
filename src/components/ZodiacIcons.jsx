import React from 'react';

/**
 * Premium, ultra-minimalist vector line-art (SVG) icons for the 24 Zodiac signs.
 * Uses thin stroke lines (stroke-width: 1.2) for a high-end luxury watch/astronomy aesthetic.
 */
export default function ZodiacIcon({ name, className = "w-16 h-16" }) {
  const strokeColor = "currentColor";
  const strokeWidth = "1.2";

  const icons = {
    // === WESTERN SIGNS (Elegant Astrological Glyphs & Constellation Nodes) ===
    "Aries": (
      <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} className={className}>
        <path d="M12 21V9a4 4 0 014-4h2M12 9a4 4 0 00-4-4H6" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="18" cy="5" r="1.5" className="fill-current"/>
        <circle cx="6" cy="5" r="1.5" className="fill-current"/>
      </svg>
    ),
    "Taurus": (
      <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} className={className}>
        <circle cx="12" cy="14" r="5" strokeLinecap="round"/>
        <path d="M5 4c1 4 5 6 7 6s6-2 7-6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    "Gemini": (
      <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} className={className}>
        <path d="M8 4h8M8 20h8M9 4v16M15 4v16" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="1" className="fill-current"/>
      </svg>
    ),
    "Cancer": (
      <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} className={className}>
        <circle cx="8" cy="9" r="3" strokeLinecap="round"/>
        <circle cx="16" cy="15" r="3" strokeLinecap="round"/>
        <path d="M11 9h7M13 15H6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    "Leo": (
      <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} className={className}>
        <circle cx="6" cy="14" r="2" strokeLinecap="round"/>
        <path d="M8 14c0-3 2-6 5-6s4 2 4 4c0 3-1.5 5-3.5 6.5s.5 2.5 2.5 1.5c2-1 4-2 4-5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    "Virgo": (
      <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} className={className}>
        <path d="M6 5v10a2 2 0 002 2V5m4 0v12M12 5a3 3 0 013 3v9M15 8c0-2 2-3 4-2v11c0 2-2 3-3.5 1" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    "Libra": (
      <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} className={className}>
        <path d="M4 20h16M12 12a4 4 0 00-4 4h8a4 4 0 00-4-4zM5 12h14" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    "Scorpio": (
      <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} className={className}>
        <path d="M6 5v10a2 2 0 002 2V5m4 0v10a2 2 0 002 2V5m4 0v8a3 3 0 003 3m0 0l-2-1.5m2 1.5l-2 1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    "Sagittarius": (
      <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} className={className}>
        <path d="M20 4l-11 11M14 4h6v6M6 18l3-3M6.5 11.5l6 6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    "Capricorn": (
      <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} className={className}>
        <path d="M6 5v10m0-6c2-4 6-4 6 0v10m0-7c1-2 3-3 5-3s3 2 3 4c0 3-4 6-4 8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="16" cy="18" r="2" strokeLinecap="round"/>
      </svg>
    ),
    "Aquarius": (
      <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} className={className}>
        <path d="M4 8l3-3 3 3 3-3 3 3 3-3M4 14l3-3 3 3 3-3 3 3 3-3M4 20l3-3 3 3 3-3 3 3 3-3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    "Pisces": (
      <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} className={className}>
        <path d="M6 4c2 4 2 12 0 16M18 4c-2 4-2 12 0 16M4 12h16" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="1.5" className="fill-current"/>
      </svg>
    ),

    // === EASTERN LUNAR SIGNS (Sleek Geometric Animal Symbolisms) ===
    "Rat": (
      <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} className={className}>
        <path d="M12 18c4 0 6-3 6-6s-2-4-6-4-6 1-6 4 2 6 6 6z" strokeLinecap="round"/>
        <path d="M15 8c2-2 4-1 4 1M9 8C7 6 5 7 5 9" strokeLinecap="round"/>
        <path d="M12 18c0 2 2 3 4 2M11 14h2" strokeLinecap="round"/>
      </svg>
    ),
    "Ox": (
      <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} className={className}>
        <path d="M12 19a5 5 0 01-5-5V9h10v5a5 5 0 01-5 5z" strokeLinecap="round"/>
        <path d="M5 8c0-3 3-4 6-4M19 8c0-3-3-4-6-4M9 13h6" strokeLinecap="round"/>
      </svg>
    ),
    "Tiger": (
      <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} className={className}>
        <circle cx="12" cy="12" r="8" strokeLinecap="round"/>
        <path d="M8 12h8M10 9h4M9 15h6M12 4v4" strokeLinecap="round"/>
      </svg>
    ),
    "Rabbit": (
      <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} className={className}>
        <path d="M12 19a6 6 0 01-6-6v-1a6 6 0 0112 0v1a6 6 0 01-6 6z" strokeLinecap="round"/>
        <path d="M9 11V4c0-1.5 1-2 2-2s1.5 1 1.5 3M15 11V4c0-1.5-1-2-2-2s-1.5 1-1.5 3" strokeLinecap="round"/>
      </svg>
    ),
    "Dragon": (
      <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} className={className}>
        <path d="M12 4c5 0 7 3 7 7s-3 6-7 6-7-2-7-6 2-7 7-7z" strokeLinecap="round"/>
        <path d="M5 11c-2-1-3-3-3-5M19 11c2-1 3-3 3-5M9 14l3-2 3 2" strokeLinecap="round"/>
      </svg>
    ),
    "Snake": (
      <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} className={className}>
        <path d="M8 18c0-2.5 2-4 4-4s4 1.5 4 4-2 3-4 3-4-1.5-4-3zm8-8c0-2.2-1.8-4-4-4s-4 1.8-4 4c0 3 8 3 8 6" strokeLinecap="round"/>
        <path d="M11 6l1-2" strokeLinecap="round"/>
      </svg>
    ),
    "Horse": (
      <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} className={className}>
        <path d="M8 20V9c0-3.5 3-5 5-5s4 1.5 4 4v5c0 .5-.5 1-1 1h-3.5L10 18" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 7c2-.5 3 .5 3 2s-1 3-3 2" strokeLinecap="round"/>
      </svg>
    ),
    "Goat": (
      <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} className={className}>
        <path d="M12 18c3 0 5-2 5-6V9H7v3c0 4 2 6 5 6z" strokeLinecap="round"/>
        <path d="M6 8C5 4 8 3 10 5M18 8c1-4-2-5-4-3" strokeLinecap="round"/>
      </svg>
    ),
    "Monkey": (
      <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} className={className}>
        <circle cx="12" cy="13" r="6" strokeLinecap="round"/>
        <path d="M6 13c-1.5 0-2-1.5-2-2s1-2 2-1M18 13c1.5 0 2-1.5 2-2s-1-2-2-1M9 11a1 1 0 100 2M15 11a1 1 0 100 2" strokeLinecap="round"/>
      </svg>
    ),
    "Rooster": (
      <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} className={className}>
        <circle cx="12" cy="13" r="6" strokeLinecap="round"/>
        <path d="M12 4c0 2 1 3 2 3M10 7c.5-2 2-3 2-3" strokeLinecap="round"/>
        <path d="M18 11l2-1-1 2" strokeLinecap="round"/>
      </svg>
    ),
    "Dog": (
      <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} className={className}>
        <path d="M12 19c3.5 0 5-3 5-7s-1.5-5-5-5-5 1-5 5 1.5 7 5 7z" strokeLinecap="round"/>
        <path d="M6 9c-1 1-2 3-1 5M18 9c1 1 2 3 1 5" strokeLinecap="round"/>
      </svg>
    ),
    "Pig": (
      <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} className={className}>
        <circle cx="12" cy="13" r="6.5" strokeLinecap="round"/>
        <rect x="10" y="11" width="4" height="3" rx="1.5" strokeLinecap="round"/>
        <path d="M5.5 10c0-1.5 1-2.5 2-2.5M18.5 10c0-1.5-1-2.5-2-2.5" strokeLinecap="round"/>
      </svg>
    )
  };

  return icons[name] || (
    <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} className={className}>
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}