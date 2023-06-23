import { openPopup } from './index.js';
import { picturePopup, picturePopupTitle, picturePopupImage } from './constants.js';

export default class Card {
  constructor(cardData, templateSelector, propsCard) {
    this._cardData = cardData;
    this._templateSelector = templateSelector;
    this._propsCard = propsCard;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(this._propsCard.card)
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._elementTitle = this._element.querySelector(this._propsCard.cardTitle);
    this._elementImage = this._element.querySelector(this._propsCard.cardImage);
    this._elementLike = this._element.querySelector(this._propsCard.cardLike);
    this._elementDelete = this._element.querySelector(this._propsCard.cardDelete);

    this._elementTitle.textContent = this._cardData.name;
    this._elementImage.src = this._cardData.link;
    this._elementImage.alt = this._cardData.name;

    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._elementLike.addEventListener('click', () => this._handleToggleLike());
    this._elementDelete.addEventListener('click', () => this._handleDeleteCard());
    this._elementImage.addEventListener('click', () => this._handleOpenPicturePopup());
  }

  _handleToggleLike() {
    this._elementLike.classList.toggle(this._propsCard.cardLikeActive);
  }

  _handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }

  _handleOpenPicturePopup() {
    picturePopupTitle.textContent = this._cardData.name;
    picturePopupImage.src = this._cardData.link;
    picturePopupImage.alt = this._cardData.name;
    openPopup(picturePopup);
  }
}
