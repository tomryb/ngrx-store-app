import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product';

export const Cat1ProductsAction = createAction('[ Product ] Cat1');
export const Cat2ProductsAction = createAction('[ Product ] Cat2');
export const FavoriteProductsAction =
        createAction('[ Product ] Favorite_Products', props<{ payload: Product[] }>());
