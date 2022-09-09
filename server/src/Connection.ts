import WebSocket, { WebSocketServer } from "ws";

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
    this.wss.on("connection", (ws) => {
      console.log("client connected");

      ws.on("message", (data) => {
        // console.log("data received: ", data.toString("utf8"));

        // ws.send(data);
        // console.log("data sent: ", data.toString("utf8"));

        try {
          const message = JSON.parse(data.toString("utf8"));

          if (message.connect !== undefined) {
            this.clients.set(message.connect, ws);
            console.log("Added client", message.connect);
          }

          if (message.disconnect !== undefined) {
            this.clients.delete(message.disconnect);
            console.log("Removed client", message.connect);
          }
        } catch (e) {
          if (e instanceof SyntaxError) {
            ws.send(JSON.stringify({ error: "Invalid JSON" }));
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
