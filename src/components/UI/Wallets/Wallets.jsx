import userData from '../../../store/userData';
import Wallet from '../Wallet/Wallet';
import classes from './Wallets.module.css'

function Wallets() {
  // Функции

  function createWalletsList() {
    let walletsList = [];
    const walletsObj = userData.values.wallets;

    for (let currentCurrencyObj of walletsObj) {
      walletsList.push(<Wallet key={currentCurrencyObj.name} obj={currentCurrencyObj} />)
    }

    return walletsList;
  }

  // Функции END


  return (
    <div className={classes.wrapper}>
      <strong className={classes.title}>Кошельки</strong>
      <ul className={classes.list}>
        {createWalletsList()}
      </ul>
    </div>
  );
};

export default Wallets;