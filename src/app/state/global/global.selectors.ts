import { Selector } from '@ngxs/store';
import { GlobalStateModel } from './global.model';

export class GlobalStateSelectors {
  @Selector([GlobalStateModel])
  static data(state: GlobalStateModel) {
    return state.data;
  }
}
