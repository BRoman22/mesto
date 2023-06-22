//поля профиля
const profileName = document.querySelector('.profile__title');
const profileBio = document.querySelector('.profile__subtitle');
//попапы
const profilePopup = document.querySelector('.popup_profile');
const cardPopup = document.querySelector('.popup_card');
const picturePopup = document.querySelector('.popup_picture');
const popups = document.querySelectorAll('.popup');
//кнопки открытия попапов
const buttonOpenProfilePopup = document.querySelector('.profile__button-edit');
const buttonOpenCardPopup = document.querySelector('.profile__button-add');
//форма попапа профиля
const formProfile = document.querySelector('.popup__form_profile');
const inputProfileName = formProfile.querySelector('.popup__input_name');
const inputProfileBio = formProfile.querySelector('.popup__input_bio');
//форма попапа карточки
const formCard = document.querySelector('.popup__form_card');
const inputCardName = formCard.querySelector('.popup__input_name');
const inputCardLink = formCard.querySelector('.popup__input_link');
//элементы попапа изображения
const picturePopupTitle = picturePopup.querySelector('.popup__title_picture');
const picturePopupImage = picturePopup.querySelector('.popup__image');
//контейнер куда добавляем карточки
const cardsList = document.querySelector('.cards__list');
//свойства формы для валидации
const propsForm = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__error_active',
};

//экспорт всего файла
export {
  profileName,
  profileBio,
  profilePopup,
  cardPopup,
  picturePopup,
  popups,
  buttonOpenProfilePopup,
  buttonOpenCardPopup,
  formProfile,
  inputProfileName,
  inputProfileBio,
  formCard,
  inputCardName,
  inputCardLink,
  picturePopupTitle,
  picturePopupImage,
  cardsList,
  propsForm,
};
