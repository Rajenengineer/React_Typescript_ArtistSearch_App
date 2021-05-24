import { useState } from "react";
import ItemsList from "../../molecules/ItemsList"
import SearchInput from "../../molecules/SearchInput"

interface SearchListProps {
  query: string;
  items: Array<any> | null;
  searchItems: Function;
  renderItem: Function;
}

const SearchList = ({ query, items, searchItems, renderItem }: SearchListProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (input: string) => {
    setIsLoading(true);
    await searchItems(input);
    setIsLoading(false);
  }

  return (
    <div className="search-list-wrapper">
      <SearchInput query={query} onSearch={handleSearch} button="Search" />
      <ItemsList items={items} renderItem={renderItem} isLoading={isLoading} />
    </div>
  )
};

export default SearchList;
