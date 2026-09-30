import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export default function Logo({ variant = "light", className = "" }: LogoProps) {
  const isLight = variant === "light";
  const textColor = isLight ? "#FFFFFF" : "#0A1931";
  const subtextColor = isLight ? "#94A3B8" : "#475569";
  const goldColor = "#F59E0B";
  const navyColor = isLight ? "#38BDF8" : "#0A1931";

  return (
    <Link href="/" className={`inline-flex items-center space-x-3 group ${className}`}>
      {/* Emblem SVG Icon */}
      <div className="relative shrink-0">
        <svg
          viewBox="0 0 100 80"
          className="w-11 h-11 sm:w-12 sm:h-12 drop-shadow-md transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* U Letter stem (Left) */}
          <path
            d="M 16 12 L 28 12 L 28 48 C 28 58 35 64 45 64 C 55 64 62 58 62 48 L 62 12 L 74 12 L 74 48 C 74 66 61 76 45 76 C 29 76 16 66 16 48 Z"
            fill={isLight ? "#F8FAFC" : "#0A1931"}
          />

          {/* T Crossbar and stem */}
          <path
            d="M 50 12 L 88 12 L 88 23 L 73 23 L 73 64 L 62 64 L 62 23 L 50 23 Z"
            fill={isLight ? "#E2E8F0" : "#0F284E"}
          />

          {/* Golden Road Curved Swoosh across the monogram */}
          <path
            d="M 10 65 C 10 38, 30 18, 76 18"
            stroke={goldColor}
            strokeWidth="7"
            strokeLinecap="round"
          />

          {/* Road center dashed line */}
          <path
            d="M 14 62 C 16 43, 33 24, 70 20"
            stroke="#FFFFFF"
            strokeWidth="1.8"
            strokeDasharray="4 4"
            strokeLinecap="round"
          />

          {/* Golden Airplane Taking Off at top right */}
          <g transform="translate(73, 8) rotate(42) scale(0.75)">
            <path
              d="M 12 2 L 15 11 L 24 13 L 24 16 L 15 16 L 15 22 L 18 24 L 18 26 L 12 25 L 6 26 L 6 24 L 9 22 L 9 16 L 0 16 L 0 13 L 9 11 Z"
              fill={goldColor}
            />
          </g>
        </svg>
      </div>

      {/* Typography from Business Card */}
      <div className="flex flex-col">
        <div className="flex items-center space-x-1">
          <span
            className="text-xl sm:text-2xl font-black tracking-wider uppercase font-serif"
            style={{ color: textColor }}
          >
            UTKARSH
          </span>
        </div>

        {/* — TRAVELS — with horizontal rules */}
        <div className="flex items-center space-x-1.5 -mt-0.5">
          <span className="w-3.5 h-[1.5px] bg-amber-500 rounded-full" />
          <span className="text-[11px] sm:text-xs font-black tracking-[0.22em] text-amber-500 uppercase">
            TRAVELS
          </span>
          <span className="w-3.5 h-[1.5px] bg-amber-500 rounded-full" />
        </div>

        {/* Tagline in script font */}
        <span
          className="text-[10px] sm:text-[11px] italic tracking-wide font-serif transition-colors mt-0.5"
          style={{ color: isLight ? "#CBD5E1" : "#475569" }}
        >
          Your Journey • Our Priority
        </span>
      </div>
    </Link>
  );
}
