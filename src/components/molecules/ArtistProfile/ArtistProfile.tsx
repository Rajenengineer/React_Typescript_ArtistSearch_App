import { Link } from "react-router-dom";
import { DEFAULT_IMG_64 } from "../../../common/constants";
import { abbrNumber } from "../../../common/number.helper";
import artist from "../../../interfaces/artist";
import classes from './ArtistProfile.module.css'

interface ArtistProfileProps {
  artist: artist;
}

const ArtistProfile = ({ artist }: ArtistProfileProps) => {
  const { name, image } = artist;
  const src = image.find(img => img.size === 'medium')?.["#text"] || DEFAULT_IMG_64;
  return (
    <div className={classes.root}>
      <Link to={`/artists/${encodeURI(artist.name)}`}>
        <img className={classes.avatar} src={src} alt={name} />
      </Link>
      <div>
        <Link to={`/artists/${encodeURI(artist.name)}`} className={classes.nameLink}>
          <h3 className={classes.name}>{name}</h3>
        </Link>
        {abbrNumber(artist.listeners)} Listeners
      </div>
    </div >
  )
}

export default ArtistProfile;
