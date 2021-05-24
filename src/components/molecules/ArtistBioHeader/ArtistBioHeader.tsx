import { Link } from "react-router-dom";
import { DEFAULT_IMG_64 } from "../../../common/constants";
import { abbrNumber } from "../../../common/number.helper";
import ArtistDetails from "../../../interfaces/artistDetails";
import classes from './ArtistBioHeader.module.css';

interface ArtistBioHeaderProps {
  artist: ArtistDetails;
}

const ArtistBioHeader = ({ artist }: ArtistBioHeaderProps) => {
  const { name, image } = artist.fullInfo;
  const src = image.find(img => img.size === 'medium')?.["#text"] || DEFAULT_IMG_64;
  return (
    <div className={classes.root}>
      <Link to={`/artists/${encodeURI(name)}`}>
        <img className={classes.avatar} src={src} alt={name} />
      </Link>
      <div>
        <Link to={`/artists/${encodeURI(name)}`} className={classes.nameLink}>
          <h3 className={classes.name}>{name}</h3>
        </Link>
        {abbrNumber(artist.fullInfo.stats.listeners)} Listeners
        {' . '}
        {abbrNumber(artist.fullInfo.stats.playcount)} PlayCount
      </div>
    </div >
  )
}

export default ArtistBioHeader;
