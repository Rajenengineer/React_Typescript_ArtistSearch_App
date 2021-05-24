import { EMPTY_STRING } from "../../common/constants";
import action from "../../interfaces/action";
import artist from "../../interfaces/artist";

const initialState: {
  query: string;
  artists: Array<artist> | null;
} = {
  query: EMPTY_STRING,
  artists: null,
}

const searchReducer = (state = initialState, { type, payload }: action) => {
  switch (type) {
    case 'SEARCH_SET_ARTISTS':
      return {
        ...state,
        artists: payload
      };
    case 'SEARCH_SET_QUERY':
      return {
        ...state,
        query: payload
      };
    default:
      return state;
  }
}

export default searchReducer;
