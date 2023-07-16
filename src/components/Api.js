export default class Api {
  constructor(url, myToken) {
    this._url = url;
    this._token = myToken;
  }

  getUserInfo() {
    return fetch(`${this._url}/v1/cohort-71/users/me`, {
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
    }).then((res) => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)));
  }

  getInitialCards() {
    return fetch(`${this._url}/v1/cohort-71/cards`, {
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
    }).then((res) => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)));
  }

  postCard({ name, link }) {
    return fetch(`${this._url}/v1/cohort-71/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, link }),
    }).then((res) => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)));
  }

  removeCard(id) {
    return fetch(`${this._url}/v1/cohort-71/cards/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
    }).then((res) => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)));
  }

  setUserInfo({ name, about }) {
    return fetch(`${this._url}/v1/cohort-71/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, about }),
    }).then((res) => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)));
  }
}
