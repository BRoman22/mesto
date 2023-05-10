const openPopup = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');
const closePopup = popup.querySelector('.popup__close');
const inputName = popup.querySelector('input[name="user-name"]');
const inputBio = popup.querySelector('input[name="user-bio"]');
const profileName = document.querySelector('.profile__title');
const profileBio = document.querySelector('.profile__subtitle');
const profileAvatar = document.querySelector('.profile__avatar');
const form = popup.querySelector('.popup__body');

// Функция присваивает/удаляет класс елементу
const togglePopup = (e) => e.classList.toggle('popup_opened');

// Функция присваивает текущее имя и био пользователя в инпуты попапа
const addInputsValue = () => {
  inputName.value = profileName.textContent;
  inputBio.value = profileBio.textContent;
};

// Функция открывает попап и присваивает текущее имя и био пользователя в инпуты попапа
openPopup.addEventListener('click', () => {
  togglePopup(popup);
  addInputsValue();
});

// Функция закрывает попап
closePopup.addEventListener('click', () => togglePopup(popup));

// Фунцкия присваивает новое имя и био пользователя, присваивает альт для аватара на введеное имя
const changeProfile = (e) => {
  e.preventDefault();

  profileName.textContent = inputName.value;
  profileBio.textContent = inputBio.value;
  profileAvatar.alt = inputName.value;

  togglePopup(popup);
};

// Фунцкия присваивает новое имя и био пользователя, присваивает альт для аватара на введеное имя
form.addEventListener('submit', changeProfile);

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

const cardList = document.querySelector('.cards__list');
const template = document.querySelector('#card-template').content;

initialCards.forEach((initialCards) => {
  const cardElement = template.querySelector('.card').cloneNode(true);

  cardElement.querySelector('.card__image').src = initialCards.link;
  cardElement.querySelector('.card__title').textContent = initialCards.name;
  cardList.append(cardElement);
});
