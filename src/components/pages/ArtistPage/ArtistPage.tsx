import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom"
import Album from "../../../interfaces/album";
import artist from "../../../interfaces/artist";
import store from "../../../interfaces/store";
import Tag from "../../../interfaces/tag";
import Track from "../../../interfaces/track";
import { getArtistInfo } from "../../../store/actions/artists.actions";
import { getFavoriteArtists, removeFavoriteArtist } from "../../../store/actions/favorites.actions";
import AlbumItem from "../../atoms/AlbumItem";
import Loader from "../../atoms/Loader";
import TagItem from "../../atoms/TagItem";
import TrackItem from "../../atoms/TrackItem";
import ArtistBioHeader from "../../molecules/ArtistBioHeader";
import ItemsList from "../../molecules/ItemsList";
import FavList from "../../organisms/FavList";
import classes from './ArtistPage.module.css'

interface MatchParams {
  name: string;
}

const ArtistPage = () => {

  const favArtists = useSelector((state: store) => state.favorites.artists);
  const artist = useSelector((state: store) => state.artist);
  const match = useRouteMatch();
  const name = (match.params as MatchParams).name;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArtistInfo(name));
  }, [name, dispatch]);

  useEffect(() => {
    dispatch({ type: 'SEARCH_SET_ARTIST', payload: null });
    dispatch(getFavoriteArtists());
  }, [dispatch]);

  const handleRemoveFav = (artist: artist) => {
    dispatch(removeFavoriteArtist(artist));
  }

  return (
    <div className="page-wrapper">
      <h1 className="page-title">{name}</h1>
      <div className="page-content">
        <div className="content-main">
          <div className={classes.breadcrumb}>
            <Link to="/">← Search page</Link>
          </div>
          {
            artist && artist.fullInfo.name === name
              ? (
                <>
                  <div className={classes.block}><ArtistBioHeader artist={artist} /></div>
                  <h3 className="section-title">Bio Summary</h3>
                  <div className={classes.block}>{artist.fullInfo.bio.summary.replace(/<a(.*)<\/a>/, '')}</div>
                  <h3 className="section-title">Top 10 Tags</h3>
                  <ItemsList className={classes.tagList} items={artist.topTags.slice(0, 10)} renderItem={(tag: Tag) => <TagItem tag={tag} />} />
                  <h3 className="section-title">Top 10 Albums</h3>
                  <ItemsList className={classes.albumList} items={artist.topAlbums.slice(0, 10)} renderItem={(album: Album) => <AlbumItem album={album} />} />
                  <h3 className="section-title">Top Tracks</h3>
                  <ItemsList className={classes.trackList} items={artist.topTracks} renderItem={(track: Track) => <TrackItem track={track} />} />
                </>
              )
              : <Loader />
          }
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

export default ArtistPage;
