export default class Api {
  constructor() {}

  getInitialCards() {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-71/cards', {
      headers: {
        authorization: 'b4e9b707-98ea-45f6-a839-27ec2937e3df',
        'Content-Type': 'application/json',
      },
    }).then((res) => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)));
  }

  postNewCard(newCard) {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        name: newCard.name,
        link: newCard.link,
        likes: [],
        owner: {
          name: 'Roman',
          about: 'Frontend newbie',
          avatar:
            'https://avatars.mds.yandex.net/get-yapic/64336/K4lFAFJ9TtLUeAk61VgQcg1qgYA-1/islands-middle',
          cohort: 'cohort-71',
        },
      }),
      headers: {
        authorization: 'b4e9b707-98ea-45f6-a839-27ec2937e3df',
        'Content-Type': 'application/json; charset=UTF-8',
      },
    }).then((res) => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)));
  }
}
