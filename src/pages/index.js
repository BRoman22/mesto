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
  propsUser,
} from '../utils/constants.js';

//экземпляр профиля юзера
const userInfo = new UserInfo(propsUser);
//экземпляр попапа с картинкой
const popupImage = new PopupWithImage('.popup_picture');
popupImage.setEventListeners();
let cardList;

//экземпляр попапа аватара
const popupAvatar = new PopupWithForm({
  popupSelector: '.popup_avatar',
  handleFormSubmit: (e) => {
    e.preventDefault();
    popupAvatar.renderLoading(true);
    api
      .request({
        data: popupAvatar.getInputValues(),
        method: 'PATCH',
        path: '/users/me/avatar',
      })
      .then((res) => {
        popupAvatar.close();
        userInfo.setUserAvatar(res);
      })
      .then(() => popupAvatar.renderLoading(false))
      .catch(api.catch);
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
      .request({ method: 'DELETE', path: `/cards/${id}` })
      .then(() => {
        confirmationPopup.close();
        cardList.deleteItem(element);
      })
      .catch(api.catch);
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
      .request({ data: popupCard.getInputValues(), method: 'POST', path: '/cards' })
      .then((cardData) => {
        popupCard.close();
        cardList.renderer(cardData);
      })
      .then(() => popupCard.renderLoading(false))
      .catch(api.catch);
  },
  gg: (cardData) => {
    popupCard.close();
    cardList.renderer(cardData);
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
    e.preventDefault();
    popupProfile.renderLoading(true);
    api
      .request({ data: popupProfile.getInputValues(), method: 'PATCH', path: '/users/me' })
      .then((userData) => {
        popupProfile.close();
        userInfo.setUserInfo(userData);
      })
      .then(() => popupProfile.renderLoading(false))
      .catch(api.catch);
  },
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
    if (formName != 'confirmation') {
      formValidators[formName] = validator;
    }
    validator.enableValidation();
  });
};
enableValidation(propsForm);

//функция создания карточки
function createCard(cardData, userData) {
  const card = new Card(cardData, '#card', propsCard, userData, {
    handleCardClick: () => popupImage.open(cardData),
    postLike: () => api.request({ method: 'PUT', path: `/cards/${cardData._id}/likes` }),
    removeLike: () => api.request({ method: 'DELETE', path: `/cards/${cardData._id}/likes` }),
    //в момент открытия попапа получаем данные в класс для сабмита удаления карточки
    handleDelete: confirmationPopup.open.bind(confirmationPopup),
  }).generateCard();
  return card;
}

//загрузка профиля и карточек
const api = new Api('https://nomoreparties.co', myToken);
const userProfile = api.request({ path: '/users/me' });
const initialCards = api.request({ path: '/cards' });

Promise.all([userProfile, initialCards])
  .then(([userProfile, initialCards]) => {
    //экземпляр контейнера для карточек
    cardList = new Section({
      containerSelector: '.cards__list',
      render: (cardData, userData) => {
        const card = createCard(cardData, userData);
        cardList.addItem(card);
      },
      userData: userProfile,
    });

    userInfo.setUserInfo(userProfile);
    cardList.renderer(initialCards);
  })
  .catch(api.catch);
