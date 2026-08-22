import { SOCKET_URL } from "../config/env.js";

export default function createSocket() {
  const socket = new WebSocket(SOCKET_URL);
  socket.addEventListener("message", (ev) => {
    const data = JSON.parse(ev.data);
    console.log(data);
  });
  return socket;
}
