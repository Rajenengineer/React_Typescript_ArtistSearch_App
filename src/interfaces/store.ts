import artist from "./artist";
import ArtistDetails from "./artistDetails";

export default interface store {
  search: {
    query: string;
    artists: Array<artist> | null
  },
  artist: ArtistDetails,
  favorites: {
    artists: Array<artist>
  }
}