import './index.css';

import UserInfo from '../components/UserInfo.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import FormValidator from '../components/FormValidator.js';
import { initialCards } from '../utils/cards.js';
import {
  picturePopup,
  profilePopup,
  cardPopup,
  buttonOpenProfilePopup,
  buttonOpenCardPopup,
  formProfile,
  formCard,
  cardsList,
  propsForm,
  propsCard,
} from '../utils/constants.js';

const userInfo = new UserInfo({ name: '.profile__title', bio: '.profile__subtitle' });

buttonOpenProfilePopup.addEventListener('click', () => {
  const popup = new PopupWithForm(profilePopup, (e) => {
    e.preventDefault();
    userInfo.setUserInfo(popupForm._getInputValues());
    popup.close();
  });
  popup.setInputValues(userInfo.getUserInfo());
  popup.open();
  popup.setEventListeners();
  validateFormProfile.resetValidation();
});

buttonOpenCardPopup.addEventListener('click', () => {
  const popup = new PopupWithForm(cardPopup, (e) => {
    e.preventDefault();
    const newCardList = new Section(
      {
        items: popup._getInputValues(),
        renderer: (cardData) => {
          const newCard = new Card(cardData, '#card', propsCard, () => {
            const gg = new PopupWithImage(picturePopup).open(cardData);
            gg.setEventListeners();
          }).generateCard();
          newCardList.addItem(newCard);
        },
      },
      cardsList
    );
    newCardList.renderItems();
    popup.close();
  });
  popup.open();
  popup.setEventListeners();
  validateFormCard.resetValidation();
});

//валидация форм
const validateFormProfile = new FormValidator(propsForm, formProfile);
validateFormProfile.enableValidation();
const validateFormCard = new FormValidator(propsForm, formCard);
validateFormCard.enableValidation();

//отрисовка первоначальных карточек
const initialCardList = new Section(
  {
    items: initialCards,
    renderer: (items) => {
      items.reverse().forEach((item) => {
        let initialCards = new Card(item, '#card', propsCard, () => {
          const imagePopup = new PopupWithImage(picturePopup);
          imagePopup.open(item);
        }).generateCard();
        initialCardList.addItem(initialCards);
      });
    },
  },
  cardsList
);
initialCardList.renderItems();
