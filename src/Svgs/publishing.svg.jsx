export default function PublishingSVG() {
  return (
    <svg className="symbol-3d-svg" viewBox="0 0 200 200">
      <defs>
        <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8FA3DE" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#1A2745" />
        </linearGradient>

        <radialGradient id="coreGlowPub" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle
        cx="100"
        cy="100"
        r="92"
        fill="none"
        stroke="url(#hexGrad)"
        strokeWidth="1.2"
        strokeDasharray="6,6"
        className="spin-ccw-slow"
        opacity="0.6"
      />

      <circle
        cx="100"
        cy="100"
        r="100"
        fill="none"
        stroke="#8FA3DE"
        strokeWidth="0.75"
        strokeDasharray="1,9"
        className="spin-cw-fast"
        opacity="0.4"
      />

      <circle cx="100" cy="94" r="50" fill="url(#coreGlowPub)" opacity="0.4" />

      <g className="spin-cw-slow">
        <polygon
          points="100,16 168,55 168,133 100,172 32,133 32,55"
          fill="none"
          stroke="url(#hexGrad)"
          strokeWidth="3.5"
        />

        <polygon
          points="100,26 158,60 158,128 100,162 42,128 42,60"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="1"
          strokeDasharray="8,4"
          opacity="0.7"
        />

        <circle cx="100" cy="16" r="6" fill="#D4AF37" />
        <circle cx="168" cy="55" r="6" fill="#D4AF37" />
        <circle cx="168" cy="133" r="6" fill="#D4AF37" />
        <circle cx="100" cy="172" r="6" fill="#D4AF37" />
        <circle cx="32" cy="133" r="6" fill="#D4AF37" />
        <circle cx="32" cy="55" r="6" fill="#D4AF37" />

        <circle cx="134" cy="35" r="1.8" fill="#FFFFFF" className="twinkle-a" />

        <circle
          cx="134"
          cy="153"
          r="1.8"
          fill="#FFFFFF"
          className="twinkle-b"
        />

        <circle cx="66" cy="153" r="1.8" fill="#FFFFFF" className="twinkle-c" />

        <circle cx="66" cy="35" r="1.8" fill="#FFFFFF" className="twinkle-d" />
      </g>

      <circle
        cx="100"
        cy="94"
        r="44"
        fill="none"
        stroke="url(#hexGrad)"
        strokeWidth="2.5"
        strokeDasharray="12,8"
        className="spin-ccw-slow"
      />

      <polygon
        points="100,46 138,68 138,112 100,134 62,112 62,68"
        fill="url(#hexGrad)"
        opacity="0.3"
        className="pulse-core"
      />
    </svg>
  );
}
