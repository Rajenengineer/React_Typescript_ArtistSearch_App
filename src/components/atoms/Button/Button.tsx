import classes from './Button.module.css'
import { EMPTY_STRING, noop } from "../../../common/constants";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const Button = ({ children = EMPTY_STRING, className = EMPTY_STRING, onClick = noop, ...props }: ButtonProps) => (
  <button
    className={`${classes.root} ${className}`}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
)

export default Button;
