import { makeAutoObservable } from 'mobx';

class FilterStore {
  filter = '';

  constructor() {
    makeAutoObservable(this);
  }

  update = query => {
    this.filter = query;
  };
}

const filterStore = new FilterStore();

export default filterStore;
