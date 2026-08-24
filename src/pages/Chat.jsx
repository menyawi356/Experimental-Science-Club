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
import Loader from "../components/loader.jsx";
import useChangeModal from "../hooks/useChangeModal.js";
export default function Chat() {
  const { t } = useLanguage();
  const chatText = t.chat;

  const { auth } = useAuth();
  const openJoinModal = useOpenJoinModal();
  const { setShowedModal } = useChangeModal();

  const [slectedChat, setChat] = useSearchParams({});
  const chat = slectedChat.get("chat");
  const chatLable = chatText.channelTitles[chat];

  const socketRef = useRef(null);

  const [chatMessages, setChatMessagges] = useState([]);
  const [message, setMessage] = useState("");
  const [onlineMembers, setOnlineMembers] = useState({
    chat: slectedChat.get("chat"),
    number: 0,
  });
  // may be updated later
  const [loaclLoader, setLocalLoader] = useState(false);
  const startLocalLoader = () => {
    setLocalLoader(true);
  };
  const stopLocalLoader = () => {
    setLocalLoader(false);
  };
  useEffect(() => {
    setChat();
  }, []);
  useEffect(() => {
    if (!messagesRef.current) return;
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [chatMessages]);
  useEffect(() => {
    if (!auth.isAuth) return;
    startLocalLoader();
    try {
      const socket = createSocket();
      if (!socket) {
        setShowedModal({
          modal: "error",
          data: {
            errorCode: "CONNECTION_ERROR",
            to: "none",
          },
        });
        stopLocalLoader();
        return;
      }
      socketRef.current = socket;
      socket.addEventListener("open", () => {
        stopLocalLoader();
      });
      socketListner(socket, setChatMessagges, setOnlineMembers, setShowedModal);
    } catch {
      stopLocalLoader();
      setShowedModal({
        modal: "error",
        data: {
          errorCode: "CONNECTION_ERROR",
          to: "none",
        },
      });
    }
    return () => {
      socketRef.current?.close();
      socketRef.current = null;
    };
  }, [auth.isAuth]);
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
  const messagesRef = useRef(null);
  const handleChangeChat = (chat) => {
    setOnlineMembers((prev) => ({
      chat,
      number: prev.number,
    }));
    setChat({ chat });
  };

  const massegesList = chatMessages?.messages?.map((message, i) => {
    return (
      <div
        className={`chat-message ${
          auth?.user?._id === message?.sender?.id
            ? "chat-message--sent"
            : "chat-message--received"
        }`}
        key={message._id || i}
      >
        <div className="chat-message__author">
          {message.sender.name} • {formatDateTime(message.createdAt)}
        </div>

        <div className="chat-message__bubble">{message.content}</div>
      </div>
    );
  });
  const rooms = Object.keys(chatText.rooms).map((key, i) => {
    return (
      <button
        onClick={() => {
          handleChangeChat(key);
          if (socketRef.current && auth.isAuth) {
            try {
              changeRoom(key, socketRef.current);
            } catch (error) {
              console.log("here");

              setShowedModal({
                modal: "error",
                data: {
                  errorCode: error,
                  to: "none",
                },
              });
            }
          }
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

              <div
                className={`chat-status ${
                  !auth.isAuth
                    ? "login-required"
                    : !chat
                      ? "select-room"
                      : !massegesList?.length
                        ? "ready"
                        : "online"
                }`}
              >
                <span id="activeUserCount">
                  {!auth.isAuth
                    ? chatText.loginRequired
                    : !chat
                      ? chatText.selectRoom
                      : !massegesList?.length
                        ? chatText.ready
                        : `${onlineMembers.number} ${chatText.online}`}
                </span>
              </div>
            </div>
            {/* MSGS */}
            <div className="chat-messages" id="chatMessages" ref={messagesRef}>
              {loaclLoader && <Loader />}
              {!auth.isAuth ? (
                <div className="chat-empty-state">
                  <div className="chat-empty-state__content">
                    <h3>{chatText.loginTitle}</h3>
                    <p>{chatText.loginMessage}</p>
                  </div>
                </div>
              ) : !chat ? (
                <div className="chat-empty-state">
                  <div className="chat-empty-state__content">
                    <h3>{chatText.selectRoomTitle}</h3>
                    <p>{chatText.selectRoomMessage}</p>
                  </div>
                </div>
              ) : !massegesList?.length ? (
                <div className="chat-empty-state">
                  <div className="chat-empty-state__content">
                    <h3>{chatText.emptyTitle}</h3>
                    <p>{chatText.emptyMessage}</p>
                  </div>
                </div>
              ) : (
                massegesList
              )}
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
      <SVG page="chat">
        <ChatSVG />
      </SVG>
    </main>
  );
}
