/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useMetamask, useDisconnect, useAddress } from "@thirdweb-dev/react";
import walletShortener from "../../lib/walletShortener";
import { client, urlFor } from "../../lib/sanity";
import { groq } from "next-sanity";
import { Collection } from "../../types/Collection";
import Link from "next/link";

type NFTDropProps = {
  collection: Collection;
};

const NFTDropPage: NextPage<NFTDropProps> = ({ collection }) => {
  const connectWithMetamask = useMetamask();
  const disconnect = useDisconnect();
  const address = useAddress();

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
              src={urlFor(collection.previewImage).url()}
              alt={`${collection.title} NFT Preview Logo`}
              className="w-44 rounded-xl bg-green-100 object-cover lg:h-80 lg:w-80"
            />
          </div>

          <div className="space-y-2 p-5 text-center">
            <h1 className="text-4xl font-bold text-white">
              {collection.nftCollectionName}
            </h1>
            <h2 className="text-xl text-white">{collection.description}</h2>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-12 lg:col-span-6">
        <header className="flex items-center justify-between">
          <Link href="/" passHref>
            <h1 className="w-52 cursor-pointer font-extralight sm:w-80">
              The{" "}
              <a
                href="https://avatars.dicebear.com/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="font-extrabold underline decoration-sky-600/50">
                  DiceBear
                </span>{" "}
                NFT Marketplace
              </a>
            </h1>
          </Link>

          <button
            className="rounded-full bg-sky-400 px-4 py-2 text-xs font-bold text-white hover:bg-sky-500 lg:px-5 lg:py-3 lg:text-base"
            onClick={() => (address ? disconnect() : connectWithMetamask())}
          >
            {address ? "Sign Out" : "Sign In"}
          </button>
        </header>

        <hr className="my-2 border" />
        {address && (
          <p className="text-center text-sm text-sky-600">
            You&apos;re logged in with wallet address {walletShortener(address)}
          </p>
        )}

        <div className="mt-10 flex flex-1 flex-col items-center space-y-6 lg:justify-center lg:space-y-0">
          <img
            src={urlFor(collection.mainImage).url()}
            alt={`${collection.title} NFT Drop Logo`}
            className="w-80 object-cover pb-10"
          />

          <h1 className="text-center text-3xl font-bold lg:text-5xl lg:font-extrabold">
            {collection.title}
          </h1>

          <p className="pt-2 text-xl text-green-500">
            32 / 50 NFT&apos;s Claimed
          </p>
        </div>

        <button className="mt-10 h-16 w-full rounded-full bg-orange-700 font-bold text-white hover:bg-orange-800">
          Mint NFT (0.01 ETH)
        </button>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const query = groq`
    *[_type == "collection" && slug.current == $id][0]{
      _id,
      title,
      address,
      description,
      nftCollectionName,
      mainImage {
        asset
      },
      previewImage {
        asset
      },
      slug {
        current
      },
      creator-> {
        _id,
        name,
        address,
        slug {
          current
        }
      }
    }
  `;

  const collection = await client.fetch(query, {
    id: params?.id,
  });

  if (!collection) {
    return { notFound: true };
  }

  return {
    props: {
      collection,
    },
  };
};

export default NFTDropPage;
