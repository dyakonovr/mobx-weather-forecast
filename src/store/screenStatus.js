import { makeAutoObservable } from 'mobx';

export class ScreenStatus {
  values = {
    auth: false,
    loading: false,
    home: false,
    conversion: false,
  };

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentScreen(screenName) {
    for (let key in this.values) {
      this.values[key] = key === screenName ? true : false;
    }
  }
}

export default new ScreenStatus();