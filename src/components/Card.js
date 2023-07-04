export default class Card {
  constructor(
    { name, link },
    templateSelector,
    { card, cardTitle, cardImage, cardLike, cardLikeActive, cardDelete },
    handleCardClick
  ) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;

    this._card = card;
    this._cardTitle = cardTitle;
    this._cardImage = cardImage;
    this._cardLike = cardLike;
    this._cardLikeActive = cardLikeActive;
    this._cardDelete = cardDelete;

    this._handleToggleLike = this._handleToggleLike.bind(this);
    this._handleDeleteCard = this._handleDeleteCard.bind(this);
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(this._card)
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._elementTitle = this._element.querySelector(this._cardTitle);
    this._elementImage = this._element.querySelector(this._cardImage);
    this._elementLike = this._element.querySelector(this._cardLike);
    this._elementDelete = this._element.querySelector(this._cardDelete);

    this._elementTitle.textContent = this._name;
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;

    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._elementLike.addEventListener('click', this._handleToggleLike);
    this._elementDelete.addEventListener('click', this._handleDeleteCard);
    this._elementImage.addEventListener('click', this._handleCardClick);
  }

  _handleToggleLike() {
    this._elementLike.classList.toggle(this._cardLikeActive);
  }

  _handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }
}
