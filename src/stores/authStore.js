import { makeAutoObservable } from 'mobx';

class AuthStore {
  userName = '';
  isLoggedIn = false;

  constructor() {
    makeAutoObservable(this);
  }

  login = user => {
    this.userName = user;
    this.isLoggedIn = true;
  };

  logout = () => {
    this.userName = '';
    this.isLoggedIn = false;
  };
}

const authStore = new AuthStore();

export default authStore;
