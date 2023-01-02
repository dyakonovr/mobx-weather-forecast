import { makeAutoObservable } from 'mobx';

export class AuthStore {
  values = {
    code: "",
    authIsDone: false,
    currentInput: "",
  };

  constructor() {
    makeAutoObservable(this);
  }

  setPinCode(code) {
    this.values = { ...this.values, code };
  }

  enterPinCode(symbol) {
    this.values = { ...this.values, currentInput: this.values.currentInput + symbol };
  }

  resetCurrentInput() {
    this.values = { ...this.values, currentInput: "" };
  }

  setAuthIsDone(authIsDone) {
    this.values = { ...this.values, authIsDone };
  }

  eraseLastNumber() {
    this.values = { ...this.values, currentInput: this.values.currentInput.substring(0, this.values.currentInput.length - 1) }
  }
}

export default new AuthStore();