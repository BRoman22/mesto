export default class UserInfo {
  constructor({ name, bio }) {
    this._name = document.querySelector(name);
    this._bio = document.querySelector(bio);
  }

  getUserInfo() {
    return { name: this._name.textContent, bio: this._bio.textContent };
  }

  setUserInfo({ name, bio }) {
    this._name.textContent = name;
    this._bio.textContent = bio;
  }
}
