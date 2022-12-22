import classes from './Loader.module.css'
import loaderSvg from '../../../assets/loader.svg'

function Loader() {
  return (
      <img src={loaderSvg} alt="" className={classes.icon} />
  );
};

export default Loader;