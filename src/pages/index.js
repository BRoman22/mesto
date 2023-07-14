import './index.css';

import UserInfo from '../components/UserInfo.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
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

//
function createCard(data) {
  const card = new Card(data, '#card', propsCard, {
    handleCardClick: () => popupImage.open(data),
    deleteRequest: (id) => {
      new Api({
        url: 'https://mesto.nomoreparties.co/v1/cohort-71/cards',
        headers: {
          authorization: myToken,
          'Content-Type': 'application/json',
        },
      }).deleteCard(id);
    },
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
    renderer: (data) => data.reverse().forEach((item) => renderCard(item)),
  },
  '.cards__list'
);

//добавляю карточки с сервера
const initialCards = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-71/cards',
  headers: {
    authorization: myToken,
    'Content-Type': 'application/json',
  },
});
initialCards
  .getCards()
  .then((data) => cardList.renderer(data))
  .catch((err) => console.log(`Ошибка ${err}`));

//hard delete
/*
initialCards.getCards().then((res) => {
  console.log(res[2]._id);
  console.log(res[2].name);
  return res[2]._id;
})
  .then((res) => {
    const jjj = new Api({
      url: 'https://mesto.nomoreparties.co/v1/cohort-71/cards',
      headers: {
        authorization: myToken,
        'Content-Type': 'application/json',
      },
    }).deleteCard(res);
  });
*/

//submit card
const popupCard = new PopupWithForm('.popup_card', (e) => {
  e.preventDefault();
  popupCard.renderLoading(true);

  const newCard = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-71/cards',
    headers: {
      authorization: myToken,
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: popupCard.getInputValues(),
  });
  newCard
    .postCard()
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
