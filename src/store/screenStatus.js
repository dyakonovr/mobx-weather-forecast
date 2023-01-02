import { makeAutoObservable } from 'mobx';
import SuccessfulTransferScreen from './../components/SuccessfulTransferScreen/SuccessfulTransferScreen';

export class ScreenStatus {
  values = {
    auth: false,
    loading: false,
    home: false,
    conversion: false,
    successfulTransfer: false,
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