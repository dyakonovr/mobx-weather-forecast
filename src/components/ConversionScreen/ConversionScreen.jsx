import userData from '../../store/userData';
import CustomSelect from '../UI/CustomSelect/CustomSelect';
import classes from './ConversionScreen.module.css'
import { getLastNumbers } from '../../functions/getLastNumbers';
import CustomInput from '../UI/CustomInput/CustomInput';

function ConversionScreen() {
  // Функции

  function createOptionsValues(defaultValue, optionsValues) { // Создаю конечный массив со значениями ВСЕХ <option>
    return { defaultValue, optionsValues };
  }

  function createOptionsArray() { // Создаю массив со значениями <option>, кроме первого (дефолтного)
    const walletsData = userData.values.wallets; // Получаю данные о кошельках
    const array = [];

    for (let currentWallet of walletsData) {
      array.push(`Счёт *${getLastNumbers(currentWallet.cardNumber, 4)}: ${currentWallet.value} ${currentWallet.name.toUpperCase()}`);
    }

    return array;
  }

  // Функции END

  const optionsArray = createOptionsArray();

  return (
    <div className={classes.wrapper}>
      <CustomSelect values={createOptionsValues('Откуда переводим:', optionsArray)} />
      <span className={classes.icon}>&dArr;</span>
      <CustomSelect values={createOptionsValues('Куда переводим:', optionsArray)} />
      <CustomInput type={"text"} id={"value"} placeholder={"100.000"} labelText={"Сколько переводим?"} />
      <button className={[classes.btn, "main-hover-animation"].join(' ') }>Перевести</button>
    </div>
  );
};

export default ConversionScreen;