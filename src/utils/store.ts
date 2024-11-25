import { create } from "zustand";
import { ProductTypes } from "./types";

interface CartStateType {
	cartItems: ProductTypes[];
	setCartItems: (Product: any) => void;
	setQuantity: (props: ProductTypes[]) => void;
}

export const useCartState = create<CartStateType>((set) => ({
	cartItems: [],
	setCartItems: (props: ProductTypes) =>
		set((prev: any) => ({ cartItems: [...prev.cartItems, props] })),
	setQuantity: (props) => set(() => ({ cartItems: props })),
}));
