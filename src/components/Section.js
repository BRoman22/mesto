export default class Section {
  constructor({ containerSelector, render }) {
    this._render = render;
    this._container = document.querySelector(containerSelector);
  }

  rendererArr(data, userData) {
    this._userData = userData;
    data.reverse().forEach((item) => {
      this._render(item, this._userData);
    });
  }

  rendererCard(data) {
    this._render(data, this._userData);
  }

  addItem(element) {
    this._container.prepend(element);
  }

  deleteItem(element) {
    element.remove();
    element = null;
  }
}
