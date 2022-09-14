import Image from "next/image";
import Button from "../../Button/Button";
import Character from "../../Character/Character";
import styles from "./Lobby.module.css";

interface LobbyProps {
  roomCode: string;
  rounds?: {
    id: number;
    numberOfQuestions: number;
    questionTimeLimit: number;
    voteTimeLimit: number;
    questionType: "prompt" | "multiprompt";
  }[];
  players?: {
    id: number;
    name: string;
    isHost?: boolean;
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
  }[];
}

const Lobby = ({ roomCode, rounds, players }: LobbyProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Room: {roomCode}</h1>
      <div className={styles.center}>
        <div className={styles.roundsContainer}>
          <h2>Rounds: </h2>
          <div className={styles.roundList}>
            {rounds?.map((round) => (
              <div key={round.id} className={styles.round}>
                <h3>Round {round.id}</h3>
                <div># Questions: {round.numberOfQuestions}</div>
                <div>Answer time limit: {round.questionTimeLimit}</div>
                <div>Vote time limit: {round.voteTimeLimit}</div>
              </div>
            )) ?? "Loading..."}
          </div>
        </div>
        <div className={styles.playersContainer}>
          <h2>Players: </h2>
          <div className={styles.playerList}>
            {players?.map((player) => (
              <div key={player.id} className={styles.player}>
                <Character
                  character={player.character}
                  width={64}
                  height={64}
                />
                <h3>{player.name}</h3>
                {player.isHost && (
                  <Image src="/icons/crown.svg" width={46} height={25} />
                )}
              </div>
            )) ?? "Loading..."}
          </div>
        </div>
      </div>
      <div className={styles.startGameButton}>
        <Button
          text="Start Game"
          onClick={() => console.log("Start game clicked")}
          color="purple"
        />
      </div>
    </div>
  );
};

export default Lobby;
