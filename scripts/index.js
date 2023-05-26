const profilePopup = document.querySelector('.popup_profile');
const cardPopup = document.querySelector('.popup_card');
const picturePopup = document.querySelector('.popup_picture');
const picturePopupTitle = picturePopup.querySelector('.popup__title_picture');
const picturePopupImage = picturePopup.querySelector('.popup__image');
const buttonOpenProfilePopup = document.querySelector('.profile__button-edit');
const buttonOpenCardPopup = document.querySelector('.profile__button-add');
const buttonClosePopups = document.querySelectorAll('.popup__close');
const formProfile = document.querySelector('.popup__form_profile');
const formCard = document.querySelector('.popup__form_card');
const cardTemplate = document.querySelector('#card').content;
const inputProfileName = formProfile.querySelector('.popup__input_name');
const inputProfileBio = formProfile.querySelector('.popup__input_bio');
const inputCardName = formCard.querySelector('.popup__input_name');
const inputCardLink = formCard.querySelector('.popup__input_link');
const profileName = document.querySelector('.profile__title');
const profileBio = document.querySelector('.profile__subtitle');
const cardsList = document.querySelector('.cards__list');

//попапы
const openPopup = (element) => {
  element.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupsFromEsc);
};

const closePopup = (element) => {
  element.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupsFromEsc);
};

const addInputsData = () => {
  const inputList = [inputProfileName, inputProfileBio];
  const buttonElement = formProfile.querySelector('.popup__button');

  inputProfileName.value = profileName.textContent;
  inputProfileBio.value = profileBio.textContent;
  toggleButtonState(inputList, buttonElement, propsForm);
};

buttonOpenProfilePopup.addEventListener('click', () => {
  openPopup(profilePopup);
  addInputsData();
});

buttonOpenCardPopup.addEventListener('click', () => openPopup(cardPopup));

document.addEventListener('mousedown', (e) => {
  e.target.classList.contains('popup') ? closePopup(e.target) : null;
  e.target.classList.contains('popup__close') ? closePopup(e.target.closest('.popup')) : null;
});

const closePopupsFromEsc = (e) => {
  const popups = [profilePopup, cardPopup, picturePopup];
  e.key === 'Escape' ? popups.forEach((item) => closePopup(item)) : null;
};

const changeProfile = (e) => {
  e.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileBio.textContent = inputProfileBio.value;
  closePopup(profilePopup);
};

const addCard = (e) => {
  e.preventDefault();
  const cardData = { name: inputCardName.value, link: inputCardLink.value };
  renderCard(cardData);
  formCard.reset();
  closePopup(cardPopup);
};

formProfile.addEventListener('submit', changeProfile);
formCard.addEventListener('submit', addCard);

//карточки
const renderCard = (cardData) => {
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

initialCards.reverse().forEach((cardData) => renderCard(cardData));
