import classes from './Popup.module.css'
import popupStore from '../../../store/popupStore';
import AnimationPage from '../../AnimatedPage/AnimatedPage';

function Popup() {
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