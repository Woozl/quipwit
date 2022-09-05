import Game from "./game/Game";
import { createMachine } from "./game/State";
import { Player } from "./types";
import { random, randomInt } from "./utils/random";

(async () => {
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

  const machine = createMachine({
    initialState: "off",
    off: {
      actions: {
        onEnter() {
          console.log("off: onEnter");
        },
        onExit() {
          console.log("off: onExit");
        },
      },
      transistions: {
        switch: {
          target: "on",
          action() {
            console.log("transition action for switch in 'off' state");
          },
        },
      },
    },
    on: {
      actions: {
        onEnter() {
          console.log("on: onEnter");
        },
        onExit() {
          console.log("on: onExit");
        },
      },
      transistions: {
        switch: {
          target: "off",
          action() {
            console.log("transition action for switch in 'on' state");
          },
        },
      },
    },
  });

  console.log(machine.value);
  console.log(machine.transistion(machine.value, "switch"));
  console.log(machine.transistion(machine.value, "switch"));
})();
