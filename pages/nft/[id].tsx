/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import Head from "next/head";

const NFTDropPage: NextPage = () => {
  return (
    <div className="flex min-h-screen grid-cols-10 flex-col lg:grid">
      <Head>
        <title>DiceBots NFT Drop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gradient-to-tl from-orange-400 to-sky-400 lg:col-span-4">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="rounded-xl bg-gradient-to-tl from-green-300 to-purple-400 p-2">
            <img
              src="https://avatars.dicebear.com/api/bottts/bruh.svg"
              alt="A DiceBot"
              className="w-44 rounded-xl bg-green-100 object-cover lg:h-80 lg:w-80"
            />
          </div>

          <div className="space-y-2 p-5 text-center">
            <h1 className="text-4xl font-bold text-white">The DiceBots</h1>
            <h2 className="text-xl text-white">
              A collection of robots that are ready to kick some ass!
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDropPage;
