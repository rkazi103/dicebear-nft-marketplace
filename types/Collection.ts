import { Image } from "./Image";
import { Creator } from "./Creator";

export interface Collection {
  _id: string;
  title: string;
  description: string;
  nftCollectionName: string;
  address: string;
  slug: {
    current: string;
  };
  creator: Creator;
  mainImage: Image;
  previewImage: Image;
}
