//попап изменения профиля
const profilePopup = document.querySelector('.popup_profile');
//попап добавления карточки
const cardPopup = document.querySelector('.popup_card');
//попап карточки
const imagePopup = document.querySelector('.popup_image');
//кнопка открытия попапа профиля
const openProfile = document.querySelector('.profile__button-edit');
//кнопка открытия попапа добавления карточки
const openCard = document.querySelector('.profile__button-add');
//все кнопки закрытия попапов
const closePopups = document.querySelectorAll('.popup__close');
//форма профиля
const formProfile = document.querySelector('.form_profile');
//форма добавления карточки
const formCard = document.querySelector('.form_card');
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

//функция переключения класса, принимает елемент и класс
const toggleClass = (element, classElement) =>
  element.classList.toggle(classElement);
//функция заполения инпутов попапа профиля со страницы
const addInputsValue = () => {
  inputProfileName.value = profileName.textContent;
  inputProfileBio.value = profileBio.textContent;
};
//функция обнуления инпутов попапа карточки
const clearInputs = () => {
  inputCardName.value = '';
  inputCardLink.value = '';
};
//функция изменения имени и о себе на странице
const changeProfile = (e) => {
  e.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileBio.textContent = inputProfileBio.value;
  toggleClass(profilePopup, 'popup_opened');
};
//функция открытия попапа картинки
const openImagePopup = (title, link) => {
  imagePopup.querySelector('.popup__title_image').textContent =
    title.textContent;
  imagePopup.querySelector('.popup__image').src = link.src;
  toggleClass(imagePopup, 'popup_opened');
};
//функция добавления карточки
const addCard = (e) => {
  e.preventDefault();
  createCard(inputCardName.value, inputCardLink.value);
  toggleClass(cardPopup, 'popup_opened');
};
//функция создания карточки из шаблона
const createCard = (title, link) => {
  const template = document.querySelector('#card').content;
  const card = template.querySelector('.card').cloneNode(true);
  const cardTitle = card.querySelector('.card__title');
  const cardImage = card.querySelector('.card__image');
  const like = card.querySelector('.card__like');
  cardTitle.textContent = title;
  cardImage.src = link;
  like.addEventListener('click', () => toggleClass(like, 'card__like_active'));
  card.querySelector('.card__delete').addEventListener('click', deleteCard);
  cardImage.addEventListener('click', () =>
    openImagePopup(cardTitle, cardImage)
  );
  cardsList.prepend(card);
};
//функция удаления карточки
const deleteCard = (e) => e.target.closest('.card').remove();

//слушатели событий
openProfile.addEventListener('click', () => {
  toggleClass(profilePopup, 'popup_opened');
  addInputsValue();
});

openCard.addEventListener('click', () => {
  toggleClass(cardPopup, 'popup_opened');
  clearInputs();
});

closePopups.forEach((item) =>
  item.addEventListener('click', () =>
    toggleClass(item.closest('.popup'), 'popup_opened')
  )
);

formProfile.addEventListener('submit', changeProfile);

formCard.addEventListener('submit', addCard);

//массив изначальных карточек
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

//добавляем массив изначальных карточек при загрузке на страницу
initialCards.forEach((card) => {
  createCard(card.name, card.link);
});
