import Card from './Card.js';
import FormValidator from './FormValidator.js';

//валидация форм
const validateFormProfile = new FormValidator(propsForm, formProfile);
validateFormProfile.enableValidation();
const validateFormCard = new FormValidator(propsForm, formCard);
validateFormCard.enableValidation();

//попапы
export const openPopup = (element) => {
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

const resetInputs = () => {
  inputCardName.value = '';
  inputCardLink.value = '';
};

buttonOpenProfilePopup.addEventListener('click', () => {
  fillProfilePopupInputs();
  openPopup(profilePopup);
  validateFormProfile.resetValidation();
});

buttonOpenCardPopup.addEventListener('click', () => {
  resetInputs();
  openPopup(cardPopup);
  validateFormCard.resetValidation();
});

const handleChangeProfile = (e) => {
  e.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileBio.textContent = inputProfileBio.value;
  closePopup(profilePopup);
};

const createCard = (cardData, templateSelector) => {
  const cardElement = new Card(cardData, templateSelector).generateCard();
  return cardElement;
};

const renderCard = (cardData, templateSelector) => {
  const card = createCard(cardData, templateSelector);
  cardsList.prepend(card);
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

//отрисовка первоначальных карточек
initialCards.reverse().forEach((cardData) => renderCard(cardData, '#card'));
