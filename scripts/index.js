//попап изменения профиля
const profilePopup = document.querySelector('.popup_profile');
//попап добавления карточки
const cardPopup = document.querySelector('.popup_card');
//попап картинки
const picturePopup = document.querySelector('.popup_picture');
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
const handleOpenPopup = (e) => e.classList.add('popup_opened');
//функция закрытия попапа
const handleClosePopup = (e) => e.classList.remove('popup_opened');
//функция заполения инпутов попапа профиля со страницы
const addInputsData = () => {
  inputProfileName.value = profileName.textContent;
  inputProfileBio.value = profileBio.textContent;
};
//функция изменения имени и о себе на странице
const changeProfile = (e) => {
  e.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileBio.textContent = inputProfileBio.value;
  handleClosePopup(profilePopup);
};
//функция открытия попапа картинки
const openPicturePopup = (title, image) => {
  picturePopupTitle.textContent = title.textContent;
  picturePopupImage.src = image.src;
  picturePopupImage.alt = image.alt;
  handleOpenPopup(picturePopup);
};
//функция добавления карточки
const addCard = (e) => {
  e.preventDefault();
  const cardData = { name: inputCardName.value, link: inputCardLink.value };
  renderCard(cardData);
  formCard.reset();
  handleClosePopup(cardPopup);
};
//функция создания карточки из шаблона
const createCard = (item) => {
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  const cardTitle = card.querySelector('.card__title');
  const cardImage = card.querySelector('.card__image');
  const cardLike = card.querySelector('.card__like');
  const cardDelete = card.querySelector('.card__delete');

  cardTitle.textContent = item.name;
  cardImage.src = item.link;
  cardImage.alt = item.name;

  cardLike.addEventListener('click', () => cardLike.classList.toggle('card__like_active'));
  cardDelete.addEventListener('click', handleDeleteCard);
  cardImage.addEventListener('click', () => openPicturePopup(cardTitle, handlePictureClick));
  
  return card;
};
//функция добавления карточки на страницу
const renderCard = (item) => {
  const card = createCard(item);
  cardsList.prepend(card);
};
//функция удаления карточки
const handleDeleteCard = (e) => e.target.closest('.card').remove();

//слушатели событий
buttonOpenProfilePopup.addEventListener('click', () => {
  handleOpenPopup(profilePopup);
  addInputsData();
});
buttonOpenCardPopup.addEventListener('click', () => {
  handleOpenPopup(cardPopup);
});
buttonClosePopups.forEach((item) =>
  item.addEventListener('click', () => handleClosePopup(item.closest('.popup')))
);
formProfile.addEventListener('submit', changeProfile);
formCard.addEventListener('submit', addCard);

//добавляем массив изначальных карточек при загрузке на страницу
initialCards.forEach((item) => renderCard(item));
