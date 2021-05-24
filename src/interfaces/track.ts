import artist from "./artist";
import artistImage from "./artistImage";

export default interface Track {
  name: string;
  playcount: number;
  mbid: string;
  url: string;
  artist?: artist;
  image: Array<artistImage>
}