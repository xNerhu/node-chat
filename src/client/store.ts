import { observable } from 'mobx';

export class Store {
  @observable
  public nickname: string;

  @observable
  public startSettingsVisible = true;
}

export default new Store();
