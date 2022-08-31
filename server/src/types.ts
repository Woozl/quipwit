export interface GameSettings {
  allowAdultPrompts: boolean;
  hostDisplay: "player" | "shared";
}

export interface RoundSettings {
  numberOfQuestions: number;
  questionTimeLimit: number;
  playersPerQuestion: number;
  voteTimeLimit: number;
  promptType: "classic" | "multiprompt";
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
