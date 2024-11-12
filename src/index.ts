import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import router from "./routes";
import http from "http";
import { Server } from "socket.io";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT"],
  },
});

app.use(bodyParser.json());
app.use("/", router);

// Configuración de Socket.IO
io.on("connection", (socket) => {
  console.log("Cliente conectado:", socket.id);

  // Desconexión del cliente
  socket.on("disconnect", () => {
    console.log("Cliente desconectado:", socket.id);
  });
});

export function getIo() {
  return io;
}

server.listen(port, () => {
  console.log(`[server]: Server is running on port: ${port}`);
});
