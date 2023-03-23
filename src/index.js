import express from "express";
import morgan from "morgan";
import { Server as webServer } from "socket.io";
import http from "http";
import { tryConnection } from "./db";

const app = express();

tryConnection();

const server = http.createServer(app);
const io = new webServer(server);

app.listen("5432");
app.use(morgan("dev"));

console.log("server listen on port 5432");
