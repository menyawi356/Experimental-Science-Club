export default function socketListner(
  socket,
  setChatMessagges,
  setOnlineMembers,
) {
  socket.addEventListener("message", (ev) => {
    const data = JSON.parse(ev.data);
    const { type, payLoad } = data;
    switch (type) {
      case "GET-CHAT":
        setChatMessagges(payLoad.data);
        break;
      case "SEND-MESSAGE":
        setChatMessagges((prev) => {
          const data = payLoad.data;

          const inCommingChat = data.chat;
          const inCommingMessage = data.message;

          if (!prev) {
            return {
              chat: inCommingChat,
              messages: [inCommingMessage],
            };
          }

          if (prev.chat !== inCommingChat) {
            return prev;
          }

          return {
            ...prev,
            messages: [...prev.messages, inCommingMessage],
          };
        });
        break;
      case "MEMBER-JOINED":
        setOnlineMembers((prev) => {
          if (prev.chat === payLoad.chat) {
            return payLoad;
          }
          return prev;
        });
    }
  });
}
