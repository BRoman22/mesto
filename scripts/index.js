//попапы
const openPopup = (element) => {
  element.classList.add('popup_opened');
  element.addEventListener('mousedown', (e) => closePopupFromCrossButtonAndOverlay(e, element));
  document.addEventListener('keydown', (e) => {
    console.log(e);
    closePopupFromEsc(e, element);
  });
};

const closePopup = (element) => {
  element.classList.remove('popup_opened');
  element.removeEventListener('mousedown', (e) => closePopupFromCrossButtonAndOverlay(e, element));
  document.removeEventListener('keydown', (e) => closePopupFromEsc(e, element));
};

const closePopupFromCrossButtonAndOverlay = (e, element) => {
  e.target.classList.contains('popup') ? closePopup(element) : null;
  e.target.classList.contains('popup__close') ? closePopup(element) : null;
};

const closePopupFromEsc = (e, element) => {
  e.key === 'Escape' ? closePopup(element) : null;
};

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

const changeProfile = (e) => {
  e.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileBio.textContent = inputProfileBio.value;
  closePopup(profilePopup);
};

const handleAddCard = (e) => {
  e.preventDefault();
  const cardData = { name: inputCardName.value, link: inputCardLink.value };
  renderCard(cardData, cardsList);
  formCard.reset();
  closePopup(cardPopup);
};

formProfile.addEventListener('submit', changeProfile);
formCard.addEventListener('submit', handleAddCard);

//карточки
const renderCard = (cardData, cardsList) => {
  const card = createCard(cardData);
  cardsList.prepend(card);
};

const createCard = (cardData) => {
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  const cardTitle = card.querySelector('.card__title');
  const cardImage = card.querySelector('.card__image');
  const cardLike = card.querySelector('.card__like');
  const cardDelete = card.querySelector('.card__delete');

  cardTitle.textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;

  cardLike.addEventListener('click', () => handleToggleLike(cardLike));
  cardDelete.addEventListener('click', () => handleDeleteCard(card));
  cardImage.addEventListener('click', () => handleOpenPicturePopup(cardData));

  return card;
};

const handleToggleLike = (item) => item.classList.toggle('card__like_active');

const handleDeleteCard = (item) => item.remove();

const handleOpenPicturePopup = (cardData) => {
  picturePopupTitle.textContent = cardData.name;
  picturePopupImage.src = cardData.link;
  picturePopupImage.alt = cardData.name;
  openPopup(picturePopup);
};

initialCards.reverse().forEach((cardData) => renderCard(cardData, cardsList));
