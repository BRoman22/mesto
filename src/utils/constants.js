//попапы
const profilePopup = document.querySelector('.popup_profile');
const cardPopup = document.querySelector('.popup_card');
const picturePopup = document.querySelector('.popup_picture');
//кнопки открытия попапов
const buttonOpenProfilePopup = document.querySelector('.profile__button-edit');
const buttonOpenCardPopup = document.querySelector('.profile__button-add');
//форма попапа профиля
const formProfile = document.querySelector('.popup__form_profile');
//форма попапа карточки
const formCard = document.querySelector('.popup__form_card');
//контейнер куда добавляем карточки
const cardsList = document.querySelector('.cards__list');
//свойства класса FormValidator
const propsForm = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__error_active',
};
//свойства класса Card
const propsCard = {
  card: '.card',
  cardTitle: '.card__title',
  cardImage: '.card__image',
  cardLike: '.card__like',
  cardLikeActive: 'card__like_active',
  cardDelete: '.card__delete',
};

//экспорт всего файла
export {
  profilePopup,
  cardPopup,
  picturePopup,
  buttonOpenProfilePopup,
  buttonOpenCardPopup,
  formProfile,
  formCard,
  cardsList,
  propsForm,
  propsCard,
};
