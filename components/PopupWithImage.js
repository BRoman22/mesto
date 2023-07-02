import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  open(cardData) {
    const { name, link } = cardData;
    const title = this._popup.querySelector('.popup__title');
    const image = this._popup.querySelector('.popup__image');
    title.textContent = name;
    image.src = link;
    image.alt = name;
    super.open();
  }
}
