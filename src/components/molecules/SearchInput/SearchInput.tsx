import { useState } from 'react';
import { EMPTY_STRING, noop } from '../../../common/constants';
import Button from '../../atoms/Button';
import TextInput from '../../atoms/TextInput';
import classes from './SearchInput.module.css';

interface SearchInputProps {
  query?: string;
  onSearch?: Function;
  button?: React.ReactNode;
}

const SearchInput = ({ query = EMPTY_STRING, onSearch = noop, button = 'Search' }: SearchInputProps) => {
  const [input, setInput] = useState(query);

  const handleSearch = async (): Promise<any> => {
    return onSearch(input);
  }

  return (
    <div className={classes.root}>
      <TextInput input={input} onEnter={handleSearch} onTextInput={setInput} />
      <Button className={classes.button} onClick={handleSearch}>{button}</Button>
    </div>
  )
}

export default SearchInput;

