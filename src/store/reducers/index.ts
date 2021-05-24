import { combineReducers } from 'redux';
import search from './search.reducer';
import artist from './artist.reducer';
import favorites from './favorites.reducer';

export default combineReducers({
  search,
  artist,
  favorites,
});