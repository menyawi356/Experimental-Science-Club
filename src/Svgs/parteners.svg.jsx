export default function PartnersSVG() {
  return (
    <svg className="symbol-3d-svg" viewBox="0 0 200 200">
      <defs>
        <linearGradient id="magGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A63D2F" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#24345C" />
        </linearGradient>

        <radialGradient id="coreGlowPart" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle
        cx="100"
        cy="105"
        r="94"
        fill="none"
        stroke="#8FA3DE"
        strokeWidth="0.75"
        strokeDasharray="1,9"
        className="spin-cw-slow"
        opacity="0.4"
      />

      <circle cx="100" cy="90" r="45" fill="url(#coreGlowPart)" opacity="0.4" />

      <path
        d="M30,118 C10,58 190,58 170,118"
        fill="none"
        stroke="#D4AF37"
        strokeWidth="2"
        strokeDasharray="6,4"
        className="spin-cw-fast"
      />

      <path
        d="M20,108 C-10,38 210,38 180,108"
        fill="none"
        stroke="#8FA3DE"
        strokeWidth="1.5"
        strokeDasharray="4,4"
        className="spin-ccw-slow"
      />

      <path
        d="M40,128 C25,78 175,78 160,128"
        fill="none"
        stroke="#F5D77F"
        strokeWidth="1.2"
        strokeDasharray="3,5"
        className="spin-ccw-fast"
        opacity="0.55"
      />

      <circle cx="45" cy="70" r="1.8" fill="#F5D77F" className="twinkle-a" />

      <circle cx="155" cy="70" r="1.8" fill="#8FA3DE" className="twinkle-b" />

      <circle cx="100" cy="42" r="1.6" fill="#FFFFFF" className="twinkle-c" />

      <path
        d="M48,138 A62,62 0 1,1 152,138"
        fill="none"
        stroke="url(#magGrad)"
        strokeWidth="18"
        strokeLinecap="round"
      />

      <path
        d="M48,138 A62,62 0 1,1 152,138"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.75"
      />

      <rect x="36" y="128" width="24" height="20" rx="4" fill="#A63D2F" />

      <rect x="140" y="128" width="24" height="20" rx="4" fill="#24345C" />

      <text
        x="48"
        y="143"
        fontFamily="IBM Plex Mono, monospace"
        fontSize="14"
        fontWeight="700"
        fill="#FFFFFF"
        textAnchor="middle"
      >
        N
      </text>

      <text
        x="152"
        y="143"
        fontFamily="IBM Plex Mono, monospace"
        fontSize="14"
        fontWeight="700"
        fill="#FFFFFF"
        textAnchor="middle"
      >
        S
      </text>

      <circle cx="100" cy="76" r="10" fill="#D4AF37" className="pulse-core" />
    </svg>
  );
}
