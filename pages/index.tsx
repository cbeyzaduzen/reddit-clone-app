import type { NextPage } from "next";
import Head from "next/head";
import PostBox from "./components/PostBox";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Reddit Clone App</title>
      </Head>
      {/* PostBox */}
      <PostBox />
      <div>{/* Feed */}</div>
    </div>
  );
};

export default Home;
