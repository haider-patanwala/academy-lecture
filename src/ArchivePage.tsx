import React, { useEffect, useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import Signup from "./components/Signup";
import { useCartState } from "./utils/store";

async function fetchProduct() {
	// API Documentation
	// https://dummyjson.com/docs/product
	const data = await fetch("https://dummyjson.com/products", {
		method: "GET",
	})
		.then((res) => res.json())
		.then((data) => data);

	return data;
}

function ArchivePage() {
	const [product, setproduct] = useState([]);
	const { cartItems, setCartItems } = useCartState();

	useEffect(() => {
		fetchProduct().then((data) => setproduct(data.products));
	}, []);

	console.log(cartItems);

	return (
		<>
			<Signup />
			<main className=' relative  justify-center grid grid-cols-3 gap-10 items-center text-center'>
				{product.map((data, i) => {
					return (
						<ProductCard
							key={i}
							props={data}
						/>
					);
				})}
			</main>
		</>
	);
}

export default ArchivePage;
