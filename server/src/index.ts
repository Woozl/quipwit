import Connection from "./Connection";
import Game from "./game/Game";
import { Player } from "./types";

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

  const connection = new Connection();

  connection.start();
})();
