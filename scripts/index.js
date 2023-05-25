//попап редактирования профиля
const profilePopup = document.querySelector('.popup_profile');
//попап добавления карточки
const cardPopup = document.querySelector('.popup_card');
//попап картинки
const picturePopup = document.querySelector('.popup_picture');
//тайтл попапа картинки
const picturePopupTitle = picturePopup.querySelector('.popup__title_picture');
//изображение попапа картинки
const picturePopupImage = picturePopup.querySelector('.popup__image');
//кнопка открытия попапа профиля
const buttonOpenProfilePopup = document.querySelector('.profile__button-edit');
//кнопка открытия попапа добавления карточки
const buttonOpenCardPopup = document.querySelector('.profile__button-add');
//все кнопки закрытия попапов
const buttonClosePopups = document.querySelectorAll('.popup__close');
//форма профиля
const formProfile = document.querySelector('.popup__form_profile');
//форма добавления карточки
const formCard = document.querySelector('.popup__form_card');
//шаблон карточки
const cardTemplate = document.querySelector('#card').content;
//строка ввода имени попапа профиля
const inputProfileName = formProfile.querySelector('.popup__input_name');
//строка ввода о себе попапа профиля
const inputProfileBio = formProfile.querySelector('.popup__input_bio');
//строка ввода имени попапа добавления карточки
const inputCardName = formCard.querySelector('.popup__input_name');
//строка ввода ссылки попапа добавления карточки
const inputCardLink = formCard.querySelector('.popup__input_link');
//имя профиля на странице
const profileName = document.querySelector('.profile__title');
//о себе на странице
const profileBio = document.querySelector('.profile__subtitle');
//елемент куда добавляются карточки
const cardsList = document.querySelector('.cards__list');

//функция открытия попапа
const openPopup = (element) => element.classList.add('popup_opened');
//функция закрытия попапа
const closePopup = (element) => element.classList.remove('popup_opened');
//функция заполения инпутов попапа профиля со страницы
const addInputsData = () => {
  //const inputList = [inputProfileName, inputProfileBio];
  //const buttonElement = formProfile.querySelector('.popup__button');

  inputProfileName.value = profileName.textContent;
  inputProfileBio.value = profileBio.textContent;
  //toggleButtonState(inputList, buttonElement);
};
//функция изменения имени и о себе на странице
const changeProfile = (e) => {
  e.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileBio.textContent = inputProfileBio.value;
  closePopup(profilePopup);
};
//функция добавления карточки
const addCard = (e) => {
  e.preventDefault();
  const cardData = { name: inputCardName.value, link: inputCardLink.value };
  renderCard(cardData);
  formCard.reset();
  closePopup(cardPopup);
};
//функция добавления карточки на страницу
const renderCard = (cardData) => {
  const card = createCard(cardData);
  cardsList.prepend(card);
};
//функция создания карточки из шаблона
const createCard = (cardData) => {
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  const cardTitle = card.querySelector('.card__title');
  const cardImage = card.querySelector('.card__image');
  const cardLike = card.querySelector('.card__like');
  const cardDelete = card.querySelector('.card__delete');

  cardTitle.textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;

  cardLike.addEventListener('click', () => handleToggleLike(cardLike));
  cardDelete.addEventListener('click', () => handleDeleteCard(card));
  cardImage.addEventListener('click', () => handleOpenPicturePopup(cardData));

  return card;
};
//функция переключения лайка
const handleToggleLike = (item) => item.classList.toggle('card__like_active');
//функция удаления карточки
const handleDeleteCard = (item) => item.remove();
//функция открытия попапа картинки
const handleOpenPicturePopup = (cardData) => {
  picturePopupTitle.textContent = cardData.name;
  picturePopupImage.src = cardData.link;
  picturePopupImage.alt = cardData.name;
  openPopup(picturePopup);
};

//слушатели событий
//открытие попапа профиля
buttonOpenProfilePopup.addEventListener('click', () => {
  openPopup(profilePopup);
  addInputsData();
});
//открытие попапа карточки
buttonOpenCardPopup.addEventListener('click', () => openPopup(cardPopup));
//закрытие любого попапа на крестик и оверлэй
document.addEventListener('mousedown', (e) => {
  e.target.classList.contains('popup') ? closePopup(e.target) : null;
  e.target.classList.contains('popup__close') ? closePopup(e.target.closest('.popup')) : null;
});
//закрытие любого попапа на клавишу Escape
document.addEventListener('keydown', (e) => {
  const popups = [profilePopup, cardPopup, picturePopup];
  e.key === 'Escape' ? popups.forEach((item) => closePopup(item)) : null;
});
//сабмиты форм
formProfile.addEventListener('submit', changeProfile);
formCard.addEventListener('submit', addCard);

//добавляем массив изначальных карточек при загрузке на страницу
initialCards.reverse().forEach((cardData) => renderCard(cardData));
