export default function socketListner(socket, setChatMessagges) {
  socket.addEventListener("message", (ev) => {
    const data = JSON.parse(ev.data);
    const { type, payLoad } = data;
    switch (type) {
      case "GET-CHAT":
        setChatMessagges(payLoad.data.messages);
    }
  });
}
