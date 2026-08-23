export default function socketListner(socket, setChatMessagges) {
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
          console.log(inCommingMessage);
          const { chat, messages } = prev;
          if (chat !== inCommingChat) {
            return prev;
          }

          return {
            chat,
            messages: [...messages, inCommingMessage],
          };
        });
    }
  });
}
