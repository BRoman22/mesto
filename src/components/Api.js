export default class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;
  }

  request({ data, method = 'GET', path }) {
    return fetch(`${this._url}/v1/cohort-71${path}`, {
      method: method,
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: data ? JSON.stringify(data) : null,
    }).then((res) => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)));
  }

  catch(err) {
    alert(err);
  }
}
