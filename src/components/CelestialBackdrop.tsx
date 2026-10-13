import React from 'react';

const VECTOR_STARS = [
  { x: 120, y: 80, r: 1.4, color: '#F2F7FF' },
  { x: 240, y: 140, r: 1.1, color: '#9EDCFF' },
  { x: 380, y: 65, r: 1.6, color: '#C5A9FF' },
  { x: 520, y: 190, r: 1.2, color: '#F2F7FF' },
  { x: 670, y: 110, r: 1.8, color: '#9EDCFF' },
  { x: 760, y: 240, r: 1.3, color: '#C5A9FF' },
  { x: 890, y: 95, r: 2.0, color: '#F2F7FF' },
  { x: 960, y: 175, r: 1.5, color: '#9EDCFF' },
  { x: 1080, y: 70, r: 1.7, color: '#C5A9FF' },
  { x: 1190, y: 155, r: 2.1, color: '#F2F7FF' },
  { x: 1310, y: 88, r: 1.5, color: '#9EDCFF' },
  { x: 1420, y: 210, r: 1.8, color: '#C5A9FF' },
  { x: 1560, y: 120, r: 1.4, color: '#F2F7FF' },
  { x: 1690, y: 60, r: 2.0, color: '#9EDCFF' },
  { x: 1790, y: 185, r: 1.3, color: '#C5A9FF' },
  { x: 610, y: 340, r: 1.5, color: '#9EDCFF' },
  { x: 740, y: 410, r: 1.8, color: '#F2F7FF' },
  { x: 850, y: 310, r: 1.4, color: '#C5A9FF' },
  { x: 1020, y: 295, r: 1.9, color: '#9EDCFF' },
  { x: 1150, y: 370, r: 1.4, color: '#F2F7FF' },
  { x: 1290, y: 280, r: 1.7, color: '#C5A9FF' },
  { x: 1480, y: 350, r: 1.3, color: '#9EDCFF' },
  { x: 180, y: 330, r: 1.2, color: '#C5A9FF' },
  { x: 310, y: 420, r: 1.5, color: '#9EDCFF' },
  { x: 460, y: 470, r: 1.3, color: '#F2F7FF' },
];

const SPARKLE_FLARES = [
  { x: 1120, y: 115, size: 11, color: '#9EDCFF' },
  { x: 840, y: 215, size: 9, color: '#C5A9FF' },
  { x: 650, y: 390, size: 10, color: '#9EDCFF' },
  { x: 1360, y: 145, size: 8, color: '#F2F7FF' },
  { x: 320, y: 110, size: 8, color: '#9EDCFF' },
];

export const CelestialBackdrop: React.FC = () => {
  return (
    <div className="ambient-sky" aria-hidden="true">
      <svg
        className="celestial-digital-art-svg"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <defs>
          {/* Deep Digital-Art Sky Gradient: Midnight Navy -> Cosmic Indigo -> Purplish Horizon */}
          <linearGradient id="digital-sky-grad" x1="0%" y1="0%" x2="15%" y2="100%">
            <stop offset="0%" stopColor="#050918" />
            <stop offset="42%" stopColor="#0A112C" />
            <stop offset="76%" stopColor="#131740" />
            <stop offset="92%" stopColor="#1D1B52" />
            <stop offset="100%" stopColor="#080D22" />
          </linearGradient>

          {/* Diagonal Metallic Ice Blue & Cosmic Violet Nebula Ribbons */}
          <radialGradient id="nebula-band-ice" cx="62%" cy="38%" r="48%">
            <stop offset="0%" stopColor="#9EDCFF" stopOpacity="0.24" />
            <stop offset="45%" stopColor="#5CA8F8" stopOpacity="0.11" />
            <stop offset="100%" stopColor="#050918" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="nebula-band-violet" cx="52%" cy="54%" r="46%">
            <stop offset="0%" stopColor="#C5A9FF" stopOpacity="0.22" />
            <stop offset="48%" stopColor="#8A5CF5" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#050918" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="horizon-aurora" cx="56%" cy="84%" r="42%">
            <stop offset="0%" stopColor="#B8D8FF" stopOpacity="0.22" />
            <stop offset="45%" stopColor="#C5A9FF" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#080D22" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="meteor-trail" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="40%" stopColor="#9EDCFF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#C5A9FF" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="mountain-back" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1A2254" />
            <stop offset="100%" stopColor="#0C1130" />
          </linearGradient>

          <linearGradient id="mountain-mid" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#11183E" />
            <stop offset="100%" stopColor="#070C22" />
          </linearGradient>

          <linearGradient id="mountain-front" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#09102A" />
            <stop offset="100%" stopColor="#040714" />
          </linearGradient>

          <linearGradient id="lake-surface" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0A1230" />
            <stop offset="45%" stopColor="#0E173B" />
            <stop offset="100%" stopColor="#040714" />
          </linearGradient>
        </defs>

        {/* Base Sky */}
        <rect width="1920" height="1080" fill="url(#digital-sky-grad)" />

        {/* Sweeping Vector Nebula Clouds */}
        <g transform="rotate(-26 1080 420)">
          <ellipse cx="1080" cy="390" rx="760" ry="230" fill="url(#nebula-band-ice)" />
          <ellipse cx="980" cy="470" rx="680" ry="210" fill="url(#nebula-band-violet)" />
          <path
            d="M 380 430 Q 760 290 1140 410 T 1760 350"
            fill="none"
            stroke="rgba(158, 220, 255, 0.08)"
            strokeWidth="90"
            strokeLinecap="round"
          />
          <path
            d="M 420 490 Q 820 360 1190 460 T 1720 410"
            fill="none"
            stroke="rgba(197, 169, 255, 0.07)"
            strokeWidth="70"
            strokeLinecap="round"
          />
        </g>

        {/* Horizon Glow Behind Mountains */}
        <ellipse cx="1060" cy="885" rx="780" ry="190" fill="url(#horizon-aurora)" />

        {/* Crisp Vector Starfield Dots */}
        <g className="vector-stars-group">
          {VECTOR_STARS.map((s, i) => (
            <g key={i} transform={`translate(${s.x}, ${s.y})`}>
              <circle r={s.r * 2.6} fill={s.color} opacity="0.18" />
              <circle r={s.r} fill={s.color} opacity="0.88" />
            </g>
          ))}
        </g>

        {/* 4-Point Vector Diamond Star Flares */}
        <g className="vector-flares-group">
          {SPARKLE_FLARES.map((f, i) => (
            <g key={i} transform={`translate(${f.x}, ${f.y})`}>
              <circle r={f.size * 1.4} fill={f.color} opacity="0.16" />
              <path
                d={`M 0 ${-f.size} Q 0 -1.5 ${f.size} 0 Q 0 1.5 0 ${f.size} Q 0 1.5 ${-f.size} 0 Q 0 -1.5 0 ${-f.size} Z`}
                fill="#FFFFFF"
              />
            </g>
          ))}
        </g>

        {/* Delicate Crescent Moon in Upper Right Sky */}
        <g transform="translate(1680, 155)">
          <circle r="34" fill="#9EDCFF" opacity="0.12" />
          <path
            d="M -8 -24 A 24 24 0 1 0 22 14 A 20 20 0 1 1 -8 -24 Z"
            fill="#E8F6FF"
            opacity="0.88"
          />
        </g>

        {/* Crisp Vector Shooting Stars */}
        <g opacity="0.82">
          <line
            x1="460"
            y1="145"
            x2="585"
            y2="72"
            stroke="url(#meteor-trail)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="460" cy="145" r="2.2" fill="#FFFFFF" />

          <line
            x1="1260"
            y1="118"
            x2="1395"
            y2="42"
            stroke="url(#meteor-trail)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <circle cx="1260" cy="118" r="2.4" fill="#FFFFFF" />
        </g>

        {/* Distant Vector Mountain Range (Purplish-Indigo Digital Art Layer) */}
        <polygon
          points="0,920 140,835 290,880 460,790 620,865 790,815 960,885 1130,785 1310,855 1490,765 1670,845 1820,780 1920,835 1920,940 0,940"
          fill="url(#mountain-back)"
        />
        {/* Rim Highlight on Distant Peaks */}
        <polyline
          points="460,790 620,865 790,815 960,885 1130,785 1310,855 1490,765"
          fill="none"
          stroke="rgba(182, 212, 255, 0.25)"
          strokeWidth="1.4"
        />

        {/* Midground Mountain Silhouettes */}
        <polygon
          points="0,935 95,865 230,910 380,835 540,905 710,855 890,915 1040,845 1220,908 1390,825 1580,895 1750,820 1920,890 1920,955 0,955"
          fill="url(#mountain-mid)"
        />

        {/* Foreground Crisp Vector Ridges */}
        <polygon
          points="0,955 180,890 350,942 590,915 840,948 1120,918 1360,946 1620,885 1810,930 1920,905 1920,965 0,965"
          fill="url(#mountain-front)"
        />

        {/* Tranquil Alpine Lake Surface & Vector Starlight Reflections */}
        <rect x="0" y="952" width="1920" height="128" fill="url(#lake-surface)" />
        <line
          x1="0"
          y1="952"
          x2="1920"
          y2="952"
          stroke="rgba(158, 220, 255, 0.28)"
          strokeWidth="1.2"
        />

        {/* Crisp Vector Water Shimmer Lines */}
        <g opacity="0.65">
          <line x1="880" y1="966" x2="1180" y2="966" stroke="#9EDCFF" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="820" y1="976" x2="1240" y2="976" stroke="#C5A9FF" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="910" y1="986" x2="1150" y2="986" stroke="#9EDCFF" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="860" y1="997" x2="1190" y2="997" stroke="#C5A9FF" strokeWidth="1.3" strokeLinecap="round" />
          <line x1="940" y1="1008" x2="1120" y2="1008" stroke="#E8F6FF" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="900" y1="1020" x2="1160" y2="1020" stroke="#9EDCFF" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="965" y1="1034" x2="1095" y2="1034" stroke="#C5A9FF" strokeWidth="1.1" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
};
