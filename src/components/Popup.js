export default class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
  }

  open() {
    this._popup.classList.add('popup_opened');
  }

  close() {
    this._popup.classList.remove('popup_opened');
    this._removeEventListeners();
  }

  _handleEscClose(e) {
    e.key === 'Escape' ? this.close() : null;
  }

  _handleCrossButtonAndOverlayClose(e) {
    e.target === e.currentTarget ? this.close() : null;
    e.target.classList.contains('popup__close') ? this.close() : null;
  }

  setEventListeners() {
    document.addEventListener('keydown', this._handleEscClose.bind(this));
    this._popup.addEventListener('click', this._handleCrossButtonAndOverlayClose.bind(this));
  }

  _removeEventListeners() {
    document.removeEventListener('keydown', this._handleEscClose.bind(this));
    this._popup.removeEventListener('click', this._handleCrossButtonAndOverlayClose.bind(this));
  }
}
