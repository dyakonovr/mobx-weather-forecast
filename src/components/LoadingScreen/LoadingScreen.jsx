import classes from './LoadingScreen.module.css';
import Loader from '../UI/Loader/Loader';
import userData from '../../store/userData';
import { useEffect } from 'react';
import screenStatus from '../../store/screenStatus';

const LoadingScreen = () => {
  useEffect(() => { 
    setTimeout(() => {
      screenStatus.setCurrentScreen("home");
    }, 3000 )
  });


  return (
    <div className={[classes.wrapper, "full-screen-block"].join(' ')}>
      <Loader />
      <h2 className={classes.greetings}>Здравствуйте, {userData.values.name}!</h2>
    </div>
  );
};

export default LoadingScreen;