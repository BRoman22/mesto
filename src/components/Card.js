export default class Card {
  constructor(
    { name, link, _id },
    templateSelector,
    propsCard,
    myCard,
    { handleCardClick, handleDelete }
  ) {
    this._name = name;
    this._link = link;
    this._cardId = _id;
    this._templateSelector = templateSelector;
    this._propsCard = propsCard;
    this._myCard = myCard;
    this._handleCardClick = handleCardClick;
    this._handleDelete = handleDelete;

    this._handleToggleLike = this._handleToggleLike.bind(this);
    this._handleDeleteCard = this._handleDeleteCard.bind(this);
    //
    this._element = this._getTemplate();
    this._elementTitle = this._element.querySelector(this._propsCard.cardTitle);
    this._elementImage = this._element.querySelector(this._propsCard.cardImage);
    this._elementLike = this._element.querySelector(this._propsCard.cardLike);
    this._elementDelete = this._element.querySelector(this._propsCard.cardDelete);
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(this._propsCard.card)
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._elementTitle.textContent = this._name;
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;

    if (!this._myCard) {
      this._elementDelete.remove();
      this._elementDelete = null;
    }

    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._elementLike.addEventListener('click', this._handleToggleLike);
    this._elementImage.addEventListener('click', this._handleCardClick);
    this._elementDelete
      ? this._elementDelete.addEventListener('click', this._handleDeleteCard)
      : null;
  }

  _handleToggleLike() {
    this._elementLike.classList.toggle(this._propsCard.cardLikeActive);
  }

  _handleDeleteCard() {
    this._handleDelete(this._cardId, this._element);
    this._element = null;
  }
}
