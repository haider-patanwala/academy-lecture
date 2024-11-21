import { create } from "zustand";
import { ProductTypes } from "./types";

interface CartStateType {
	cartItems: any;
	setCartItems: (Product: any) => void;
}

export const useCartState = create<CartStateType>((set) => ({
	cartItems: [],
	setCartItems: (Product: ProductTypes) =>
		set((prev: any) => ({ cartItems: [...prev.cartItems, Product] })),
}));
