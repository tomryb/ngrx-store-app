import { createFeatureSelector, createSelector, createReducer, on, Action } from '@ngrx/store';
import * as fromActions from '../actions/product.actions';
import { CAT1, CAT2 } from '../models/product';
import { ProductState } from './app.states';

export const initialState: ProductState = { products: []};

export const _productReducer = createReducer(
  initialState,
  on(fromActions.Cat1ProductsAction, (state) => { return {products: CAT1};}),
  on(fromActions.Cat2ProductsAction, (state) => { return {products: CAT2};}),
  on(fromActions.FavoriteProductsAction, (state, {payload}) => {return {products: payload};})
);

export function productReducer(state: any, action: Action) {
  return _productReducer(state, action);
}

export const getProductState = createFeatureSelector<ProductState>('product');

export const getProducts = createSelector(
    getProductState,
    (state: ProductState) => state.products
);
