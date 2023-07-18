export default class Api {
  constructor(url, myToken) {
    this._url = url;
    this._token = myToken;
  }

  getRequest(...path) {
    return fetch(`${this._url}/v1/cohort-71${path}`, {
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
    }).then((res) => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)));
  }

  postRequest(data) {
    return fetch(`${this._url}/v1/cohort-71/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)));
  }

  deleteRequest(cardId, ...path) {
    return fetch(`${this._url}/v1/cohort-71/cards/${cardId}${path}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
    }).then((res) => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)));
  }

  patchRequest(data, ...path) {
    return fetch(`${this._url}/v1/cohort-71/users/me${path}`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)));
  }

  putRequest(cardId) {
    return fetch(`${this._url}/v1/cohort-71/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
    }).then((res) => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)));
  }
}
