import { create } from "zustand";
import { ProductTypes } from "./types";

interface CartStateType {
	cartItems: any;
	setCartItems: (Product: any) => void;
}

export const useCartState = create<CartStateType>((set) => ({
	cartItems: [{ hello: "kkk" }],
	setCartItems: (Product: ProductTypes) =>
		set((cartItems: any) => ({ cartItems: [Product] })),
}));
