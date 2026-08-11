import React from 'react';

export function HomeSymbol() {
  return (
    <svg className="symbol-3d-svg" viewBox="0 0 200 200">
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5D77F" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8C6D13" />
        </linearGradient>
        <linearGradient id="indigoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B3C3F0" />
          <stop offset="50%" stopColor="#3A528C" />
          <stop offset="100%" stopColor="#141E36" />
        </linearGradient>
        <radialGradient id="coreGlowHome" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="45%" stopColor="#F5D77F" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
        <filter id="glowGold" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <g opacity="0.35">
        <circle cx="100" cy="100" r="95" fill="none" stroke="url(#indigoGrad)" strokeWidth="1" />
        <line x1="100" y1="0" x2="100" y2="200" stroke="url(#indigoGrad)" strokeWidth="0.75" strokeDasharray="3,3" />
        <line x1="0" y1="100" x2="200" y2="100" stroke="url(#indigoGrad)" strokeWidth="0.75" strokeDasharray="3,3" />
      </g>

      <circle cx="100" cy="100" r="60" fill="url(#coreGlowHome)" opacity="0.35" />

      <circle cx="100" cy="100" r="88" fill="none" stroke="url(#goldGrad)" strokeWidth="1.5" strokeDasharray="4,12,18,12" className="spin-cw-slow" />
      <circle cx="100" cy="100" r="96" fill="none" stroke="url(#indigoGrad)" strokeWidth="1" strokeDasharray="1,7" className="spin-ccw-fast shimmer-sweep" opacity="0.6" />

      <g className="spin-cw-fast">
        <ellipse cx="100" cy="100" rx="82" ry="24" fill="none" stroke="url(#goldGrad)" strokeWidth="2.5" transform="rotate(-35 100 100)" />
        <circle cx="32" cy="62" r="5.5" fill="#F5D77F" filter="url(#glowGold)" />
        <circle cx="168" cy="138" r="2.4" fill="#FFF8E1" className="twinkle-a" />
      </g>

      <g className="spin-ccw-slow">
        <ellipse cx="100" cy="100" rx="82" ry="24" fill="none" stroke="url(#indigoGrad)" strokeWidth="2.5" transform="rotate(35 100 100)" />
        <circle cx="168" cy="138" r="5.5" fill="#B3C3F0" />
        <circle cx="32" cy="62" r="2.2" fill="#DCE4FA" className="twinkle-b" />
      </g>

      <g className="spin-cw-slow">
        <ellipse cx="100" cy="100" rx="82" ry="24" fill="none" stroke="url(#goldGrad)" strokeWidth="1.5" transform="rotate(90 100 100)" strokeDasharray="10,6" />
        <circle cx="100" cy="18" r="4" fill="#D4AF37" />
        <circle cx="100" cy="182" r="2" fill="#F5D77F" className="twinkle-c" />
      </g>

      <circle cx="46" cy="150" r="1.8" fill="#8FA3DE" className="twinkle-c" />
      <circle cx="156" cy="44" r="1.6" fill="#F5D77F" className="twinkle-d" />
      <circle cx="60" cy="40" r="1.4" fill="#B3C3F0" className="twinkle-a" />

      <g className="pulse-core">
        <circle cx="100" cy="100" r="26" fill="url(#coreGlowHome)" opacity="0.5" />
        <circle cx="100" cy="100" r="22" fill="url(#indigoGrad)" opacity="0.4" />
        <circle cx="100" cy="100" r="14" fill="url(#goldGrad)" filter="url(#glowGold)" />
        <circle cx="100" cy="100" r="6" fill="#FFFFFF" />
      </g>
    </svg>
  );
}

export function AboutSymbol() {
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

      <circle cx="100" cy="105" r="90" fill="none" stroke="url(#deltaGrad1)" strokeWidth="1" strokeDasharray="2,6" className="spin-cw-slow" opacity="0.5" />
      <circle cx="100" cy="105" r="74" fill="none" stroke="url(#deltaGrad2)" strokeWidth="1.5" strokeDasharray="12,6" className="spin-ccw-slow" />
      <circle cx="100" cy="105" r="100" fill="none" stroke="#D4AF37" strokeWidth="0.75" strokeDasharray="1,9" className="spin-cw-fast" opacity="0.4" />

      <ellipse cx="100" cy="100" rx="55" ry="45" fill="url(#coreGlowAbout)" opacity="0.4" />

      <g className="float-slow">
        <polygon points="100,18 18,168 100,138" fill="url(#deltaGrad1)" opacity="0.82" />
        <polygon points="100,18 182,168 100,138" fill="url(#deltaGrad2)" opacity="0.92" />
        <polygon points="18,168 182,168 100,138" fill="#D4AF37" opacity="0.35" />

        <line x1="100" y1="18" x2="100" y2="138" stroke="#FFFFFF" strokeWidth="2" opacity="0.8" />
        <line x1="100" y1="18" x2="18" y2="168" stroke="#F5D77F" strokeWidth="1.5" opacity="0.7" />
        <line x1="100" y1="18" x2="182" y2="168" stroke="#8FA3DE" strokeWidth="1.5" opacity="0.7" />

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

export function CompetitionsSymbol() {
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

      <circle cx="100" cy="100" r="90" fill="none" stroke="url(#intGrad)" strokeWidth="1.5" strokeDasharray="16,8,4,8" className="spin-cw-fast" />
      <circle cx="100" cy="100" r="68" fill="none" stroke="#2E7D6B" strokeWidth="1" strokeDasharray="2,6" opacity="0.6" />
      <circle cx="100" cy="100" r="98" fill="none" stroke="#F5D77F" strokeWidth="0.75" strokeDasharray="1,10" className="spin-ccw-slow" opacity="0.5" />

      <line x1="20" y1="100" x2="180" y2="100" stroke="#8FA3DE" strokeWidth="1.2" strokeDasharray="4,4" opacity="0.5" />
      <line x1="100" y1="20" x2="100" y2="180" stroke="#8FA3DE" strokeWidth="1.2" strokeDasharray="4,4" opacity="0.5" />

      <ellipse cx="105" cy="100" rx="50" ry="60" fill="url(#coreGlowComp)" opacity="0.35" />

      <path d="M25,100 Q60,40 100,100 T175,100" fill="none" stroke="#8FA3DE" strokeWidth="2" opacity="0.45" />
      <path d="M25,120 Q60,170 100,120 T175,120" fill="none" stroke="#F5D77F" strokeWidth="1.3" opacity="0.35" className="float-slow" />

      <circle cx="60" cy="55" r="2" fill="#8FA3DE" className="twinkle-a" />
      <circle cx="140" cy="145" r="2" fill="#F5D77F" className="twinkle-b" />
      <circle cx="175" cy="100" r="2.2" fill="#FFFFFF" className="twinkle-c" />

      <g className="pulse-core">
        <path d="M126,28 C152,28 142,68 112,100 C82,132 62,162 88,172 C103,177 118,167 122,157" fill="none" stroke="url(#intGrad)" strokeWidth="14" strokeLinecap="round" />
        <path d="M126,28 C152,28 142,68 112,100 C82,132 62,162 88,172" fill="none" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.8" />
      </g>
    </svg>
  );
}

export function PublishingSymbol() {
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

      <circle cx="100" cy="100" r="92" fill="none" stroke="url(#hexGrad)" strokeWidth="1.2" strokeDasharray="6,6" className="spin-ccw-slow" opacity="0.6" />
      <circle cx="100" cy="100" r="100" fill="none" stroke="#8FA3DE" strokeWidth="0.75" strokeDasharray="1,9" className="spin-cw-fast" opacity="0.4" />

      <circle cx="100" cy="94" r="50" fill="url(#coreGlowPub)" opacity="0.4" />

      <g className="spin-cw-slow">
        <polygon points="100,16 168,55 168,133 100,172 32,133 32,55" fill="none" stroke="url(#hexGrad)" strokeWidth="3.5" />
        <polygon points="100,26 158,60 158,128 100,162 42,128 42,60" fill="none" stroke="#D4AF37" strokeWidth="1" strokeDasharray="8,4" opacity="0.7" />

        <circle cx="100" cy="16" r="6" fill="#D4AF37" />
        <circle cx="168" cy="55" r="6" fill="#D4AF37" />
        <circle cx="168" cy="133" r="6" fill="#D4AF37" />
        <circle cx="100" cy="172" r="6" fill="#D4AF37" />
        <circle cx="32" cy="133" r="6" fill="#D4AF37" />
        <circle cx="32" cy="55" r="6" fill="#D4AF37" />

        <circle cx="134" cy="35" r="1.8" fill="#FFFFFF" className="twinkle-a" />
        <circle cx="134" cy="153" r="1.8" fill="#FFFFFF" className="twinkle-b" />
        <circle cx="66" cy="153" r="1.8" fill="#FFFFFF" className="twinkle-c" />
        <circle cx="66" cy="35" r="1.8" fill="#FFFFFF" className="twinkle-d" />
      </g>

      <circle cx="100" cy="94" r="44" fill="none" stroke="url(#hexGrad)" strokeWidth="2.5" strokeDasharray="12,8" className="spin-ccw-slow" />
      <polygon points="100,46 138,68 138,112 100,134 62,112 62,68" fill="url(#hexGrad)" opacity="0.3" className="pulse-core" />
    </svg>
  );
}

export function ChatSymbol() {
  return (
    <svg className="symbol-3d-svg" viewBox="0 0 200 200">
      <defs>
        <linearGradient id="chatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2E7D6B" />
          <stop offset="50%" stopColor="#8FA3DE" />
          <stop offset="100%" stopColor="#F5D77F" />
        </linearGradient>
        <radialGradient id="coreGlowChat" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#8FA3DE" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="100" cy="100" r="90" fill="none" stroke="url(#chatGrad)" strokeWidth="1.5" strokeDasharray="10,6" className="spin-cw-fast" />
      <circle cx="100" cy="100" r="70" fill="none" stroke="#D4AF37" strokeWidth="1" strokeDasharray="4,6" className="spin-ccw-slow" />
      <circle cx="100" cy="100" r="98" fill="none" stroke="#2E7D6B" strokeWidth="0.75" strokeDasharray="1,10" className="spin-ccw-fast" opacity="0.4" />

      <circle cx="100" cy="100" r="55" fill="url(#coreGlowChat)" opacity="0.35" />

      <circle cx="184" cy="100" r="2.2" fill="#F5D77F" className="twinkle-a" />
      <circle cx="16" cy="100" r="2" fill="#2E7D6B" className="twinkle-c" />

      <g className="pulse-core">
        <polygon points="100,28 162,68 142,152 58,152 38,68" fill="none" stroke="url(#chatGrad)" strokeWidth="3" />

        <line x1="100" y1="28" x2="142" y2="152" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.6" />
        <line x1="162" y1="68" x2="58" y2="152" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.6" />
        <line x1="38" y1="68" x2="142" y2="152" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.6" />
        <line x1="100" y1="28" x2="58" y2="152" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.6" />

        <circle cx="100" cy="28" r="6" fill="#2E7D6B" />
        <circle cx="162" cy="68" r="6" fill="#8FA3DE" />
        <circle cx="142" cy="152" r="6" fill="#F5D77F" />
        <circle cx="58" cy="152" r="6" fill="#8FA3DE" />
        <circle cx="38" cy="68" r="6" fill="#2E7D6B" />
        <circle cx="100" cy="98" r="8" fill="url(#chatGrad)" />

        <circle cx="121" cy="90" r="1.6" fill="#FFFFFF" className="twinkle-b" />
        <circle cx="79" cy="90" r="1.6" fill="#FFFFFF" className="twinkle-d" />
      </g>
    </svg>
  );
}

export function PartnersSymbol() {
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

      <circle cx="100" cy="105" r="94" fill="none" stroke="#8FA3DE" strokeWidth="0.75" strokeDasharray="1,9" className="spin-cw-slow" opacity="0.4" />

      <circle cx="100" cy="90" r="45" fill="url(#coreGlowPart)" opacity="0.4" />

      <path d="M30,118 C10,58 190,58 170,118" fill="none" stroke="#D4AF37" strokeWidth="2" strokeDasharray="6,4" className="spin-cw-fast" />
      <path d="M20,108 C-10,38 210,38 180,108" fill="none" stroke="#8FA3DE" strokeWidth="1.5" strokeDasharray="4,4" className="spin-ccw-slow" />
      <path d="M40,128 C25,78 175,78 160,128" fill="none" stroke="#F5D77F" strokeWidth="1.2" strokeDasharray="3,5" className="spin-ccw-fast" opacity="0.55" />

      <circle cx="45" cy="70" r="1.8" fill="#F5D77F" className="twinkle-a" />
      <circle cx="155" cy="70" r="1.8" fill="#8FA3DE" className="twinkle-b" />
      <circle cx="100" cy="42" r="1.6" fill="#FFFFFF" className="twinkle-c" />

      <path d="M48,138 A62,62 0 1,1 152,138" fill="none" stroke="url(#magGrad)" strokeWidth="18" strokeLinecap="round" />
      <path d="M48,138 A62,62 0 1,1 152,138" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.75" />

      <rect x="36" y="128" width="24" height="20" rx="4" fill="#A63D2F" />
      <rect x="140" y="128" width="24" height="20" rx="4" fill="#24345C" />
      <text x="48" y="143" fontFamily="IBM Plex Mono, monospace" fontSize="14" fontWeight="700" fill="#FFFFFF" textAnchor="middle">N</text>
      <text x="152" y="143" fontFamily="IBM Plex Mono, monospace" fontSize="14" fontWeight="700" fill="#FFFFFF" textAnchor="middle">S</text>
      <circle cx="100" cy="76" r="10" fill="#D4AF37" className="pulse-core" />
    </svg>
  );
}

export function ContactSymbol() {
  return (
    <svg className="symbol-3d-svg" viewBox="0 0 200 200">
      <defs>
        <linearGradient id="boltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5D77F" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#A63D2F" />
        </linearGradient>
        <radialGradient id="coreGlowContact" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#F5D77F" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="100" cy="100" r="88" fill="none" stroke="url(#boltGrad)" strokeWidth="2" strokeDasharray="16,6,4,6" className="spin-cw-fast" />
      <circle cx="100" cy="100" r="96" fill="none" stroke="#8FA3DE" strokeWidth="1.2" strokeDasharray="4,8" className="spin-ccw-slow" />
      <circle cx="100" cy="100" r="104" fill="none" stroke="#A63D2F" strokeWidth="0.75" strokeDasharray="1,11" className="spin-cw-slow" opacity="0.4" />

      <circle cx="100" cy="100" r="60" fill="url(#coreGlowContact)" opacity="0.4" />

      <circle cx="55" cy="60" r="2" fill="#F5D77F" className="twinkle-a" />
      <circle cx="150" cy="55" r="1.8" fill="#8FA3DE" className="twinkle-b" />
      <circle cx="55" cy="150" r="1.6" fill="#A63D2F" className="twinkle-c" />
      <circle cx="150" cy="150" r="1.8" fill="#F5D77F" className="twinkle-d" />

      <g className="pulse-core">
        <polygon points="118,12 52,108 98,108 82,188 152,82 106,82" fill="url(#boltGrad)" />
        <polygon points="118,12 52,108 98,108 82,188 152,82 106,82" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.85" />
      </g>
    </svg>
  );
}
