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
  buttonAvatarEdit,
  propsForm,
  propsCard,
} from '../utils/constants.js';

//функция создания карточки
function createCard(cardData, userData) {
  const card = new Card(cardData, '#card', propsCard, userData, {
    handleCardClick: () => popupImage.open(cardData),
    postLike: () => api.postLike(cardData._id),
    removeLike: () => api.removeLike(cardData._id),
    handleDelete: confirmationPopup.open.bind(confirmationPopup),
  }).generateCard();
  return card;
}

function loadImage(item, loadCallback, errorCallback) {
  const img = item.querySelector('.card__image');
  img.onload = loadCallback;
  img.onerror = errorCallback;
}

function errorCallback() {
  alert('Что-то не так, проверьте ссылку');
}

//экземпляр контейнера для карточек
const cardList = new Section({
  containerSelector: '.cards__list',
  render: (data, userData) => {
    const card = createCard(data, userData);
    loadImage(card, cardList.addItem(card), errorCallback);
  },
});

//экземпляр попапа аватара
const popupAvatar = new PopupWithForm({
  popupSelector: '.popup_avatar',
  handleFormSubmit: (e) => {
    const avatar = popupAvatar.getInputValues();
    e.preventDefault();
    api
      .setAvatar(avatar)
      .then(userInfo.setUserAvatar(avatar))
      .catch((err) => console.log(err));
    popupAvatar.close();
  },
});
popupAvatar.setEventListeners();
buttonAvatarEdit.addEventListener('click', () => {
  popupAvatar.open();
  formValidators.avatar.resetValidation();
});

//экземпляр попапа уделения карточки
const confirmationPopup = new PopupWithConfirmation({
  popupSelector: '.popup_confirmation',
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

//сабмит карточки
const popupCard = new PopupWithForm({
  popupSelector: '.popup_card',
  handleFormSubmit: (e) => {
    e.preventDefault();
    popupCard.renderLoading(true);
    api
      .postCard(popupCard.getInputValues())
      .then((cardData) => cardList.rendererCard(cardData))
      .catch((err) => console.log(err))
      .finally(() => popupCard.renderLoading(false));

    popupCard.close();
  },
});
popupCard.setEventListeners();
buttonOpenCardPopup.addEventListener('click', () => {
  popupCard.open();
  formValidators.card.resetValidation();
});

//сабмит профиля
const popupProfile = new PopupWithForm({
  popupSelector: '.popup_profile',
  handleFormSubmit: (e) => {
    const userData = popupProfile.getInputValues();
    e.preventDefault();
    popupProfile.renderLoading(true);
    api
      .setUser(userData)
      .then(userInfo.setUserInfo(userData))
      .catch((err) => console.log(err))
      .finally(() => popupProfile.renderLoading(false));

    popupProfile.close();
  },
});
popupProfile.setEventListeners();
buttonOpenProfilePopup.addEventListener('click', () => {
  popupProfile.open();
  popupProfile.setInputValues(userInfo.getUserInfo());
  formValidators.profile.resetValidation();
});

//экземпляр профиля юзера
const userInfo = new UserInfo({
  name: '.profile__title',
  about: '.profile__subtitle',
  avatar: '.profile__avatar',
});

//экземпляр попапа с картинкой
const popupImage = new PopupWithImage('.popup_picture');
popupImage.setEventListeners();

//валидация форм
const formValidators = {};
const enableValidation = (config) => {
  formList.forEach((formElement) => {
    const validator = new FormValidator(formElement, config);
    const formName = formElement.getAttribute('name');
    if (formName != 'confirmation') {
      formValidators[formName] = validator;
    }
    validator.enableValidation();
  });
};
enableValidation(propsForm);

//загрузка профиля и карточек
const api = new Api('https://nomoreparties.co', myToken);
const userProfile = api.getUserInfo();
const initialCards = api.getInitialCards();

Promise.all([userProfile, initialCards])
  .then(([userProfile, initialCards]) => {
    userInfo.setUserInfo(userProfile);
    cardList.rendererArr(initialCards, userProfile);
  })
  .catch((err) => console.log(err));
