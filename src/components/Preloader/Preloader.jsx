import classes from './Preloader.module.css'

function Preloader() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.preloader}></div>
    </div>
  );
};

export default Preloader;