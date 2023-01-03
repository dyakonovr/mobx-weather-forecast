import { makeAutoObservable } from 'mobx';

export class PopupStore {
  data = {
    text: "Неверный PIN-код",
    isOpen: false
  }

  constructor() {
    makeAutoObservable(this);
  }

  setNewMessage(msg) { this.data.text = msg; }

  togglePopup() {
    this.data.isOpen = !this.data.isOpen;
  }
}

export default new PopupStore();