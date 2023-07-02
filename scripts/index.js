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
