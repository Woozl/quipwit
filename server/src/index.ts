import { connect } from "http2";
import { WebSocketServer } from "ws";
import { z, ZodError } from "zod";
import Connection from "./Connection";
import Game from "./game/Game";
import { Player } from "./types";
import { getErrorMessage } from "./utils/getErrorMessage";

(async () => {
  const players: Player[] = [
    {
      name: "David",
      character: "bread",
      id: "0",
      isHost: false,
      points: 100,
    },
    {
      name: "Billy",
      character: "avocado",
      id: "1",
      isHost: false,
      points: 100,
    },
    {
      name: "John",
      character: "egg",
      id: "2",
      isHost: false,
      points: 100,
    },
    {
      name: "Emma",
      character: "cherries",
      id: "3",
      isHost: false,
      points: 100,
    },
    {
      name: "Ben",
      character: "ghost",
      id: "4",
      isHost: false,
      points: 100,
    },
    {
      name: "George",
      character: "hotdog",
      id: "5",
      isHost: false,
      points: 100,
    },
  ];

  // const connection = new Connection();
  // connection.start();

  const wss = new WebSocketServer({ port: 8080 });

  const playerToGameIdMap = new Map<string, string | null>();
  const gameIdToGameMap = new Map<string, Game>();

  wss.on("connection", (ws) => {
    ws.on("message", (data) => {
      // check that received data is valid JSON
      let message: string | {} = "";
      try {
        message = JSON.parse(data.toString("utf8"));
      } catch (e: unknown) {
        if (e instanceof SyntaxError) {
          ws.send(JSON.stringify({ error: "Invalid JSON" }));
        } else {
          ws.send(JSON.stringify({ error: getErrorMessage(e) }));
        }
        // throw new Error("Received bad JSON!");
        console.warn("Received bad JSON");
      }

      // use zod to check if json conforms to type interface
      const responseSchema = z.object({
        userId: z.string().uuid(),
        event: z.object({
          name: z.enum(["connect", "disconnect", "join"]),
          data: z.any(),
        }),
      });

      try {
        responseSchema.parse(message);
      } catch (e: unknown) {
        if (e instanceof ZodError) {
          console.error(e);
          ws.send(JSON.stringify({ error: JSON.parse(e.message) }));
        } else {
          ws.send(JSON.stringify({ error: "JSON does not fit schema" }));
        }
        return;
      }

      const response = message as z.infer<typeof responseSchema>;

      // event methods
      switch (response.event.name) {
        case "connect":
          if (playerToGameIdMap.has(response.userId)) {
            ws.send(JSON.stringify({ error: "User already in server" }));
          } else {
            playerToGameIdMap.set(response.userId, null);
          }
          break;
        case "disconnect":
          console.log(response.userId, "has disconnected");
          break;
        case "join":
          if (!playerToGameIdMap.has(response.userId)) {
            ws.send(JSON.stringify({ error: "User is not in server" }));
          } else if (playerToGameIdMap.get(response.userId) !== null) {
            ws.send(JSON.stringify({ error: "User is already in a game" }));
          } else {
            playerToGameIdMap.set(response.userId, response.event.data.gameId);
          }
          break;
        default:
          console.log(response);
          break;
      }

      console.log(playerToGameIdMap);
    });
  });
})();
