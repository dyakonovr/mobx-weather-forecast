import { makeAutoObservable } from 'mobx';

export class UserData {
  values = {
    name: "",
    wallets: {},
    avatarUrl: "",
    error: null,
    dataIsLoaded: false,
  };

  constructor() {
    makeAutoObservable(this);
  }

  setData(data) {
    const { name, wallets, code, avatar } = data;
    this.values = { ...this.values, name, wallets, code, avatarUrl: avatar, dataIsLoaded: true };
  }

  setError(error) {
    this.values = { ...this.values, error };
  }

  getBalance(card) {
    if (this.values.wallets[card]) return this.values.wallets[card].value;
    else return 0;
  }

  transferMoney(fromCard, toCard, inputValue) {
    const fromCardObj = this.values.wallets[fromCard];
    const toCardObj = this.values.wallets[toCard];

    const fromCurrency = fromCardObj.name.toUpperCase();
    const toCurrency = toCardObj.name.toUpperCase();

    if (fromCurrency === toCurrency) {
      fromCardObj.value -= inputValue;
      toCardObj.value += inputValue;
    }

    else {
      const myHeaders = new Headers();
      myHeaders.append("apikey", "6WVPaWoUdZSo0E4adq0GawGAAEyUxM8j"); // google

      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
      };

      fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${toCurrency}&from=${fromCurrency}&amount=${inputValue}`, requestOptions)
        .then(response => response.json())
        .then(responseObj => {
          fromCardObj.value -= inputValue;
          toCardObj.value += responseObj.result;
        })
        .catch(error => console.log('Error: ', error));
    }

  }
}

export default new UserData();