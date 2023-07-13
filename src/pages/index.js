import './index.css';

import UserInfo from '../components/UserInfo.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import FormValidator from '../components/FormValidator.js';
import Api from '../components/Api.js';
import {
  formList,
  buttonOpenProfilePopup,
  buttonOpenCardPopup,
  propsForm,
  propsCard,
} from '../utils/constants.js';

//
function createCard(data) {
  const card = new Card(data, '#card', propsCard, () => {
    popupImage.open(data);
  }).generateCard();
  return card;
}

function renderCard(data) {
  const card = createCard(data);
  cardList.addItem(card);
}

//создаю экземпляр контейнера для карточек
const cardList = new Section(
  {
    renderer: (data) => data.forEach((item) => renderCard(item)),
  },
  '.cards__list'
);

//добавляю карточки с сервера
const api = new Api();
api
  .getInitialCards()
  .then((data) => cardList.renderer(data))
  .catch((err) => console.log(`Ошибка ${err}`));

//submit card
const popupCard = new PopupWithForm('.popup_card', (e) => {
  e.preventDefault();
  popupCard.renderLoading(true);
  api
    .postNewCard(popupCard.getInputValues())
    .then((card) => renderCard(card))
    .catch((err) => console.log(err))
    .finally(() => popupCard.renderLoading(false));
  popupCard.close();
});

popupCard.setEventListeners();

buttonOpenCardPopup.addEventListener('click', () => {
  popupCard.open();
  formValidators.card.resetValidation();
});

//
const userInfo = new UserInfo({ name: '.profile__title', bio: '.profile__subtitle' });

const popupImage = new PopupWithImage('.popup_picture');
popupImage.setEventListeners();

//submit profile
const popupProfile = new PopupWithForm('.popup_profile', (e) => {
  e.preventDefault();
  userInfo.setUserInfo(popupProfile.getInputValues());
  popupProfile.close();
});

popupProfile.setEventListeners();

buttonOpenProfilePopup.addEventListener('click', () => {
  popupProfile.open();
  popupProfile.setInputValues(userInfo.getUserInfo());
  formValidators.profile.resetValidation();
});

//валидация форм
const formValidators = {};
const enableValidation = (config) => {
  formList.forEach((formElement) => {
    const validator = new FormValidator(formElement, config);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(propsForm);
