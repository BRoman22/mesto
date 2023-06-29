export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }

  renderItems() {
    this._renderer(this._renderedItems);
  }

  addItem(element) {
    this._container.prepend(element);
  }
}
