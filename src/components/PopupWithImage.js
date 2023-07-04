import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  open({ name, link }) {
    this._name = name;
    this._link = link;
    const title = this._popup.querySelector('.popup__title');
    const image = this._popup.querySelector('.popup__image');
    title.textContent = this._name;
    image.src = this._link;
    image.alt = this._name;
    super.open();
  }
}
