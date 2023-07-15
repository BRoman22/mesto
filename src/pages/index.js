import './index.css';

import UserInfo from '../components/UserInfo.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation';
import FormValidator from '../components/FormValidator.js';
import Api from '../components/Api.js';
import { myToken } from '../utils/myToken.js';
import {
  formList,
  buttonOpenProfilePopup,
  buttonOpenCardPopup,
  propsForm,
  propsCard,
} from '../utils/constants.js';

const api = new Api('https://nomoreparties.co', myToken);
api
  .getUserInfo()
  .then((res) => userInfo.setUserInfo(res))
  .catch((err) => console.log(err));

const confirmationPopup = new PopupWithConfirmation('.popup_confirmation', {
  handleFormSubmit: (id, element) => {
    api
      .removeCard(id)
      .then(() => {
        cardList.deleteItem(element);
        confirmationPopup.close();
      })
      .catch((err) => console.log(err));
  },
});
confirmationPopup.setEventListeners();

//
function createCard(data) {
  const card = new Card(data, '#card', propsCard, {
    handleCardClick: () => popupImage.open(data),
    //api.like,
    //api.delCard,
    handleDelete: confirmationPopup.open.bind(confirmationPopup),
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
    renderer: (item) => renderCard(item),
  },
  '.cards__list'
);

//добавляю карточки с сервера

api
  .getInitialCards()
  .then((data) => cardList.renderer(data))
  .catch((err) => console.log(err));

//submit card
const popupCard = new PopupWithForm('.popup_card', (e) => {
  e.preventDefault();
  popupCard.renderLoading(true);

  api
    .addCard(popupCard.getInputValues())
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

//загружаю юзеринфо
const userInfo = new UserInfo({
  name: '.profile__title',
  about: '.profile__subtitle',
  avatar: '.profile__avatar',
});

const popupImage = new PopupWithImage('.popup_picture');
popupImage.setEventListeners();

//submit profile
const popupProfile = new PopupWithForm('.popup_profile', (e) => {
  e.preventDefault();

  popupProfile.renderLoading(true);
  api
    .setUserInfo(popupProfile.getInputValues())
    .catch((err) => console.log(err))
    .finally(() => popupProfile.renderLoading(false));

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
