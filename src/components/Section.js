export default class Section {
  constructor({ containerSelector, render, userData }) {
    this._render = render;
    this._container = document.querySelector(containerSelector);
    this._userData = userData;
  }

  renderer(cardData) {
    cardData.length > 1
      ? cardData.reverse().forEach((item) => this._render(item, this._userData))
      : this._render(cardData, this._userData);
  }

  addItem(element) {
    this._container.prepend(element);
  }

  deleteItem(element) {
    element.remove();
    element = null;
  }
}
