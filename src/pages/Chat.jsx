export default function Chat() {
  return (
    <main id="page-chat" className="page-view active">
      <div className="wrap">
        <div className="left-content-zone">
          <div className="sec-head">
            <h2 id="chat-title">Scientific Chat Hub</h2>

            <p className="lede" id="chat-lede">
              Engage in peer-to-peer discussions, theoretical debates, and
              experimental Q&As categorized by core scientific fields.
            </p>
          </div>

          <div className="sub-tabs" id="chatRoomTabs">
            <button className="tab-btn active" data-room="physics">
              ⚛️ Physics
            </button>

            <button className="tab-btn" data-room="chemistry">
              🧪 Chemistry
            </button>

            <button className="tab-btn" data-room="biology">
              🧬 Biology
            </button>

            <button className="tab-btn" data-room="astronomy">
              🌌 Astronomy
            </button>

            <button className="tab-btn" data-room="math_cs">
              📐 Math & CS
            </button>
          </div>

          <div className="chat-box-container">
            <div className="chat-header">
              <div className="chat-title" id="chatChannelTitle">
                ⚛️ # physics-and-quantum
              </div>

              <div className="chat-status">
                <span id="activeUserCount">18 Online</span>
              </div>
            </div>

            <div className="chat-messages" id="chatMessages"></div>

            <div className="chat-input-row">
              <input
                type="text"
                id="chatInput"
                placeholder="Ask a question or share a discovery..."
              />

              <button
                className="btn btn-primary"
                style={{ padding: "8px 18px" }}
                id="chat-send-btn"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-symbol-stage" data-symbol="chat">
        <div className="symbol-3d-container">
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

            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="url(#chatGrad)"
              strokeWidth="1.5"
              strokeDasharray="10,6"
              className="spin-cw-fast"
            />

            <circle
              cx="100"
              cy="100"
              r="70"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="1"
              strokeDasharray="4,6"
              className="spin-ccw-slow"
            />

            <circle
              cx="100"
              cy="100"
              r="98"
              fill="none"
              stroke="#2E7D6B"
              strokeWidth="0.75"
              strokeDasharray="1,10"
              className="spin-ccw-fast"
              opacity="0.4"
            />

            <circle
              cx="100"
              cy="100"
              r="55"
              fill="url(#coreGlowChat)"
              opacity="0.35"
            />

            <circle
              cx="184"
              cy="100"
              r="2.2"
              fill="#F5D77F"
              className="twinkle-a"
            />

            <circle
              cx="16"
              cy="100"
              r="2"
              fill="#2E7D6B"
              className="twinkle-c"
            />

            <g className="pulse-core">
              <polygon
                points="100,28 162,68 142,152 58,152 38,68"
                fill="none"
                stroke="url(#chatGrad)"
                strokeWidth="3"
              />

              <line
                x1="100"
                y1="28"
                x2="142"
                y2="152"
                stroke="#FFFFFF"
                strokeWidth="1.2"
                opacity="0.6"
              />

              <line
                x1="162"
                y1="68"
                x2="58"
                y2="152"
                stroke="#FFFFFF"
                strokeWidth="1.2"
                opacity="0.6"
              />

              <line
                x1="38"
                y1="68"
                x2="142"
                y2="152"
                stroke="#FFFFFF"
                strokeWidth="1.2"
                opacity="0.6"
              />

              <line
                x1="100"
                y1="28"
                x2="58"
                y2="152"
                stroke="#FFFFFF"
                strokeWidth="1.2"
                opacity="0.6"
              />

              <circle cx="100" cy="28" r="6" fill="#2E7D6B" />

              <circle cx="162" cy="68" r="6" fill="#8FA3DE" />

              <circle cx="142" cy="152" r="6" fill="#F5D77F" />

              <circle cx="58" cy="152" r="6" fill="#8FA3DE" />

              <circle cx="38" cy="68" r="6" fill="#2E7D6B" />

              <circle cx="100" cy="98" r="8" fill="url(#chatGrad)" />

              <circle
                cx="121"
                cy="90"
                r="1.6"
                fill="#FFFFFF"
                className="twinkle-b"
              />

              <circle
                cx="79"
                cy="90"
                r="1.6"
                fill="#FFFFFF"
                className="twinkle-d"
              />
            </g>
          </svg>
        </div>

        <div className="sentence-popup"></div>
      </div>
    </main>
  );
}
