interface ICurrency {
	label: string;
	symbol: string;
}

interface IPrice {
	currency: {
		label: string;
		symbol: string;
	};
	amount: number;
}

interface IProduct {
	id: string;
	name: string;
	inStock: boolean;
	gallery: string;
	description: string;
	category: string;
	attributes: {
		id: string;
		name: string;
		type: string;
		items: {
			displayValue: string;
			value: string;
		};
	};
	prices: IPrice[];
	brand: string;
}
export interface ICategory {
	category: {
		name: string;
		products: IProduct[];
	};
}
export interface IProducts {
	product: IProduct[];
}

export interface IData {
	currencies: ICurrency[];
}
