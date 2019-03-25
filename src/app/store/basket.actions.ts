import { Action } from '@ngrx/store';
import { BasketState } from './basket.state';
import { Product } from '../models/product';

export enum BasketActionTypes {
    BasketAdd = '[Basket Component] Add product',
    BasketRemove = '[Basket Component] Remove product'
}

export class BasketAdd implements Action {
    readonly type = BasketActionTypes.BasketAdd;
    constructor(public payload: Product) { }
}

export class BasketRemove implements Action {
    readonly type = BasketActionTypes.BasketRemove;
    constructor(public payload: number) { }
}

export type AllBasketActions = BasketAdd | BasketRemove;
