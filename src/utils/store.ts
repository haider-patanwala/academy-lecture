import { create } from "zustand";
import { ProductTypes } from "./types";
import { persist } from "zustand/middleware";
import { createContext } from "react";

export const signupformOpen = createContext<any>(false);

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

export const isLoggedIn = create(
	persist<{
		loggedIn: boolean;
		setIsLoggedIn: (prop: boolean) => void;
	}>(
		(set) => ({
			loggedIn: false,
			setIsLoggedIn: (props: boolean) => set({ loggedIn: props }),
		}),
		{
			name: "loggedInState",
		}
	)
);
