import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._button = this._form.querySelector('.popup__button');
    this._buttonInitialText = this._button.textContent;
  }

  open(id, element) {
    super.open();
    this._id = id;
    this._elem = element;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();
      this._handleFormSubmit(this._id, this._elem);
    });
  }

  renderLoading(isLoading) {
    isLoading
      ? (this._button.textContent = 'Удаление...')
      : (this._button.textContent = this._buttonInitialText);
  }
}
