const openPopup = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');
const closePopup = popup.querySelector('.popup__close');
const inputName = popup.querySelector('input[name="user-name"]');
const inputBio = popup.querySelector('input[name="user-bio"]');
const profileName = document.querySelector('.profile__title');
const profileBio = document.querySelector('.profile__subtitle');
const profileAvatar = document.querySelector('.profile__avatar');

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

popup.addEventListener('click', (e) => e.target === e.currentTarget ? togglePopup(popup) : '');

// Фунцкия присваивает новое имя и био пользователя, присваивает альт для аватара на введеное имя
const changeProfile = (e) => {
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileBio.textContent = inputBio.value;
  profileAvatar.alt = inputName.value;
  togglePopup(popup);
};

// Фунцкия присваивает новое имя и био пользователя, присваивает альт для аватара на введеное имя
popup.addEventListener('submit', changeProfile);
