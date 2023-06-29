import Popup from './Popup.js';
import { picturePopupTitle, picturePopupImage } from './constants.js';

export default class PopupWithImage extends Popup {
  open(cardData) {
    this._cardData = cardData;
    picturePopupTitle.textContent = this._cardData.name;
    picturePopupImage.src = this._cardData.link;
    picturePopupImage.alt = this._cardData.name;
    super.open();
  }
}
