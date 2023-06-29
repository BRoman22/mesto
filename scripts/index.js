import Card from './Card.js';
import FormValidator from './FormValidator.js';
import PopupWithImage from './PopupWithImage.js';
import Section from './Section.js';
import { initialCards } from './cards.js';
import {
  picturePopup,
  profileName,
  profileBio,
  profilePopup,
  cardPopup,
  popups,
  buttonOpenProfilePopup,
  buttonOpenCardPopup,
  formProfile,
  inputProfileName,
  inputProfileBio,
  formCard,
  inputCardName,
  inputCardLink,
  cardsList,
  propsForm,
  propsCard,
} from './constants.js';

/*
//попапы
const openPopup = (element) => {
  element.classList.add('popup_opened');
  document.addEventListener('keydown', handleClosePopupFromEsc);
};

const closePopup = (element) => {
  element.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleClosePopupFromEsc);
};

const handleClosePopupFromCrossButtonAndOverlay = (e) => {
  e.target === e.currentTarget ? closePopup(e.currentTarget) : null;
  e.target.classList.contains('popup__close') ? closePopup(e.currentTarget) : null;
};

const handleClosePopupFromEsc = (e) => {
  e.key === 'Escape' ? closePopup(document.querySelector('.popup_opened')) : null;
};

popups.forEach((item) => item.addEventListener('click', handleClosePopupFromCrossButtonAndOverlay));
*/
const fillProfilePopupInputs = () => {
  inputProfileName.value = profileName.textContent;
  inputProfileBio.value = profileBio.textContent;
};

const resetInputs = () => {
  inputCardName.value = '';
  inputCardLink.value = '';
};

buttonOpenProfilePopup.addEventListener('click', () => {
  fillProfilePopupInputs();
  //openPopup(profilePopup);
  gg.open();
  validateFormProfile.resetValidation();
});

buttonOpenCardPopup.addEventListener('click', () => {
  resetInputs();
  openPopup(cardPopup);
  validateFormCard.resetValidation();
});
//submit profile
const handleChangeProfile = (e) => {
  e.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileBio.textContent = inputProfileBio.value;
  closePopup(profilePopup);
};

//submit card
const handleAddCard = (e) => {
  e.preventDefault();
  const cardData = { name: inputCardName.value, link: inputCardLink.value };
  const newCardList = new Section(
    {
      items: cardData,
      renderer: (item) => {
        const newCard = new Card(item, '#card', propsCard).generateCard();
        newCardList.addItem(newCard);
      },
    },
    cardsList
  );
  newCardList.renderItems();
  formCard.reset();
  closePopup(cardPopup);
};

formProfile.addEventListener('submit', handleChangeProfile);
formCard.addEventListener('submit', handleAddCard);

//валидация форм
const validateFormProfile = new FormValidator(propsForm, formProfile);
validateFormProfile.enableValidation();
const validateFormCard = new FormValidator(propsForm, formCard);
validateFormCard.enableValidation();

//отрисовка первоначальных карточек
const initialCardList = new Section(
  {
    items: initialCards,
    renderer: (items) => {
      items.reverse().forEach((item) => {
        let initialCards = new Card(item, '#card', propsCard, () => {
          const imagePopup = new PopupWithImage(picturePopup);
          imagePopup.open(item);
        }).generateCard();
        initialCardList.addItem(initialCards);
      });
    },
  },
  cardsList
);
initialCardList.renderItems();
