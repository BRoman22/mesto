import './index.css';

import UserInfo from '../components/UserInfo.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import FormValidator from '../components/FormValidator.js';
import { initialCards } from '../utils/cards.js';
import {
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
  validateFormProfile.resetValidation();
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
  validateFormCard.resetValidation();
});

//валидация форм
const validateFormProfile = new FormValidator('.popup__form_profile', propsForm);
validateFormProfile.enableValidation();
const validateFormCard = new FormValidator('.popup__form_card', propsForm);
validateFormCard.enableValidation();

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
