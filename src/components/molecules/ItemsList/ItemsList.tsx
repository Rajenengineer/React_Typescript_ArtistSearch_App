import cx from 'classnames'
import { EMPTY_STRING } from "../../../common/constants";
import Loader from '../../atoms/Loader';
import classes from "./ItemsList.module.css";

interface ItemsListProps {
  items: Array<any> | null;
  renderItem: Function;
  isLoading?: boolean;
  className?: string;
}

const ItemsList = ({ items, renderItem, isLoading = false, className = EMPTY_STRING }: ItemsListProps) => {

  const renderLoader = () => {
    return (
      <Loader />
    );
  }

  const renderItems = () => {
    return (
      items!.map((item) => (
        // <div className={classes.item}>
        renderItem(item)
        // </div>
      ))
    );
  }

  const renderEmpty = () => {
    return (
      <div className={classes.emptyMessage}>No items to display</div>
    )
  }

  return (
    <div className={cx(classes.itemList, className)}>
      {isLoading && renderLoader()}
      {!isLoading && items && items.length === 0 && renderEmpty()}
      {!isLoading && items && items.length > 0 && renderItems()}
    </div>
  )
}

export default ItemsList;
