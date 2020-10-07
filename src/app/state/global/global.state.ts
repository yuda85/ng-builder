import { State } from '@ngxs/store';
import { GlobalStateModel } from './global.model';

@State<GlobalStateModel>({
  name: 'global',
  defaults: {
    data: null,
  },
})
export class GlobalState {}
