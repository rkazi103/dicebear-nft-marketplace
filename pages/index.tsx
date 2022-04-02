import type { GetServerSideProps, NextPage } from "next";
import { groq } from "next-sanity";
import Head from "next/head";
import { client } from "../lib/sanity";
import { Collection } from "../types/Collection";

type HomeProps = {
  collections: Collection[];
};

const Home: NextPage<HomeProps> = ({ collections }) => {
  return (
    <div>
      <Head>
        <title>DiceBots NFT Drop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-4xl font-bold text-red-500"></h1>
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
