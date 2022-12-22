import classes from './AuthScreen.module.css'
import authStore from '../../store/authStore';
import { observer } from 'mobx-react-lite';
import AnimationPage from '../AnimatedPage/AnimatedPage';
import screenStatus from '../../store/screenStatus';
import { useEffect } from 'react';


const AuthScreen = observer(() => {

  // Обрабатываю нажатие на клавиатуру
  useEffect(() => {
    function handleKeybordPress(e) {
      if (Number(e.key)) handleNumberClick(e.key); // Если мы нажали на цифру
      if (e.key === "Backspace") authStore.eraseLastNumber();
    }
    document.addEventListener('keyup', handleKeybordPress);

    // При окончании авторизации - "открутить" слушатель
    return function () {
      document.removeEventListener('keyup', handleKeybordPress);
    }
  });
  // Обрабатываю нажатие на клавиатуру END


  // Функции

  function handleNumberClick(value) {
    authStore.enterPinCode(value); // Передаю число, к-ое нажал пользователь в state

    const currentInputCode = authStore.values.currentInput;
    const userCode = authStore.values.code;

    if (currentInputCode.length === 4) { // Если в текущем вводе 4 цифры
      if (currentInputCode === userCode) {
        authStore.setAuthIsDone(true); // Устанавливаю флаг, что авторизация пройдена успешно
        screenStatus.setCurrentScreen("loading");
      }
      else {
        authStore.resetCurrentInput(); // Сбрасываю текущий ввод
        authStore.setPopupIsOpen(true);
      }
    }
  }

  function createNumberList() {
    let numbersList = [];

    for (let i = 1; i < 11; i++) {
      numbersList.push(
        <li
          className={classes.number}
          onClick={(e) => { handleNumberClick(e.target.dataset.value) }}
          data-value={i <= 9 ? i : 0} key={i}>
          {i <= 9 ? i : 0}
        </li>
      )
    }

    // Добавляю кнопку "Стереть"
    numbersList.push(
      <li
        className={classes.number}
        onClick={() => { authStore.eraseLastNumber() }}
        key={11}
      >
        &lArr;
      </li>
    );

    return numbersList;
  }

  // Функции END

  return (
    <div className={['full-screen-block', classes.auth_screen].join(' ')}>
      <div className={classes.wrapper}>
        <strong className={classes.title}>Введите PIN-код</strong>
        <ul className={classes.dots}>
          {/* Если в текущем вводе введено n-цифр, то закрашиваем точку */}
          <li className={authStore.values.currentInput.length >= 1 ? [classes.dot, classes.dot_active].join(' ') : classes.dot}></li>
          <li className={authStore.values.currentInput.length >= 2 ? [classes.dot, classes.dot_active].join(' ') : classes.dot}></li>
          <li className={authStore.values.currentInput.length >= 3 ? [classes.dot, classes.dot_active].join(' ') : classes.dot}></li>
          <li className={authStore.values.currentInput.length >= 4 ? [classes.dot, classes.dot_active].join(' ') : classes.dot}></li>
        </ul>
        <ul className={classes.numbers}>
          {createNumberList()}
        </ul>
      </div>

      {authStore.values.popupIsOpen &&
        <AnimationPage>
          <div className={classes.popup}>
            <strong className={classes.warning}>Неверный PIN-код</strong>
            <button className={classes.button} onClick={() => authStore.setPopupIsOpen(false)}>OK</button>
          </div>
        </AnimationPage>}
    </div>
  );
})

export default AuthScreen;