
console.log("backend");
import express from "express";
import http from "http";
import serverConfig from "./config/serverConfig";

import cors from "cors";
import { Server } from "socket.io";
import roomHandler from "./handlers/roomHandler";

const app = express();

app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
       origin: "*",
       methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log("New user connected");
    roomHandler(socket);

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});

server.listen(serverConfig.PORT, () => {
    console.log(`server started at ${serverConfig.PORT}`);
});
