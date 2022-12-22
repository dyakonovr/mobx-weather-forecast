import classes from './Phone.module.css';

const Phone = ({ children }) => {
  // Функции
  function getTime() {
    const time = new Date();
    return `${time.getHours()}:${time.getMinutes()}`
  }
  // Функции END

  return (
    <div className={classes.phone}>
      <div className={classes.header}>
        <p className={classes.provider}>MegaFon</p>
        <div className={classes.unibrow}></div>
        <span className={classes.time}>{getTime()}</span>
        <div className={classes.battery}>
          <img src="./src/assets/battery.svg" alt="Иконка зарядки" />
        </div>
      </div>
      <div className={classes.application}>
        <div className={classes.wrapper}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Phone;