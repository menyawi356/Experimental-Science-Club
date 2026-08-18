import useLanguage from "../hooks/useLanguage.js";
import { useSearchParams } from "react-router-dom";
import ChatSVG from "../Svgs/chat.svg";
import { useEffect } from "react";
import SVG from "../components/sentence-popu-svg";
import useAuth from "../hooks/useAuth.js";
import useOpenJoinModal from "../hooks/useOpenJoinModal.js";
export default function Chat() {
  const { t } = useLanguage();
  const chatText = t.chat;
  const [slectedChat, setChat] = useSearchParams();
  const chatLable = chatText.channelTitles[slectedChat.get("chat")];
  const contactText = t.contact;
  const openJoinModal = useOpenJoinModal();
  const { auth } = useAuth();
  const handleSend = () => {
    if (!auth.isAuth) {
      openJoinModal();
    }
  };
  useEffect(() => {
    setChat({ chat: "physics" });
  }, []);
  const handleChangeChat = (chat) => {
    setChat({ chat });
  };
  const rooms = Object.keys(chatText.rooms).map((key, i) => {
    return (
      <button
        onClick={() => {
          handleChangeChat(key);
        }}
        className={`tab-btn ${slectedChat.get("chat") == key && "active"}`}
        data-room={key}
        key={i}
      >
        {chatText.rooms[key]}
      </button>
    );
  });
  return (
    <main id="page-chat" className="page-view active">
      <div className="wrap">
        <div className="left-content-zone">
          <div className="sec-head">
            <h2 id="chat-title">{chatText.title}</h2>

            <p className="lede" id="chat-lede">
              {chatText.lede}
            </p>
          </div>

          <div className="sub-tabs" id="chatRoomTabs">
            {rooms}
          </div>

          <div className="chat-box-container">
            <div className="chat-header">
              <div className="chat-title" id="chatChannelTitle">
                {chatLable}
              </div>

              <div className="chat-status">
                <span id="activeUserCount">18 {chatText.online}</span>
              </div>
            </div>

            <div className="chat-messages" id="chatMessages"></div>

            <div className="chat-input-row">
              <input
                type="text"
                id="chatInput"
                placeholder={chatText.placeholder}
              />

              <button
                className="btn btn-primary"
                style={{ padding: "8px 18px" }}
                id="chat-send-btn"
                onClick={handleSend}
              >
                {chatText.send}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-symbol-stage" data-symbol="chat">
        <div className="symbol-3d-container">{<ChatSVG />}</div>
      </div>
      <SVG page="chat">
        <ChatSVG />
      </SVG>
    </main>
  );
}
