import Game from "./game/Game.js";
import { Player } from "./types.js";

const players: Player[] = [
  {
    name: "David",
    character: "bread",
    id: "1",
    isHost: true,
    points: 100,
  },
  {
    name: "Billy",
    character: "avocado",
    id: "2",
    isHost: true,
    points: 100,
  },
  {
    name: "John",
    character: "egg",
    id: "3",
    isHost: true,
    points: 100,
  },
  {
    name: "Emma",
    character: "cherries",
    id: "3",
    isHost: true,
    points: 100,
  },
  {
    name: "Ben",
    character: "ghost",
    id: "4",
    isHost: true,
    points: 100,
  },
  {
    name: "George",
    character: "hotdog",
    id: "5",
    isHost: true,
    points: 100,
  },
];

const game = new Game();

game.setPlayers(players);

console.log(await game.assignPlayers(10, 2));
