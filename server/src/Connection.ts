import { WebSocket, WebSocketServer } from "ws";

export default class Connection {
  private readonly wss: WebSocketServer;

  constructor() {
    this.wss = new WebSocketServer({
      port: 8080,
    });
  }

  start() {
    this.wss.on("connection", (ws) => {
      console.log("client connected");

      ws.on("message", (data) => {
        console.log("data received: ", data.toString("utf8"));

        ws.send(data);
        console.log("data sent: ", data.toString("utf8"));
      });

      ws.on("close", () => {
        console.log("client left");
      });
    });

    this.wss.on("close", () => {
      console.log("wss closed");
    });
  }
}
