import { Action, ActionReducer } from '@ngrx/store';
import { BasketActionTypes, AllBasketActions } from './basket.actions';
import { defaultBasket, BasketState } from './basket.state';

export function basketReducer(state: BasketState = defaultBasket, action: AllBasketActions): BasketState {
    switch (action.type) {
        case BasketActionTypes.BasketAdd:
            //TODO: if product is in basket, than increment amount            
            return {
                ...state,
                products: [...state.products, action.payload]
            };

        case BasketActionTypes.BasketRemove:
            return {
                ...state,
                products: state.products.filter(prod => prod.id != action.payload)
            };

        default:
            return state;
    }
}
