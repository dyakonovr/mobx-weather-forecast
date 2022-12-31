import screenStatus from '../../../store/screenStatus';
import classes from './ConversionBtn.module.css'

function ConversionBtn() {
  return (
    <button className={classes.btn} type="button" onClick={() => screenStatus.setCurrentScreen("conversion")}>
      Переводы между кошельками
    </button>
  );
};

export default ConversionBtn;