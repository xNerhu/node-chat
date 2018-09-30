import { observable } from 'mobx';
import { MessageData } from '@/interfaces';

export class Store {
  @observable
  public messages: MessageData[] = [];
}

export default new Store();
