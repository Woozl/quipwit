import WebSocket, { WebSocketServer } from "ws";
import { getErrorMessage } from "./utils/getErrorMessage";

export default class Connection {
  private readonly wss: WebSocketServer;
  private clients: Map<string, WebSocket.WebSocket>;

  constructor() {
    this.wss = new WebSocketServer({
      port: 8080,
    });

    this.clients = new Map<string, WebSocket.WebSocket>();
  }

  start() {
    this.wss.clients;

    this.wss.on("connection", (ws) => {
      console.log("client connected");

      ws.on("message", (data) => {
        try {
          const message = JSON.parse(data.toString("utf8"));

          switch (message.event) {
            case "connect":
              this.clients.set(message.data, ws);
              console.log("Added client: ", message.data);
              break;
            case "disconnect":
              this.clients.delete(message.data);
              console.log("Removed client: ", message.data);
              break;
            case undefined:
              console.log("Sending back: ", JSON.stringify(message));
              ws.send(JSON.stringify(message));
              break;
          }
        } catch (e) {
          if (e instanceof SyntaxError) {
            ws.send(JSON.stringify({ error: "Invalid JSON" }));
          } else {
            ws.send(JSON.stringify({ error: getErrorMessage(e) }));
          }
        }
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
