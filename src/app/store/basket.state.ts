import { Product } from '../models/product';

export interface BasketState {
    products: Product[];
}

export class DefaultBasket implements BasketState {
    products: Product[] = null;
}

export const defaultBasket = new DefaultBasket();
