import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputs = this._form.querySelectorAll('.popup__input');
    this._button = this._form.querySelector('.popup__button');
  }

  close() {
    super.close();
    this._form.reset();
  }

  getInputValues() {
    const inputValues = {};
    this._inputs.forEach((item) => (inputValues[item.name] = item.value));
    return inputValues;
  }

  setInputValues(data) {
    this._inputs.forEach((input) => {
      input.value = data[input.name];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener('submit', this._handleFormSubmit);
  }

  renderLoading(isLoading) {
    isLoading
      ? (this._button.textContent = 'Сохранение...')
      : (this._button.textContent = 'Создать');
  }
}
