//формы
const formList = Array.from(document.querySelectorAll('.popup__form'));
//кнопки открытия попапов
const buttonOpenProfilePopup = document.querySelector('.profile__button-edit');
const buttonOpenCardPopup = document.querySelector('.profile__button-add');
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
export { formList, buttonOpenProfilePopup, buttonOpenCardPopup, propsForm, propsCard };
