export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleCrossButtonAndOverlayClose = this._handleCrossButtonAndOverlayClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(e) {
    e.key === 'Escape' ? this.close() : null;
  }

  _handleCrossButtonAndOverlayClose(e) {
    if (e.target === e.currentTarget || e.target.classList.contains('popup__close')) {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener('click', this._handleCrossButtonAndOverlayClose);
  }
}
