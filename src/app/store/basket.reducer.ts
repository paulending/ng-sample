import { Action, ActionReducerMap } from '@ngrx/store';
import { ActionTypes } from './basket.actions';
import { defaultBasket, BasketState } from './basket.state';

export function basketReducer(state = defaultBasket, action: Action): BasketState {
    switch (action.type) {
        case ActionTypes.Add:
            return state;

        case ActionTypes.Remove:
            return state;

        default:
            return state;
    }
}
