import artistImage from "./artistImage";
import Tag from "./tag";

export default interface artist {
  name: string;
  mbid: string;
  url: string;
  listeners: number;
  image: Array<artistImage>;
  stats: {
    listeners: number;
    playcount: number;
  },
  published: string;
  bio: {
    summary: string;
    content: string;
  }
}