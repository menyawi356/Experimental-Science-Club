import useLanguage from "../hooks/useLanguage.js";
import { useSearchParams } from "react-router-dom";
import ChatSVG from "../Svgs/chat.svg";
import { useEffect, useState, useRef } from "react";
import SVG from "../components/sentence-popu-svg";
import useAuth from "../hooks/useAuth.js";
import useOpenJoinModal from "../hooks/useOpenJoinModal.js";
import createSocket from "../socket/socketClient.js";
import sendMessage from "../socket/sendMessage.js";
import socketListner from "../socket/socketListner.js";
import formatDateTime from "../utils/formteDate.js";
import changeRoom from "../socket/changeRoom.js";
export default function Chat() {
  const [chatMessages, setChatMessagges] = useState([]);
  const { t } = useLanguage();
  const chatText = t.chat;
  const [slectedChat, setChat] = useSearchParams();
  const chat = slectedChat.get("chat");
  const chatLable = chatText.channelTitles[chat];
  const [message, setMessage] = useState("");
  const openJoinModal = useOpenJoinModal();
  const { auth } = useAuth();
  const socketRef = useRef(null);
  const handleSend = (chat, message) => {
    if (!auth.isAuth) {
      openJoinModal();
      return;
    }
    sendMessage(socketRef.current, message, chat);
    setMessage("");
  };
  const handleChangeMessage = (e) => {
    const message = e.target.value;
    setMessage(message);
  };
  useEffect(() => {
    setChat({ chat: "physics" });
  }, []);
  const massegesList = chatMessages.map((message) => {
    return (
      <div
        className={`chat-message ${auth.user._id === message.sender.id ? "chat-message--sent" : "chat-message--received"}`}
        key={message._id}
      >
        <div className="chat-message__author">
          {message.sender.name} • {formatDateTime(message.createdAt)}
        </div>
        <div className="chat-message__bubble">{message.content}</div>
      </div>
    );
  });
  const handleChangeChat = (chat) => {
    setChat({ chat });
  };
  useEffect(() => {
    if (slectedChat) {
      const room = slectedChat.get("chat");
      changeRoom(room, socketRef.current);
    }
  }, [slectedChat]);
  useEffect(() => {
    if (!auth.isAuth) return;
    const socket = createSocket();
    if (!socket) return;
    socketRef.current = socket;
    socketListner(socket, setChatMessagges);
    const currentRoom = slectedChat.get("chat");
    changeRoom(currentRoom, socket);
    return () => {
      socket.close();
      socketRef.current = null;
    };
  }, [auth.isAuth]);
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
            {/* MSGS */}
            <div className="chat-messages" id="chatMessages">
              {massegesList}
            </div>
            <div className="chat-input-row">
              <input
                type="text"
                id="chatInput"
                value={message}
                onChange={handleChangeMessage}
                placeholder={chatText.placeholder}
              />
              <button
                className="btn btn-primary"
                style={{ padding: "8px 18px" }}
                id="chat-send-btn"
                onClick={() => {
                  if (message) {
                    handleSend(chat, message);
                  }
                }}
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
