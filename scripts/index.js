import UserInfo from './UserInfo.js';
import Card from './Card.js';
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import FormValidator from './FormValidator.js';
import { initialCards } from './cards.js';
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
} from './constants.js';

const userInfo = new UserInfo({ name: '.profile__title', bio: '.profile__subtitle' });

buttonOpenProfilePopup.addEventListener('click', () => {
  const popupForm = new PopupWithForm(profilePopup, (e) => {
    e.preventDefault();
    userInfo.setUserInfo(popupForm._getInputValues());
    popupForm.close();
  });
  popupForm.setInputValues(userInfo.getUserInfo());
  popupForm.open();
  validateFormProfile.resetValidation();
});

buttonOpenCardPopup.addEventListener('click', () => {
  const popupForm = new PopupWithForm(cardPopup, (e) => {
    e.preventDefault();
    const newCardList = new Section(
      {
        items: popupForm._getInputValues(),
        renderer: (cardData) => {
          const newCard = new Card(cardData, '#card', propsCard, () => {
            new PopupWithImage(picturePopup).open(cardData);
          }).generateCard();
          newCardList.addItem(newCard);
        },
      },
      cardsList
    );
    newCardList.renderItems();
    popupForm.close();
  });
  popupForm.open();
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
