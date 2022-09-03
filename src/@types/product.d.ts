export interface IProduct {
	id: number;
	image: string;
	price: number;
	title: string;
}

export interface IProductList {
	id: number;
	image: string;
	price: number;
	title: string;
	amount: number;
}

export type ProductContextType = {
	products: IProductList[];
	productsCount: number;
	productsTotal: number;
	addProductList: (product: IProduct) => void;
	removeProduct: (product: IProduct) => void;
	removeTotal: (product: IProduct) => void;
};
