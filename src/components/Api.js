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

  removeCard(cardId) {
    return fetch(`${this._url}/v1/cohort-71/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
    }).then((res) => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)));
  }

  setUser(data) {
    return fetch(`${this._url}/v1/cohort-71/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)));
  }

  postLike(cardId) {
    return fetch(`${this._url}/v1/cohort-71/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
    }).then((res) => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)));
  }

  removeLike(cardId) {
    return fetch(`${this._url}/v1/cohort-71/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
    }).then((res) => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)));
  }

  setAvatar(data) {
    return fetch(`${this._url}/v1/cohort-71/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ avatar: data.link }),
    }).then((res) => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)));
  }
}
