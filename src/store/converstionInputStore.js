import { makeAutoObservable } from 'mobx';
import { formatNumberWithSpaces } from '../functions/formatNumberWithSpaces';

export class ConversionInputStore {
  value = '';

  constructor() {
    makeAutoObservable(this);
  }

  handleInputType(currValue) {
    if (currValue !== null && Number(currValue) >= 0) { // Если мы нажали на цифру
      const newValue = this.value + currValue;
      this.value = formatNumberWithSpaces(newValue.replace(/ /g, ''));
    }

    else if (currValue === null) { // Если мы нажали Backspace
      this.value = formatNumberWithSpaces(this.value.slice(0, -1)); // Удаляю последний символ
    }
  }
}

export default new ConversionInputStore();