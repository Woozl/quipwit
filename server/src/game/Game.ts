import { PROMPTS_PATH } from "../constants";
import { GameSettings, Player, RoundSettings } from "../types";
import { randomInt } from "../utils/random";
import randomLine from "../utils/randomLine";

export default class Game {
  private gameSettings: GameSettings;
  private rounds: RoundSettings[];
  private players: Player[];
  private hostId: string;
  private roomId: string;

  constructor() {
    this.gameSettings = { allowAdultPrompts: false, hostDisplay: "player" };
    this.rounds = [
      {
        numberOfQuestions: 3,
        playersPerQuestion: 2,
        questionTimeLimit: 60,
        voteTimeLimit: 20,
        promptType: "classic",
      },
      {
        numberOfQuestions: 3,
        playersPerQuestion: 2,
        questionTimeLimit: 60,
        voteTimeLimit: 20,
        promptType: "classic",
      },
      {
        numberOfQuestions: 3,
        playersPerQuestion: 2,
        questionTimeLimit: 60,
        voteTimeLimit: 20,
        promptType: "multiprompt",
      },
    ];
    this.players = [];
    this.hostId = "";
    this.roomId = "";
  }

  setPlayers(players: Player[]) {
    this.players = players;
  }

  async assignPlayers(numberOfQuestions: number, playersPerQuestion: number) {
    const questionAssignment = new Array(numberOfQuestions);

    const bag = this.makeGrabBag(this.players.map((player) => player.name));

    for (let questionNum = 0; questionNum < numberOfQuestions; ++questionNum) {
      const question = {
        prompt: await randomLine(PROMPTS_PATH),
        answeringPlayers: new Array(playersPerQuestion),
        votingPlayers: new Array(this.players.length - playersPerQuestion),
      };

      for (let playerNum = 0; playerNum < playersPerQuestion; ++playerNum) {
        question.answeringPlayers[playerNum] = bag.next().value;
      }

      question.votingPlayers = this.players
        .map((player) => player.name)
        .filter((player) => !question.answeringPlayers.includes(player));

      questionAssignment[questionNum] = question;
    }

    bag.return();

    return questionAssignment;
  }

  private *makeGrabBag(array: any[]) {
    let done = false;

    while (!done) {
      const bag = Array.from(array);

      // Durstenfeld shuffle
      for (let i = bag.length - 1; i >= 0; --i) {
        const randomIndex = randomInt(0, i);
        const tmp = bag[randomIndex];
        bag[randomIndex] = bag[i];
        bag[i] = tmp;
      }

      while (bag.length > 0) {
        done = (yield bag.pop()) ?? false;
        if (done) break;
      }
    }
  }
}
