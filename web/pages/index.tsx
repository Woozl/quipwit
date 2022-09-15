import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import GameSettings from "../components/screens/GameSettings/GameSettings";
import Intro from "../components/screens/Intro/Intro";
import JoinGame from "../components/screens/JoinGame/JoinGame";
import Lobby from "../components/screens/Lobby/Lobby";
import QuestionForm from "../components/screens/QuestionForm/QuestionForm";

const SocketTest = dynamic(
  () => import("../components/screens/SocketTest/SocketTest"),
  {
    ssr: false,
  }
);

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Quipwit</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      {/* <Intro /> */}
      {/* <GameSettings /> */}
      {/* <JoinGame /> */}
      {/* <Lobby
        roomCode="XJSK"
        players={[
          { id: 1, name: "Bob", character: "avocado" },
          { id: 2, name: "Jim", character: "bread" },
          { id: 3, name: "Jacob", character: "cherries" },
          { id: 4, name: "Ella", character: "diamond" },
          { id: 5, name: "Anna", character: "egg" },
          { id: 6, name: "George", character: "fish", isHost: true },
          { id: 7, name: "Mary", character: "ghost" },
          { id: 8, name: "Jerry", character: "heart" },
          { id: 9, name: "Steve", character: "hotdog" },
          { id: 10, name: "Sam", character: "lightbulb" },
        ]}
        rounds={[
          {
            id: 1,
            numberOfQuestions: 3,
            questionTimeLimit: 90,
            voteTimeLimit: 30,
            questionType: "prompt",
          },
          {
            id: 2,
            numberOfQuestions: 3,
            questionTimeLimit: 60,
            voteTimeLimit: 30,
            questionType: "prompt",
          },
          {
            id: 3,
            numberOfQuestions: 3,
            questionTimeLimit: 45,
            voteTimeLimit: 30,
            questionType: "multiprompt",
          },
          {
            id: 1,
            numberOfQuestions: 3,
            questionTimeLimit: 90,
            voteTimeLimit: 30,
            questionType: "prompt",
          },
          {
            id: 2,
            numberOfQuestions: 3,
            questionTimeLimit: 60,
            voteTimeLimit: 30,
            questionType: "prompt",
          },
          {
            id: 3,
            numberOfQuestions: 3,
            questionTimeLimit: 45,
            voteTimeLimit: 30,
            questionType: "multiprompt",
          },
        ]}
      /> */}
      <QuestionForm
        currentQuestion={1}
        numberOfQuestions={3}
        numberOfPromptFields={3}
        roundId={2}
        questionText="A bad thing to say to a cop as he writes you a speeding ticket"
      />
      {/* <SocketTest /> */}
    </>
  );
};

export default Home;
