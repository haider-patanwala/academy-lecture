import React, { useState } from "react";
import BuyForm from "./BuyForm";
import { useCartState } from "../utils/store";

async function BuyProduct({ id }: { id: number }) {
	// API Documentation
	// https://dummyjson.com/docs/product
	const data = await fetch("https://dummyjson.com/products", {
		method: "POST",
	})
		.then((res) => res.json())
		.then((data) => data);

	return data;
}

type props = any;

function ProductCard({ props }: props) {
	const { cartItems, setCartItems } = useCartState();

	return (
		<div className='h-full border p-5 text-left flexCol gap-5 rounded-md max-w-[25rem] min-w-[10rem]'>
			<img
				src={props.thumbnail}
				alt={props.thumbnail}
				className='w-full bg-gray-300  object-contain aspect-video'
			/>
			<h1 className='text-2xl text-left text-slate-900 font-medium'>
				{props.title}
			</h1>
			<p className='text-sm text-left bg-slate-500 text-white rounded-full w-fit px-2 py-1'>
				{props.category}
			</p>
			<p className='w-fit text-xl text-slate-800 font-medium'>
				Price : {props.price}
			</p>
			<p className=' text-slate-900 line-clamp-3 font-normal  text-base w-fit'>
				{props.description}
			</p>
			<div className='mt-auto relative flex-col flex w-full'>
				<BuyForm
					email={"haider@edquest.propp"}
					orderData={props}
				/>
				<button
					onClick={() => {
						setCartItems({ ...props, qty: 1 });
					}}>
					Add to Cart
				</button>
			</div>
		</div>
	);
}

export default ProductCard;
