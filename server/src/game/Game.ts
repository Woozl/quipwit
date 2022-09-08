import {
  MULTIPROMPTS_PATH_PG,
  MULTIPROMPTS_PATH_R,
  PROMPTS_PATH_PG,
  PROMPTS_PATH_R,
} from "../constants";
import {
  GameSettings,
  Player,
  PromptType,
  Question,
  Round,
  RoundSettings,
} from "../types";
import createRoomCode from "../utils/createRoomCode";
import makeGrabBag from "../utils/makeGrabBag";
import randomLine from "../utils/randomLine";

const defaultGameSettings: GameSettings = {
  allowAdultPrompts: false,
  hostDisplay: "player",
};

const defaultRoundSettings: RoundSettings[] = [
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

export default class Game {
  private gameSettings: GameSettings;
  private roundSettings: RoundSettings[];
  private rounds: Round[];
  private players: Player[];
  private hostId: string;
  private roomId: string;

  constructor() {
    this.gameSettings = defaultGameSettings;
    this.roundSettings = defaultRoundSettings;
    this.rounds = [];
    this.players = [];
    this.hostId = "";
    this.roomId = createRoomCode();
  }

  addPlayer(player: Player) {
    if (!this.players.find((p) => p.id === player.id))
      this.players.push(player);
  }

  removePlayer(player: Player) {
    this.players = this.players.filter((p) => p.id !== player.id);
  }

  setGameSettings(settings: GameSettings) {
    this.gameSettings = settings;
  }

  setRoundSettings(settings: RoundSettings[]) {
    this.roundSettings = settings;
  }

  setHost(host: Player) {
    if (!this.players.find((p) => p.id === host.id)) {
      throw new Error(
        "Attempted to set a player that's not in the game as a host"
      );
    }
    const hostPlayer = this.players.find((p) => p.id === host.id)!;
    host.isHost = true;
    this.hostId = host.id;
  }

  async generateRounds() {
    this.rounds = new Array<Round>(this.roundSettings.length);

    for (let i = 0; i < this.rounds.length; ++i) {
      const {
        numberOfQuestions,
        playersPerQuestion,
        promptType,
        questionTimeLimit,
        voteTimeLimit,
      } = this.roundSettings[i];

      this.rounds[i] = {
        questions: await this.assignPlayers(
          numberOfQuestions,
          playersPerQuestion,
          promptType
        ),
        questionTimeLimit,
        voteTimeLimit,
      };
    }
  }

  private async assignPlayers(
    numberOfQuestions: number,
    playersPerQuestion: number,
    promptType: PromptType
  ): Promise<Question[]> {
    const questionAssignment = new Array<Question>(numberOfQuestions);

    const bag = makeGrabBag<Player>(this.players);

    for (let questionNum = 0; questionNum < numberOfQuestions; ++questionNum) {
      const question: Question = {
        prompt: await this.getPrompt(promptType),
        answeringPlayers: new Array<Player>(playersPerQuestion),
        votingPlayers: new Array<Player>(
          this.players.length - playersPerQuestion
        ),
      };

      for (let playerNum = 0; playerNum < playersPerQuestion; ++playerNum) {
        question.answeringPlayers[playerNum] = bag.next().value!;
      }

      question.votingPlayers = this.players.filter(
        (player) => !question.answeringPlayers.includes(player)
      );

      questionAssignment[questionNum] = question;
    }

    bag.return();

    return questionAssignment;
  }

  private async getPrompt(type: PromptType): Promise<string> {
    const { allowAdultPrompts } = this.gameSettings;

    if (type === "classic")
      return await randomLine(
        allowAdultPrompts ? PROMPTS_PATH_R : PROMPTS_PATH_PG
      );
    else
      return await randomLine(
        allowAdultPrompts ? MULTIPROMPTS_PATH_R : MULTIPROMPTS_PATH_PG
      );
  }
}
