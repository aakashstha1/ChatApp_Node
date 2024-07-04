import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "http://localhost:5173", // Adjust the origin as needed
    methods: ["GET", "POST"],
  },
});

let onlineUsers = [];

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  // Listen to connection
  socket.on("addNewUser", (userId) => {
    if (!onlineUsers.some((user) => user.userId === userId)) {
      onlineUsers.push({
        userId,
        socketId: socket.id,
      });
    }
    console.log("Online Users:", onlineUsers);

    io.emit("getOnlineUsers", onlineUsers);
  });

  // Listen for sendMessage
  socket.on("sendMessage", (message) => {
    const user = onlineUsers.find(
      (user) => user.userId === message.recipientId
    );

    if (user) {
      io.to(user.socketId).emit("getMessage", message);
      io.to(user.socketId).emit("getNotification", {
        senderId: message.senderId,
        isRead: false,
        date: new Date(),
      });
    }
  });

  // Listen for disconnection
  socket.on("disconnect", () => {
    onlineUsers = onlineUsers.filter((user) => user.socketId !== socket.id);
    io.emit("getOnlineUsers", onlineUsers);
    console.log(`User disconnected: ${socket.id}`);
  });
});

io.listen(5000, () => {
  console.log("Socket.IO server is running on port 5000");
});
