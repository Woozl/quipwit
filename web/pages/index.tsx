import type { NextPage } from "next";
import Head from "next/head";
import GameSettings from "../components/screens/GameSettings/GameSettings";
import Intro from "../components/screens/Intro/Intro";
import JoinGame from "../components/screens/JoinGame/JoinGame";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Quipwit</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      {/* <Intro /> */}
      {/* <GameSettings /> */}
      <JoinGame />
    </>
  );
};

export default Home;
