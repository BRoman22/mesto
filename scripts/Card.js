import { openPopup } from './index.js';

export default class Card {
  constructor(cardData, templateSelector) {
    this._title = cardData.name;
    this._link = cardData.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector('.card')
      .cloneNode(true);
    return cardElement;
  }

  _handleToggleLike(item) {
    item.classList.toggle('card__like_active');
  }

  _handleDeleteCard(item) {
    item.remove();
  }

  _handleOpenPicturePopup() {
    picturePopupTitle.textContent = this._title;
    picturePopupImage.src = this._link;
    picturePopupImage.alt = this._title;
    openPopup(picturePopup);
  }

  _setEventListeners() {
    this._elementLike.addEventListener('click', () => this._handleToggleLike(this._elementLike));
    this._elementDelete.addEventListener('click', () => this._handleDeleteCard(this._element));
    this._elementImage.addEventListener('click', () => this._handleOpenPicturePopup());
  }

  generateCard() {
    this._element = this._getTemplate();
    this._elementTitle = this._element.querySelector('.card__title');
    this._elementImage = this._element.querySelector('.card__image');
    this._elementLike = this._element.querySelector('.card__like');
    this._elementDelete = this._element.querySelector('.card__delete');

    this._elementTitle.textContent = this._title;
    this._elementImage.src = this._link;
    this._elementImage.alt = this._title;

    this._setEventListeners();
    return this._element;
  }
}
