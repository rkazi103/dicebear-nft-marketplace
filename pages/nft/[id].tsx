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

      <div className="flex flex-1 flex-col p-12 lg:col-span-6">
        {/* Header */}
        <header className="flex items-center justify-between">
          <h1 className="w-52 cursor-pointer font-extralight sm:w-80">
            The{" "}
            <span className="font-extrabold underline decoration-sky-600/50">
              DiceBots
            </span>{" "}
            NFT Marketplace
          </h1>

          <button className="rounded-full bg-sky-400 px-4 py-2 text-xs font-bold text-white lg:px-5 lg:py-3 lg:text-base">
            Sign In
          </button>
        </header>

        <hr className="my-2 border" />

        {/* Content */}
        <div className="mt-10 flex flex-1 flex-col items-center space-y-6 lg:justify-center lg:space-y-0">
          <img
            src="/images/dicebots-logo.png"
            alt=""
            className="w-80 object-cover pb-10"
          />

          <h1 className="text-center text-3xl font-bold lg:text-5xl lg:font-extrabold">
            The DiceBots Fight Club
          </h1>

          <p className="pt-2 text-xl text-green-500">
            32 / 50 NFT&apos;s Claimed
          </p>
        </div>

        {/* Mint Button */}
      </div>
    </div>
  );
};

export default NFTDropPage;
