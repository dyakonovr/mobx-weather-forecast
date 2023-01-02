import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Phone from './components/Phone/Phone';
import HomeScreen from './components/HomeScreen/HomeScreen';
import { useEffect } from 'react';
import userData from './store/userData';
import authStore from './store/authStore';
import screenStatus from './store/screenStatus';
import { observer } from 'mobx-react-lite';
import AuthScreen from './components/AuthScreen/AuthScreen';
import Preloader from './components/Preloader/Preloader';
import AnimatedPage from './components/AnimatedPage/AnimatedPage';
import ConversionScreen from './components/ConversionScreen/ConversionScreen';
import SuccessfulTransferScreen from './components/SuccessfulTransferScreen/SuccessfulTransferScreen';

const App = observer(() => {
  const url = 'https://6341ca7920f1f9d79979deb0.mockapi.io/mobx_bank_app';

  // Получение данных с сервера
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then(
          (result) => {
            userData.setData(result[0]);
            authStore.setPinCode(result[0].code);
            screenStatus.setCurrentScreen("auth"); // Передаю, какой компонент сейчас нужно показывать
          },
          (error) => {
            userData.setError(error);
          }
        );
    }, 3000);
  }, [url]);

  // Получение данных с сервера END

  let currentChildrens;

  if (!userData.values.dataIsLoaded) {
    currentChildrens = <Preloader />;
  } else {
    currentChildrens =
      <>
        {/* По дефолту - любой компонент внутри <AnimatedPage /> растягивается на весь экран */}
        {screenStatus.values.auth && <AnimatedPage><AuthScreen /></AnimatedPage>}
        {screenStatus.values.loading && <AnimatedPage><LoadingScreen /></AnimatedPage>}
        {screenStatus.values.home && <AnimatedPage notFullScreen={true}><HomeScreen /></AnimatedPage>}
        {screenStatus.values.conversion && <AnimatedPage notFullScreen={true}><ConversionScreen /></AnimatedPage>}
        {screenStatus.values.successfulTransfer && <AnimatedPage><SuccessfulTransferScreen /></AnimatedPage>}
      </>
  }


  return (
    <div className="App">
      <Phone>
        {currentChildrens}
      </Phone>
    </div>
  );
});

export default App;
