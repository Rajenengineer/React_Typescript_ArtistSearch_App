import Track from "../../../interfaces/track";
import classes from './TrackItem.module.css';

interface TrackProps {
  track: Track
}

const TrackItem = ({ track }: TrackProps) => {
  return (
    <div className={classes.root}>
      {track.name}
    </div>
  )
}

export default TrackItem;