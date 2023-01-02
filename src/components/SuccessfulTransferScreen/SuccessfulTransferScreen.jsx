import screenStatus from '../../store/screenStatus';
import classes from './SuccessfulTransferScreen.module.css'

function SuccessfulTransferScreen() {
  return (
    <div className={classes.wrapper}>
      <span className={classes.icon}>&#10004;</span>
      <p className={classes.text}>Всё супер! Перевод успешно произведён</p>
      <button
        onClick={() => screenStatus.setCurrentScreen("home")}
        className={[classes.btn, "secondary-hover-animation"].join(' ')}>Перейти на главный экран</button>
    </div>
  );
};

export default SuccessfulTransferScreen;