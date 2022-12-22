import classes from './Phone.module.css';

const Phone = ({ children }) => {
  return (
    <div className={classes.phone}>
      <div className={classes.header}>
        <p className={classes.provider}>MegaFon</p>
        <div className={classes.unibrow}></div>
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