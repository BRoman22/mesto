export default class Card {
  constructor(
    cardData,
    templateSelector,
    propsCard,
    userData,
    { handleCardClick, postLike, removeLike, handleDelete }
  ) {
    this._cardData = cardData;
    this._templateSelector = templateSelector;
    this._propsCard = propsCard;
    this._userId = userData._id;
    this._handleCardClick = handleCardClick;
    this._postLike = postLike;
    this._removeLike = removeLike;
    this._handleDelete = handleDelete;

    this._handleToggleLike = this._handleToggleLike.bind(this);
    this._handleDeleteCard = this._handleDeleteCard.bind(this);
    //
    this._element = this._getTemplate();
    this._elementTitle = this._element.querySelector(this._propsCard.cardTitle);
    this._elementImage = this._element.querySelector(this._propsCard.cardImage);
    this._elementLike = this._element.querySelector(this._propsCard.cardLike);
    this._elementLikeCounter = this._element.querySelector(this._propsCard.cardLikeCounter);
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
    this._elementTitle.textContent = this._cardData.name;
    this._elementImage.src = this._cardData.link;
    this._elementImage.alt = this._cardData.name;
    this._elementLikeCounter.textContent = this._cardData.likes.length;

    if (this._userId != this._cardData.owner._id) {
      this._elementDelete.remove();
      this._elementDelete = null;
    }
    if (this._cardData.likes.some((item) => item._id === this._userId)) {
      this._elementLike.classList.add('card__like_active');
    }

    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._elementLike.addEventListener('click', this._handleToggleLike);
    this._elementImage.addEventListener('click', this._handleCardClick);
    if (this._elementDelete) {
      this._elementDelete.addEventListener('click', this._handleDeleteCard);
    }
  }

  _handleToggleLike() {
    if (!this._elementLike.classList.contains('card__like_active')) {
      this._postLike().then((res) => {
        this._elementLikeCounter.textContent = res.likes.length;
        this._elementLike.classList.add('card__like_active');
      });
    } else {
      this._removeLike().then((res) => {
        this._elementLikeCounter.textContent = res.likes.length;
        this._elementLike.classList.remove('card__like_active');
      });
    }
  }

  _handleDeleteCard() {
    this._handleDelete(this._cardData._id, this._element);
  }
}
