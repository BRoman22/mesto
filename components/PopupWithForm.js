import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = popupSelector.querySelector('.popup__form');
    this._inputs = this._form.querySelectorAll('.popup__input');
  }

  close() {
    super.close();
    this._form.reset();
    this._removeEventListeners();
  }

  _getInputValues() {
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

  _removeEventListeners() {
    super._removeEventListeners();
    this._popup.removeEventListener('submit', this._handleFormSubmit);
    //nuzno li snimat listener s krestika popupa?v proshlih rabotah vsegda viseli
  }
}
