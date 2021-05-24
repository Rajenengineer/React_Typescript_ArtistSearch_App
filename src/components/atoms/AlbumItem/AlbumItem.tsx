import { DEFAULT_IMG_XL } from "../../../common/constants";
import Album from "../../../interfaces/album";
import classes from './AlbumItem.module.css';

interface AlbumProps {
  album: Album
}

const AlbumItem = ({ album }: AlbumProps) => {
  const src = album.image.find(img => img.size === 'extralarge')?.["#text"] || DEFAULT_IMG_XL;

  return (
    album.name !== 'undefined' && album.name !== '(null)'
      ? (
        <div className={classes.root}>
          <img className={classes.cover} src={src} alt={album.name} />
          <span className={classes.name}>{album.name}</span>
        </div>
      )
      : null
  );
}

export default AlbumItem;