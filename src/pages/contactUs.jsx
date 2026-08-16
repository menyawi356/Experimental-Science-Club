export default function Contact() {
  return (
    <main id="page-contact" className="page-view active">
      <div className="wrap">
        <div className="left-content-zone">
          <div className="sec-head">
            <h2 id="contact-title">Contact Us</h2>

            <p className="lede" id="contact-lede">
              Have questions about membership, partnerships, or publishing?
              Reach out to us.
            </p>
          </div>

          <form className="contact-form">
            <input
              type="text"
              id="contact-name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              id="contact-email"
              placeholder="Your Email"
              required
            />

            <input type="text" id="contact-subject" placeholder="Subject" />

            <textarea
              id="contact-message"
              placeholder="Your Message..."
              required
            ></textarea>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ justifyContent: "center" }}
              id="contact-send"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="bg-symbol-stage" data-symbol="contact">
        <div className="symbol-3d-container">
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

            <circle
              cx="100"
              cy="100"
              r="88"
              fill="none"
              stroke="url(#boltGrad)"
              strokeWidth="2"
              strokeDasharray="16,6,4,6"
              className="spin-cw-fast"
            />

            <circle
              cx="100"
              cy="100"
              r="96"
              fill="none"
              stroke="#8FA3DE"
              strokeWidth="1.2"
              strokeDasharray="4,8"
              className="spin-ccw-slow"
            />

            <circle
              cx="100"
              cy="100"
              r="104"
              fill="none"
              stroke="#A63D2F"
              strokeWidth="0.75"
              strokeDasharray="1,11"
              className="spin-cw-slow"
              opacity="0.4"
            />

            <circle
              cx="100"
              cy="100"
              r="60"
              fill="url(#coreGlowContact)"
              opacity="0.4"
            />

            <circle
              cx="55"
              cy="60"
              r="2"
              fill="#F5D77F"
              className="twinkle-a"
            />

            <circle
              cx="150"
              cy="55"
              r="1.8"
              fill="#8FA3DE"
              className="twinkle-b"
            />

            <circle
              cx="55"
              cy="150"
              r="1.6"
              fill="#A63D2F"
              className="twinkle-c"
            />

            <circle
              cx="150"
              cy="150"
              r="1.8"
              fill="#F5D77F"
              className="twinkle-d"
            />

            <g className="pulse-core">
              <polygon
                points="118,12 52,108 98,108 82,188 152,82 106,82"
                fill="url(#boltGrad)"
              />

              <polygon
                points="118,12 52,108 98,108 82,188 152,82 106,82"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2"
                opacity="0.85"
              />
            </g>
          </svg>
        </div>

        <div className="sentence-popup"></div>
      </div>
    </main>
  );
}
