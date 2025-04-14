import { io } from "socket.io-client";

const SOCKET_SERVER_URL = "http//13.201.93.144:8084";

export const SOCKET = io(SOCKET_SERVER_URL, {
  transports: ["websocket"],
  forceNew: true,
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 2000,
});


// SOCKET.on("connect", () => {
//   console.log("✅ Connected to Socket Server:", SOCKET.id);
// });

SOCKET.on("connect_error", (error) => {
  console.error("❌ Socket Connection Error:", error);
});


SOCKET.on("disconnect", (reason) => {
  console.log("🔌 Disconnected from Socket Server:", reason);
});
