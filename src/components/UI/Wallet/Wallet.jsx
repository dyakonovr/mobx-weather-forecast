import classes from './Wallet.module.css'

function Wallet({ obj }) {
  // Функции

  function getLastNumbers(value, quantity) {
    return value.substring(value.length - quantity, value.length);
  }

  // Функции END

  return (
    <li key={obj.name} className={classes.item}>
      <p className={classes.text}> <strong className={classes.value}>{obj.value}</strong> <span className={classes.currency}>{obj.name}</span></p>
      <span className={classes.card}>*{getLastNumbers(obj.cardNumber, 4)} VISA</span>
    </li>
  );
};

export default Wallet;