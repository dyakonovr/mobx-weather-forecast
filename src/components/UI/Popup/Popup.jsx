import classes from './Popup.module.css'
import { useEffect } from 'react';
import popupStore from '../../../store/popupStore';
import AnimationPage from '../../AnimatedPage/AnimatedPage';

function Popup() {
  // Обрабатываю нажатие на Enter
  useEffect(() => {
    function handleKeybordPress(e) {
      if (e.key === 'Enter') popupStore.togglePopup();
    }
    document.addEventListener('keyup', handleKeybordPress);

    // При окончании авторизации - "открутить" слушатель
    return function () {
      document.removeEventListener('keyup', handleKeybordPress);
    }
  });
  // Обрабатываю нажатие на Enter END

  return (
    <AnimationPage>
      <div className={classes.popup} onClick={() => popupStore.togglePopup()}>
        <strong className={classes.warning}>{popupStore.data.text}</strong>
        <button className={[classes.button, "main-hover-animation"].join(' ')}>OK</button>
      </div>
    </AnimationPage>
  );
};

export default Popup;