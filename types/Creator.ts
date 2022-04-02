import { Image } from "./Image";

export interface Creator {
  _id: string;
  name: string;
  address: string;
  slug: {
    current: string;
  };
  image: Image;
  bio: string;
}
