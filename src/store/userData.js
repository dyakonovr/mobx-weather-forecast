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
}

export default new UserData();