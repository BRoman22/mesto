const openPopup = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');
const closePopup = popup.querySelector('.popup__close');
const inputName = popup.querySelector('.popup__input');
const inputBio = popup.querySelectorAll('.popup__input')[1];
const profileName = document.querySelector('.profile__title');
const profileBio = document.querySelector('.profile__subtitle');
const profileAvatar = document.querySelector('.profile__avatar');

// Функция открывает/закрывает попап
const openClosePopup = () => {
  popup.classList.toggle('popup_opened');
};

// Функция присваивает текущее имя и био пользователя в инпуты попапа
const addInputsValue = () => {
  inputName.value = profileName.textContent;
  inputBio.value = profileBio.textContent;
  profileAvatar.alt = profileName.textContent;
};

// Функция открывает попап и присваивает текущее имя и био пользователя в инпуты попапа
openPopup.addEventListener('click', () => {
  openClosePopup();
  addInputsValue();
});

// Функция закрывает попап
closePopup.addEventListener('click', openClosePopup);

// Фунцкия присваивает новое имя и био пользователя, меняет альт для аватара
popup.addEventListener('submit', (e) => {
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileAvatar.alt = inputBio.value;
  profileBio.textContent = inputBio.value;
  openClosePopup();
});
