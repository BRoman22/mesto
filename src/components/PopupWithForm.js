import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputs = this._form.querySelectorAll('.popup__input');
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
    this._inputs.forEach((input, index) => {
      input.value = data[Object.keys(data)[index]];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener('submit', this._handleFormSubmit);
  }
}
