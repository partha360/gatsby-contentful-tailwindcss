import { persist } from 'mobx-persist';
import { observable, computed, action } from 'mobx';

class Store {
  @persist
  @observable
  title;

  constructor(title) {
    this.title = title;
  }

  @computed
  get getTitle() {
    return this.title.toUpperCase();
  }

  @action
  setTitle(title) {
    this.title = title;
    return this.title;
  }
}

const appStore = new Store();
export default appStore;
