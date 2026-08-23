import { SOCKET_URL } from "../config/env.js";

export default function createSocket() {
  const socket = new WebSocket(SOCKET_URL);
  return socket;
}
