import { observable, computed } from 'mobx';

class Store {
  @observable title = '';

  @computed
  get getTitle() {
    return this.title;
  }

  setTitle(title) {
    this.title = title;
  }
}

const appStore = new Store();
export default appStore;
