export default class Api {
  constructor({ url, headers, body }) {
    this._url = url;
    this._headers = headers;
    this._body = body;
  }

  getCards() {
    return fetch(this._url, {
      headers: this._headers,
    }).then((res) => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)));
  }

  postCard() {
    return fetch(this._url, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: this._body.name,
        link: this._body.link,
      }),
    }).then((res) => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)));
  }

  deleteCard(id) {
    return fetch(`${this._url}/${id}`, {
      //https://mesto.nomoreparties.co/v1/cohortId/cards/64b04c4574f67615b016f51f
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)));
  }
}
