export default class FormValidator {
  constructor(propsForm, formElement) {
    this._propsForm = propsForm;
    this._formElement = formElement;
  }

  enableValidation() {
    this._setEventListeners();
  }

  _setEventListeners() {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._propsForm.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._propsForm.submitButtonSelector);

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._propsForm.inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', true);
    } else {
      this._buttonElement.classList.remove(this._propsForm.inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showError(inputElement);
    } else {
      this._hideError(inputElement);
    }
  }

  _showError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._propsForm.errorClass);
    inputElement.classList.add(this._propsForm.inputErrorClass);
  }

  _hideError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = '';
    errorElement.classList.remove(this._propsForm.errorClass);
    inputElement.classList.remove(this._propsForm.inputErrorClass);
  }

  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideError(inputElement);
    });
  }
}
