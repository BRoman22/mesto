const openPopup = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');
const closePopup = popup.querySelector('.popup__close');
const popupInputs = popup.querySelectorAll('.popup__input');
const inputName = popupInputs[0];
const inputBio = popupInputs[1];
const profileName = document.querySelector('.profile__title');
const profileBio = document.querySelector('.profile__subtitle');
const profileAvatar = document.querySelector('.profile__avatar');
const popupSubmitButton = popup.querySelector('.popup__button');

inputName.value = profileName.textContent;
inputBio.value = profileBio.textContent;
profileAvatar.alt = profileName.textContent;

const togglePopup = () =>
  popup.classList.value === 'popup'
    ? popup.classList.add('popup_opened')
    : popup.classList.remove('popup_opened');

openPopup.addEventListener('click', togglePopup);
closePopup.addEventListener('click', togglePopup);

const handlePopupSubmit = (e) => {
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileAvatar.alt = inputName.value;
  profileBio.textContent = inputBio.value;
  togglePopup();
};

popupSubmitButton.addEventListener('click', handlePopupSubmit);
