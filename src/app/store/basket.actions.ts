import { Action } from '@ngrx/store';
import { BasketState } from './basket.state';
import { Product } from '../models/product';

export enum ActionTypes {
    Add = '[Basket Component] Add product',
    Remove = '[Basket Component] Remove product'
}

export class Add implements Action {
    readonly type = ActionTypes.Add;
    constructor(public payload: Product) { }
}

export class Remove implements Action {
    readonly type = ActionTypes.Remove;
    constructor(public payload: number) { }
}

export type AllBasketActions = Add | Remove;
