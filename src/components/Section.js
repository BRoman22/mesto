export default class Section {
  constructor({ containerSelector, render }) {
    this._render = render;
    this._container = document.querySelector(containerSelector);
  }

  rendererArr(data, userId) {
    data.reverse().forEach((item) => {
      this._userId = userId;
      this._render(item, this._checkMyCard(item.owner._id));
    });
  }

  rendererCard(data) {
    this._render(data, this._checkMyCard(data.owner._id));
  }

  addItem(element) {
    this._container.prepend(element);
  }

  deleteItem(element) {
    element.remove();
    element = null;
  }

  _checkMyCard(cardId) {
    return cardId === this._userId;
  }
}
