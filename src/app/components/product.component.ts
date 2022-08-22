import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import * as productReducer from '../reducers/product.reducer';
import * as fromActions from '../actions/product.actions';
import { ProductState } from '../reducers/app.states';
import { Product, FAVORITE_PRODUCTS } from '../models/product';

@Component({
	selector: 'app-product',
	templateUrl: 'product.component.html'
})
export class ProductComponent {
	products$: Observable<Product[]>;

	constructor(private store: Store<ProductState>) {
		this.products$ = store.select(productReducer.getProducts);
	}
	showCat1Products() {
		this.store.dispatch(fromActions.Cat1ProductsAction());
	}
	showCat2Products() {
		this.store.dispatch(fromActions.Cat2ProductsAction());
	}
	showFavoriteProducts() {
		this.store.dispatch(fromActions.FavoriteProductsAction({ payload: FAVORITE_PRODUCTS }));
	}
}
