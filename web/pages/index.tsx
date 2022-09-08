import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import GameSettings from "../components/screens/GameSettings/GameSettings";
import Intro from "../components/screens/Intro/Intro";
import JoinGame from "../components/screens/JoinGame/JoinGame";

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
      <SocketTest />
    </>
  );
};

export default Home;
