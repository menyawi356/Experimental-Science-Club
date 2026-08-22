export default function sendMessage(socket, message, chat) {
  socket.send(
    JSON.stringify({
      type: "send-message",
      payLoad: {
        message,
        chat,
      },
    }),
  );
}
