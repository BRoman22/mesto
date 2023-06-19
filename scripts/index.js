//попапы
const openPopup = (element) => {
  element.classList.add('popup_opened');
  document.addEventListener('keydown', handleClosePopupFromEsc);
};

const closePopup = (element) => {
  element.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleClosePopupFromEsc);
};

const handleClosePopupFromCrossButtonAndOverlay = (e) => {
  e.target === e.currentTarget ? closePopup(e.currentTarget) : null;
  e.target.classList.contains('popup__close') ? closePopup(e.currentTarget) : null;
};

const handleClosePopupFromEsc = (e) => {
  e.key === 'Escape' ? closePopup(document.querySelector('.popup_opened')) : null;
};

popups.forEach((item) => item.addEventListener('click', handleClosePopupFromCrossButtonAndOverlay));

const fillProfilePopupInputs = () => {
  inputProfileName.value = profileName.textContent;
  inputProfileBio.value = profileBio.textContent;
};

buttonOpenProfilePopup.addEventListener('click', () => {
  fillProfilePopupInputs();
  openPopup(profilePopup);
  toggleButtonState(inputsProfilePopup, buttonProfilePopup, propsForm);
});

buttonOpenCardPopup.addEventListener('click', () => {
  openPopup(cardPopup);
  toggleButtonState(inputsCardPopup, buttonCardPopup, propsForm);
});

const handleChangeProfile = (e) => {
  e.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileBio.textContent = inputProfileBio.value;
  closePopup(profilePopup);
};

const renderCard = (cardData, templateSelector) => {
  const card = new Card(cardData, templateSelector);
  const cardElement = card.generateCard();
  cardsList.prepend(cardElement);
};

const handleAddCard = (e) => {
  e.preventDefault();
  const cardData = { name: inputCardName.value, link: inputCardLink.value };
  renderCard(cardData, '#card');
  formCard.reset();
  closePopup(cardPopup);
};

formProfile.addEventListener('submit', handleChangeProfile);
formCard.addEventListener('submit', handleAddCard);

//карточки
class Card {
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

initialCards.reverse().forEach((cardData) => renderCard(cardData, '#card'));
