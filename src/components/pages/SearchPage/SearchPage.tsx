import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import artist from "../../../interfaces/artist";
import store from "../../../interfaces/store";

import { searchArtists } from "../../../store/actions/artists.actions";
import { addFavoriteArtist, getFavoriteArtists, removeFavoriteArtist } from "../../../store/actions/favorites.actions";

import Button from "../../atoms/Button";
import ArtistProfile from "../../molecules/ArtistProfile/ArtistProfile";
import FavList from "../../organisms/FavList";
import SearchList from "../../organisms/SearchList";

import classes from './SearchPage.module.css';

const SearchPage = () => {
  const query = useSelector((state: store) => state.search.query);
  const items = useSelector((state: store) => state.search.artists);
  const favArtists = useSelector((state: store) => state.favorites.artists);

  const dispatch = useDispatch();

  const handleSearch = async (query: string): Promise<void> => {
    await dispatch(searchArtists(query));
  }

  const renderArtists = (artist: artist) => {
    return (
      <div className={classes.searchListItem}>
        <ArtistProfile artist={artist} />
        {
          favArtists.find(fav => fav.name === artist.name)
            ? (
              <Button onClick={() => dispatch(removeFavoriteArtist(artist))}>Remove from Favorites</Button>
            )
            : (
              <Button onClick={() => dispatch(addFavoriteArtist(artist))}>Add to Favorites</Button>
            )
        }
      </div>
    );
  }

  useEffect(() => {
    dispatch(getFavoriteArtists());
  }, [dispatch]);

  const handleRemoveFav = (artist: artist) => {
    dispatch(removeFavoriteArtist(artist));
  }

  return (
    <div className="page-wrapper">
      <h1 className="page-title">Search Artists</h1>
      <div className="page-content">
        <div className="content-main">
          <SearchList
            query={query}
            items={items}
            searchItems={handleSearch}
            renderItem={renderArtists}
          />
        </div>
        <div className="content-side">
          <h3 className="section-title">My Favorites</h3>
          <FavList
            items={favArtists}
            onRemove={handleRemoveFav}
          />
        </div>
      </div>
    </div>
  )
};

export default SearchPage;
