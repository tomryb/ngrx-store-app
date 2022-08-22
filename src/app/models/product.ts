export interface Product {
	id: number;
	title: string;
	category: string;
}

export const CAT1: Product[] = [
    {id: 1, title: 'Product 1', category: 'cat1'},
    {id: 2, title: 'Product 2', category: 'cat1'},
]
export const CAT2: Product[] = [
    {id: 1, title: 'Product 3', category: 'cat2'},
    {id: 2, title: 'Product 4', category: 'cat2'},
]
export const FAVORITE_PRODUCTS: Product[] = [
    {id: 1, title: 'Product 5', category: 'cat1'},
    {id: 2, title: 'Product 6', category: 'cat2'}
]
