const changeRoom = (room, socket) => {
  if (!socket || !room) return;
  const sendRoom = () => {
    socket.send(
      JSON.stringify({
        type: "change-room",
        payLoad: {
          room,
        },
      }),
    );
  };

  if (socket.readyState === WebSocket.OPEN) {
    sendRoom();
  } else {
    socket.addEventListener("open", sendRoom, { once: true });
  }
};
export default changeRoom;
