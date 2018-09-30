import { observable } from 'mobx';

export class Store {
  @observable
  public nickname: string;

  @observable
  public startSettingsVisible = false;
}

export default new Store();
