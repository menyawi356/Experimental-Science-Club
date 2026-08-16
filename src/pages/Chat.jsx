import ChatSVG from "../Svgs/chat.svg";

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
        <div className="symbol-3d-container">{<ChatSVG />}</div>

        <div className="sentence-popup"></div>
      </div>
    </main>
  );
}
