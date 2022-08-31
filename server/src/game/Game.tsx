import { GameSettings, Player, RoundSettings } from "../types";

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
}
