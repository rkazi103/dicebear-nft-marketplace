/* eslint-disable @next/next/no-img-element */
import type { GetServerSideProps, NextPage } from "next";
import { groq } from "next-sanity";
import Head from "next/head";
import Link from "next/link";
import { client, urlFor } from "../lib/sanity";
import { Collection } from "../types/Collection";

type HomeProps = {
  collections: Collection[];
};

const Home: NextPage<HomeProps> = ({ collections }) => {
  return (
    <div className="mx-auto flex min-h-screen max-w-7xl flex-col py-20 px-10 2xl:p-0">
      <Head>
        <title>DiceBots NFT Drop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="mb-10 text-4xl font-extralight">
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

      <main className="bg-slate-100 p-10 shadow-xl shadow-sky-400/20">
        <div className="grid space-x-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {collections.map(collection => (
            <Link
              key={collection._id}
              href={`/nft/${collection.slug.current}`}
              passHref
            >
              <div className="flex cursor-pointer flex-col items-center transition-all duration-200 hover:scale-105">
                {/* h-96 */}
                <img
                  src={urlFor(collection.mainImage).url()}
                  alt=""
                  className="w-60 rounded-2xl object-cover"
                />

                <div className="p-5">
                  <h2 className="text-3xl">{collection.title}</h2>
                  <p className="mt-2 text-sm text-gray-400">
                    {collection.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const query = groq`
    *[_type == "collection"]{
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

  const collections = await client.fetch(query);

  return {
    props: {
      collections,
    },
  };
};

export default Home;
