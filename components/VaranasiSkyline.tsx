interface VaranasiSkylineProps {
  className?: string;
  color?: string;
}

export default function VaranasiSkyline({
  className = "w-48 h-20",
  color = "#F59E0B",
}: VaranasiSkylineProps) {
  return (
    <svg
      viewBox="0 0 400 160"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Sacred Temple Spires & Ghat Architecture Silhouette (Matching Business Card Art) */}
      <g stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9">
        {/* Main Central High Temple Shikhar (Kashi Vishwanath style) */}
        <path d="M 230 110 L 230 55 L 245 25 L 260 55 L 260 110" />
        <path d="M 245 10 L 245 25" strokeWidth="3" />
        {/* Temple Kalash & Dhwaja (flag) on spire */}
        <path d="M 245 10 L 255 14 L 245 18 Z" fill={color} />
        {/* Temple horizontal ribbed layers */}
        <line x1="236" y1="42" x2="254" y2="42" strokeWidth="2" />
        <line x1="233" y1="65" x2="257" y2="65" strokeWidth="2" />
        <line x1="230" y1="88" x2="260" y2="88" strokeWidth="2" />
        {/* Arch door of temple */}
        <path d="M 240 110 L 240 95 C 240 90, 250 90, 250 95 L 250 110" />

        {/* Second Shikhar (Left) */}
        <path d="M 185 110 L 185 70 L 198 40 L 211 70 L 211 110" />
        <path d="M 198 28 L 198 40" strokeWidth="2.5" />
        <path d="M 198 28 L 206 32 L 198 36 Z" fill={color} />
        <line x1="190" y1="58" x2="206" y2="58" strokeWidth="1.8" />
        <line x1="187" y1="80" x2="209" y2="80" strokeWidth="1.8" />

        {/* Third Shikhar (Right) */}
        <path d="M 280 110 L 280 68 L 292 42 L 304 68 L 304 110" />
        <path d="M 292 30 L 292 42" strokeWidth="2.5" />
        <path d="M 292 30 L 300 34 L 292 38 Z" fill={color} />
        <line x1="285" y1="56" x2="299" y2="56" strokeWidth="1.8" />
        <line x1="282" y1="78" x2="302" y2="78" strokeWidth="1.8" />

        {/* Small Corner Pavilion / Chhatri */}
        <path d="M 140 110 L 140 85 C 140 78, 160 78, 160 85 L 160 110" />
        <path d="M 150 78 L 150 70" strokeWidth="2" />
        <path d="M 325 110 L 325 85 C 325 78, 345 78, 345 85 L 345 110" />
        <path d="M 335 78 L 335 70" strokeWidth="2" />

        {/* Ghat Stone Steps (Pauri) */}
        <line x1="120" y1="110" x2="360" y2="110" strokeWidth="3" />
        <line x1="110" y1="118" x2="370" y2="118" strokeWidth="2.5" />
        <line x1="95" y1="126" x2="385" y2="126" strokeWidth="2.5" />
        <line x1="80" y1="134" x2="395" y2="134" strokeWidth="2" />

        {/* Sacred Ganga River Water Waves */}
        <path d="M 20 144 C 50 140, 80 148, 110 144 C 140 140, 170 148, 200 144 C 230 140, 260 148, 290 144 C 320 140, 350 148, 380 144" strokeWidth="2" />
        <path d="M 10 152 C 40 148, 70 156, 100 152 C 130 148, 160 156, 190 152 C 220 148, 250 156, 280 152 C 310 148, 340 156, 370 152" strokeWidth="1.5" opacity="0.6" />

        {/* Traditional Wooden Ganga Boat (Nauka) on Left */}
        <path d="M 40 134 C 45 142, 85 142, 95 134 L 100 130 L 35 130 Z" fill={color} fillOpacity="0.25" strokeWidth="2" />
        {/* Boatman with Oar */}
        <line x1="68" y1="122" x2="68" y2="130" strokeWidth="2.5" />
        <circle cx="68" cy="119" r="3" fill={color} />
        <line x1="60" y1="124" x2="80" y2="142" strokeWidth="2" />

        {/* Second Small Boat in Background */}
        <path d="M 115 126 C 120 132, 145 132, 150 126 L 153 123 L 112 123 Z" fill={color} fillOpacity="0.2" strokeWidth="1.5" />
      </g>
    </svg>
  );
}
