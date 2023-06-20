import Card from './Card.js';
import FormValidator from './FormValidator.js';

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

buttonOpenProfilePopup.addEventListener('click', () => {
  fillProfilePopupInputs();
  openPopup(profilePopup);
  const validateInputsProfileForm = new FormValidator(propsForm, formProfile);
  validateInputsProfileForm._toggleButtonState(inputsProfileForm, buttonProfileForm);
});

buttonOpenCardPopup.addEventListener('click', () => {
  openPopup(cardPopup);
  const validateInputsCardForm = new FormValidator(propsForm, formCard);
  validateInputsCardForm._toggleButtonState(inputsCardForm, buttonCardForm);
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

//отрисовка первоначальных карточек
initialCards.reverse().forEach((cardData) => renderCard(cardData, '#card'));

//валидация форм
const validateFormProfile = new FormValidator(propsForm, formProfile);
validateFormProfile.enableValidation();
const validateFormCard = new FormValidator(propsForm, formCard);
validateFormCard.enableValidation();
