import React, {
	createContext,
	PropsWithChildren,
	useContext,
	useState,
} from "react";
import { IProduct, IProductList, ProductContextType } from "../@types/product";

export const ProductsContext = createContext<ProductContextType>(
	{} as ProductContextType
);

export const ProductProvider = (props: PropsWithChildren<{}>) => {
	const [products, setProducts] = useState<IProductList[]>([]);
	const [productsCount, setProductsCount] = useState<number>(0);
	const [productsTotal, setProductsTotal] = useState<number>(0);

	const addProductList = (product: IProduct) => {
		let list = products;

		const existProductInList: IProductList | undefined = list.find(
			(subProduct) => {
				return subProduct.id === product.id;
			}
		);

		if (existProductInList) {
			list[list.indexOf(existProductInList)].amount += 1;
			setProducts(list);
			let itemsCount = 0;
			let total = 0;
			list.map((item) => {
				itemsCount += item.amount;
				total += item.amount * item.price;
			});
			setProductsCount(itemsCount);
			setProductsTotal(total);
		} else {
			list.push({ amount: 1, ...product });
			setProducts(list);
			let itemsCount = 0;
			let total = 0;
			list.map((item) => {
				itemsCount += item.amount;
				total += item.amount * item.price;
			});
			setProductsCount(itemsCount);
			setProductsTotal(total);
		}
	};

	const removeProduct = (product: IProduct) => {
		let list = products;

		const existProductInList: IProductList | undefined = list.find(
			(subProduct) => {
				return subProduct.id === product.id;
			}
		);

		if (existProductInList) {
			if (existProductInList.amount > 1) {
				list[list.indexOf(existProductInList)].amount -= 1;
				setProducts(list);
				let itemsCount = 0;
				let total = 0;
				list.map((item) => {
					itemsCount += item.amount;
					total += item.amount * item.price;
				});
				setProductsCount(itemsCount);
				setProductsTotal(total);
			} else {
				list.splice(list.indexOf(existProductInList), 1);
				setProducts(list);
				let itemsCount = 0;
				let total = 0;
				list.map((item) => {
					itemsCount += item.amount;
					total += item.amount * item.price;
				});
				setProductsCount(itemsCount);
				setProductsTotal(total);
			}
		}
	};

	const removeTotal = (product: IProduct) => {
		let list = products;

		const existProductInList: IProductList | undefined = list.find(
			(subProduct) => {
				return subProduct.id === product.id;
			}
		);

		if (existProductInList) {
			list.splice(list.indexOf(existProductInList), 1);
			setProducts(list);
			let itemsCount = 0;
			let total = 0;
			list.map((item) => {
				itemsCount += item.amount;
				total += item.amount * item.price;
			});
			setProductsCount(itemsCount);
			setProductsTotal(total);
		}
	};

	return (
		<ProductsContext.Provider
			value={{
				products,
				productsCount,
				productsTotal,
				addProductList,
				removeProduct,
				removeTotal,
			}}
		>
			{props.children}
		</ProductsContext.Provider>
	);
};

export const useProduct = (): ProductContextType => useContext(ProductsContext);
