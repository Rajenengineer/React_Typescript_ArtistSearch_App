import action from "../../interfaces/action";
import ArtistDetails from "../../interfaces/artistDetails";

const initialState: ArtistDetails | null = null;

const artistReducer = (state = initialState, { type, payload }: action) => {
  switch (type) {
    case 'SEARCH_SET_ARTIST':
      return payload
    default:
      return state;
  }
}

export default artistReducer;
