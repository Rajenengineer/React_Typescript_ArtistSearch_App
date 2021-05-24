import { useState } from 'react'
import { EMPTY_STRING, KEY_ENTER, noop } from "../../../common/constants";
import classes from './TextInput.module.css'

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  input?: string;
  onEnter?: Function;
  onTextInput?: Function;
}

const TextInput = ({ input = EMPTY_STRING, onEnter = noop, onTextInput = noop }: TextInputProps) => {
  const [value, setValue] = useState(input);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onTextInput(e.target.value);
  }

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === KEY_ENTER) {
      onEnter(value);
    }
  }

  return (
    <div className={classes.root}>
      <input value={value} className={classes.input} type="text" onInput={handleInput} onKeyUp={onKeyUp} />
    </div>
  )
}

export default TextInput;
