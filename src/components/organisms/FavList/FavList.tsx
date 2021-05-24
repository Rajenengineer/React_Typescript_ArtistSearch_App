import artist from "../../../interfaces/artist";
import Button from "../../atoms/Button";
import ArtistProfile from "../../molecules/ArtistProfile/ArtistProfile";
import ItemsList from "../../molecules/ItemsList"
import classes from './FavList.module.css'

interface FavListProps {
  items: Array<artist>,
  onRemove: Function
}

const FavList = ({ items, onRemove }: FavListProps) => {

  const renderItem = (artist: artist) => {
    return (
      <div className={classes.favItem}>
        <ArtistProfile artist={artist} />
        <Button onClick={() => onRemove(artist)} className={classes.removeBtn}><b>x</b></Button>
      </div>
    )
  }

  return (
    <div className={classes.favList}>
      <ItemsList items={items} renderItem={renderItem} />
    </div>
  )
};

export default FavList;
