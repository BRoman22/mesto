import './index.css';

import UserInfo from '../components/UserInfo.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import FormValidator from '../components/FormValidator.js';
import { initialCards } from '../utils/cards.js';
import {
  formList,
  buttonOpenProfilePopup,
  buttonOpenCardPopup,
  propsForm,
  propsCard,
} from '../utils/constants.js';

const createCard = (data) => {
  const card = new Card(data, '#card', propsCard, () => {
    popupImage.open(data);
  }).generateCard();
  return card;
};

const renderCard = (data) => {
  const card = createCard(data);
  cardList.addItem(card);
};

const userInfo = new UserInfo({ name: '.profile__title', bio: '.profile__subtitle' });

const popupImage = new PopupWithImage('.popup_picture');
popupImage.setEventListeners();

//
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

//
const popupCard = new PopupWithForm('.popup_card', (e) => {
  e.preventDefault();
  renderCard(popupCard.getInputValues());
  popupCard.close();
});

popupCard.setEventListeners();

buttonOpenCardPopup.addEventListener('click', () => {
  popupCard.open();
  formValidators.card.resetValidation();
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

//отрисовка первоначальных карточек
const cardList = new Section(
  {
    items: initialCards,
    renderer: (items) => {
      items.reverse().forEach((item) => renderCard(item));
    },
  },
  '.cards__list'
);

cardList.renderer();
