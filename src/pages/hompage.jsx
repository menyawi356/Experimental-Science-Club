export default function Homepage() {
  return (
    <main id="page-home" className="page-view active">
      <div className="wrap">
        <div className="left-content-zone">
          <div className="eyebrow" id="home-eyebrow">
            Operating system for scientific talent
          </div>

          <h1>
            <span id="home-title1">Scieno</span>
            <br />
            <em id="home-title2">Atlas</em>
          </h1>

          <p className="tagline" id="home-tagline">
            — your beacon for all sciences
          </p>

          <p className="lede" id="home-lede">
            A map for curious minds. ScienoAtlas empowers students through
            verified research, hands-on projects, and a global scientific
            network — turning academic curiosity into a lasting scientific
            identity.
          </p>

          <div className="hero-btns">
            <a
              className="btn btn-primary"
              style={{ padding: "13px 24px" }}
              id="home-explore-btn"
            >
              Explore Competitions
            </a>

            <a
              className="btn btn-ghost"
              style={{ padding: "13px 24px" }}
              id="home-learn-btn"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="bg-symbol-stage" data-symbol="home">
        <div className="symbol-3d-container">
          <svg className="symbol-3d-svg" viewBox="0 0 200 200">
            <defs>
              <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F5D77F" />
                <stop offset="50%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#8C6D13" />
              </linearGradient>

              <linearGradient
                id="indigoGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#B3C3F0" />
                <stop offset="50%" stopColor="#3A528C" />
                <stop offset="100%" stopColor="#141E36" />
              </linearGradient>

              <radialGradient id="coreGlowHome" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="45%" stopColor="#F5D77F" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
              </radialGradient>

              <filter
                id="glowGold"
                x="-60%"
                y="-60%"
                width="220%"
                height="220%"
              >
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            <g opacity="0.35">
              <circle
                cx="100"
                cy="100"
                r="95"
                fill="none"
                stroke="url(#indigoGrad)"
                strokeWidth="1"
              />

              <line
                x1="100"
                y1="0"
                x2="100"
                y2="200"
                stroke="url(#indigoGrad)"
                strokeWidth="0.75"
                strokeDasharray="3,3"
              />

              <line
                x1="0"
                y1="100"
                x2="200"
                y2="100"
                stroke="url(#indigoGrad)"
                strokeWidth="0.75"
                strokeDasharray="3,3"
              />
            </g>

            <circle
              cx="100"
              cy="100"
              r="60"
              fill="url(#coreGlowHome)"
              opacity="0.35"
            />

            <circle
              cx="100"
              cy="100"
              r="88"
              fill="none"
              stroke="url(#goldGrad)"
              strokeWidth="1.5"
              strokeDasharray="4,12,18,12"
              className="spin-cw-slow"
            />

            <circle
              cx="100"
              cy="100"
              r="96"
              fill="none"
              stroke="url(#indigoGrad)"
              strokeWidth="1"
              strokeDasharray="1,7"
              className="spin-ccw-fast shimmer-sweep"
              opacity="0.6"
            />

            <g className="spin-cw-fast">
              <ellipse
                cx="100"
                cy="100"
                rx="82"
                ry="24"
                fill="none"
                stroke="url(#goldGrad)"
                strokeWidth="2.5"
                transform="rotate(-35 100 100)"
              />

              <circle
                cx="32"
                cy="62"
                r="5.5"
                fill="#F5D77F"
                filter="url(#glowGold)"
              />

              <circle
                cx="168"
                cy="138"
                r="2.4"
                fill="#FFF8E1"
                className="twinkle-a"
              />
            </g>

            <g className="spin-ccw-slow">
              <ellipse
                cx="100"
                cy="100"
                rx="82"
                ry="24"
                fill="none"
                stroke="url(#indigoGrad)"
                strokeWidth="2.5"
                transform="rotate(35 100 100)"
              />

              <circle cx="168" cy="138" r="5.5" fill="#B3C3F0" />

              <circle
                cx="32"
                cy="62"
                r="2.2"
                fill="#DCE4FA"
                className="twinkle-b"
              />
            </g>

            <g className="spin-cw-slow">
              <ellipse
                cx="100"
                cy="100"
                rx="82"
                ry="24"
                fill="none"
                stroke="url(#goldGrad)"
                strokeWidth="1.5"
                transform="rotate(90 100 100)"
                strokeDasharray="10,6"
              />

              <circle cx="100" cy="18" r="4" fill="#D4AF37" />

              <circle
                cx="100"
                cy="182"
                r="2"
                fill="#F5D77F"
                className="twinkle-c"
              />
            </g>

            <circle
              cx="46"
              cy="150"
              r="1.8"
              fill="#8FA3DE"
              className="twinkle-c"
            />

            <circle
              cx="156"
              cy="44"
              r="1.6"
              fill="#F5D77F"
              className="twinkle-d"
            />

            <circle
              cx="60"
              cy="40"
              r="1.4"
              fill="#B3C3F0"
              className="twinkle-a"
            />

            <g className="pulse-core">
              <circle
                cx="100"
                cy="100"
                r="26"
                fill="url(#coreGlowHome)"
                opacity="0.5"
              />

              <circle
                cx="100"
                cy="100"
                r="22"
                fill="url(#indigoGrad)"
                opacity="0.4"
              />

              <circle
                cx="100"
                cy="100"
                r="14"
                fill="url(#goldGrad)"
                filter="url(#glowGold)"
              />

              <circle cx="100" cy="100" r="6" fill="#FFFFFF" />
            </g>
          </svg>
        </div>

        <div className="sentence-popup"></div>
      </div>
    </main>
  );
}
