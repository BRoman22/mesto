const propsForm = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__error_active',
};

const showError = (formElement, inputElement, errorMessage, properties) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(properties.errorClass);
  inputElement.classList.add(properties.inputErrorClass);
};

const hideError = (formElement, inputElement, properties) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = '';
  errorElement.classList.remove(properties.errorClass);
  inputElement.classList.remove(properties.inputErrorClass);
};

const toggleButtonState = (inputList, buttonElement, properties) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(properties.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(properties.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const checkInputValidity = (formElement, inputElement, properties) => {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage, properties);
  } else {
    hideError(formElement, inputElement, properties);
  }
};

const setEventListeners = (formElement, properties) => {
  const inputList = Array.from(formElement.querySelectorAll(properties.inputSelector));
  const buttonElement = formElement.querySelector(properties.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, properties);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, properties);
      toggleButtonState(inputList, buttonElement, properties);
    });
  });
};

const enableValidation = (properties) => {
  const formList = Array.from(document.querySelectorAll(properties.formSelector));
  formList.forEach((formElement) => setEventListeners(formElement, properties));
};

enableValidation(propsForm);
