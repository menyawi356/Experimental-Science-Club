export default function CompetitionsSVG() {
  return (
    <svg className="symbol-3d-svg" viewBox="0 0 200 200">
      <defs>
        <linearGradient id="intGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5D77F" />
          <stop offset="50%" stopColor="#2E7D6B" />
          <stop offset="100%" stopColor="#142C25" />
        </linearGradient>

        <radialGradient id="coreGlowComp" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#2E7D6B" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle
        cx="100"
        cy="100"
        r="90"
        fill="none"
        stroke="url(#intGrad)"
        strokeWidth="1.5"
        strokeDasharray="16,8,4,8"
        className="spin-cw-fast"
      />

      <circle
        cx="100"
        cy="100"
        r="68"
        fill="none"
        stroke="#2E7D6B"
        strokeWidth="1"
        strokeDasharray="2,6"
        opacity="0.6"
      />

      <circle
        cx="100"
        cy="100"
        r="98"
        fill="none"
        stroke="#F5D77F"
        strokeWidth="0.75"
        strokeDasharray="1,10"
        className="spin-ccw-slow"
        opacity="0.5"
      />

      <line
        x1="20"
        y1="100"
        x2="180"
        y2="100"
        stroke="#8FA3DE"
        strokeWidth="1.2"
        strokeDasharray="4,4"
        opacity="0.5"
      />

      <line
        x1="100"
        y1="20"
        x2="100"
        y2="180"
        stroke="#8FA3DE"
        strokeWidth="1.2"
        strokeDasharray="4,4"
        opacity="0.5"
      />

      <ellipse
        cx="105"
        cy="100"
        rx="50"
        ry="60"
        fill="url(#coreGlowComp)"
        opacity="0.35"
      />

      <path
        d="M25,100 Q60,40 100,100 T175,100"
        fill="none"
        stroke="#8FA3DE"
        strokeWidth="2"
        opacity="0.45"
      />

      <path
        d="M25,120 Q60,170 100,120 T175,120"
        fill="none"
        stroke="#F5D77F"
        strokeWidth="1.3"
        opacity="0.35"
        className="float-slow"
      />

      <circle cx="60" cy="55" r="2" fill="#8FA3DE" className="twinkle-a" />

      <circle cx="140" cy="145" r="2" fill="#F5D77F" className="twinkle-b" />

      <circle cx="175" cy="100" r="2.2" fill="#FFFFFF" className="twinkle-c" />

      <g className="pulse-core">
        <path
          d="M126,28 C152,28 142,68 112,100 C82,132 62,162 88,172 C103,177 118,167 122,157"
          fill="none"
          stroke="url(#intGrad)"
          strokeWidth="14"
          strokeLinecap="round"
        />

        <path
          d="M126,28 C152,28 142,68 112,100 C82,132 62,162 88,172"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          opacity="0.8"
        />
      </g>
    </svg>
  );
}
