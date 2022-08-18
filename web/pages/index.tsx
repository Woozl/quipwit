import type { NextPage } from "next";
import Head from "next/head";
import Intro from "../components/screens/Intro";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Quipwit</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <Intro />
    </>
  );
};

export default Home;
