export default function AboutSVG() {
  return (
    <svg className="symbol-3d-svg" viewBox="0 0 200 200">
      <defs>
        <linearGradient id="deltaGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5D77F" />
          <stop offset="100%" stopColor="#24345C" />
        </linearGradient>

        <linearGradient id="deltaGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8FA3DE" />
          <stop offset="100%" stopColor="#10182B" />
        </linearGradient>

        <radialGradient id="coreGlowAbout" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#8FA3DE" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle
        cx="100"
        cy="105"
        r="90"
        fill="none"
        stroke="url(#deltaGrad1)"
        strokeWidth="1"
        strokeDasharray="2,6"
        className="spin-cw-slow"
        opacity="0.5"
      />

      <circle
        cx="100"
        cy="105"
        r="74"
        fill="none"
        stroke="url(#deltaGrad2)"
        strokeWidth="1.5"
        strokeDasharray="12,6"
        className="spin-ccw-slow"
      />

      <circle
        cx="100"
        cy="105"
        r="100"
        fill="none"
        stroke="#D4AF37"
        strokeWidth="0.75"
        strokeDasharray="1,9"
        className="spin-cw-fast"
        opacity="0.4"
      />

      <ellipse
        cx="100"
        cy="100"
        rx="55"
        ry="45"
        fill="url(#coreGlowAbout)"
        opacity="0.4"
      />

      <g className="float-slow">
        <polygon
          points="100,18 18,168 100,138"
          fill="url(#deltaGrad1)"
          opacity="0.82"
        />

        <polygon
          points="100,18 182,168 100,138"
          fill="url(#deltaGrad2)"
          opacity="0.92"
        />

        <polygon
          points="18,168 182,168 100,138"
          fill="#D4AF37"
          opacity="0.35"
        />

        <line
          x1="100"
          y1="18"
          x2="100"
          y2="138"
          stroke="#FFFFFF"
          strokeWidth="2"
          opacity="0.8"
        />

        <line
          x1="100"
          y1="18"
          x2="18"
          y2="168"
          stroke="#F5D77F"
          strokeWidth="1.5"
          opacity="0.7"
        />

        <line
          x1="100"
          y1="18"
          x2="182"
          y2="168"
          stroke="#8FA3DE"
          strokeWidth="1.5"
          opacity="0.7"
        />

        <circle cx="100" cy="18" r="5" fill="#F5D77F" />

        <circle cx="18" cy="168" r="4.5" fill="#8FA3DE" />

        <circle cx="182" cy="168" r="4.5" fill="#8FA3DE" />

        <circle cx="100" cy="138" r="4" fill="#D4AF37" />

        <circle cx="60" cy="90" r="1.8" fill="#FFFFFF" className="twinkle-a" />

        <circle cx="140" cy="90" r="1.6" fill="#F5D77F" className="twinkle-b" />

        <circle cx="100" cy="60" r="1.5" fill="#DCE4FA" className="twinkle-c" />
      </g>
    </svg>
  );
}
