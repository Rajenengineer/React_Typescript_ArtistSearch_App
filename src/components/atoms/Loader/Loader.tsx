import classes from './Loader.module.css';

const Loader = () => {
  return (
    <div className={classes.loaderWrapper}>
      <div className={classes.loader}><div></div><div></div></div>
    </div>
  )
};

export default Loader;