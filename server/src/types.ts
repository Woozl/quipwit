export interface GameSettings {
  allowAdultPrompts: boolean;
  hostDisplay: "player" | "shared";
}

export interface RoundSettings {
  numberOfQuestions: number;
  questionTimeLimit: number;
  playersPerQuestion: number;
  voteTimeLimit: number;
  promptType: PromptType;
}

export type PromptType = "classic" | "multiprompt";

export interface Round {
  questions: Question[];
  questionTimeLimit: number;
  voteTimeLimit: number;
}

export interface Question {
  prompt: string;
  answeringPlayers: Player[];
  votingPlayers: Player[];
}

export interface Player {
  id: string;
  name: string;
  character:
    | "bread"
    | "diamond"
    | "hotdog"
    | "egg"
    | "heart"
    | "lightbulb"
    | "fish"
    | "cherries"
    | "ghost"
    | "avocado";
  isHost: boolean;
  points: number;
}
