import classes from './Wallet.module.css'
import { getLastNumbers } from '../../../functions/getLastNumbers';

function Wallet({ cardNumber, obj }) {
  return (
    <li className={classes.item}>
      <p className={classes.text}> <strong className={classes.value}>{obj.value}</strong> <span className={classes.currency}>{obj.name}</span></p>
      <span className={classes.card}>*{getLastNumbers(cardNumber, 4)} VISA</span>
    </li>
  );
};

export default Wallet;