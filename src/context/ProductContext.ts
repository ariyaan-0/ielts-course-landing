import { createContext, useContext } from "react";

type ProductDataType = any;

export const ProductContext = createContext<ProductDataType | null>(null);

export const useProduct = (): ProductDataType | null =>
	useContext(ProductContext);
