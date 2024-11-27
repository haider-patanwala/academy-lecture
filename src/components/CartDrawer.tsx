import React, { useContext, useEffect } from "react";
import { TiMinus, TiPlus } from "react-icons/ti";
import { useCartState } from "../utils/store";
import { CgCross } from "react-icons/cg";
import { ImCross } from "react-icons/im";
import { CreateOrder } from "@/utils/funcs";

function CartDrawer({
	isVisible,
	setIscartVisible,
}: {
	isVisible: boolean;
	setIscartVisible: any;
}) {
	const { cartItems, setCartItems, setQuantity } = useCartState();

	useEffect(() => {
		console.log(cartItems);
	}, [cartItems]);

	return (
		<div
			className={`bg-gray-100  border-l  z-[1000]  py-10 px-5 transition-all duration-300 ease-in-out  shadow fixed right-0 top-0 min-h-screen min-w-[30rem] w-[30rem] ${
				isVisible ? "translate-x-[0%]" : "translate-x-[100%]"
			}`}>
			<button
				onClick={() => setIscartVisible(false)}
				className='text-black size-fit text-xl hover:text-red-500  bg-transparent rounded-none absolute top-4 right-4 z-50'>
				<ImCross />
			</button>
			{/*============== Cart Items ============== */}
			<div className='h-[calc(100%-5rem)] w-full bg-transparent overflow-y-scroll'>
				{/* <ul>{CartItems.map{}}</ul> */}
				<ul className='flexCol gap-10'>
					{cartItems.map((item, i) => {
						const currentItemIndex = cartItems.indexOf(item);

						return (
							<li
								key={i}
								className='flex justify-between overflow-clip '>
								<img
									src={item.images[0]}
									alt='image'
									className='w-1/4 h-full object-cover aspect-square '
								/>
								<div className='flex justify-start w-3/4 flex-col gap-1'>
									<div className='flex '>
										<h5 className='text-2xl'>{item.title}</h5>
									</div>
									<div className='flex w-full items-start flex-col gap-1'>
										<h5>Rs. {item.price}</h5>
										<div className='flex gap-4'>
											<button
												onClick={() => {
													cartItems.length > 0 &&
														(cartItems[currentItemIndex].qty <= 1
															? setQuantity(
																	cartItems.filter(
																		(currentItem) => currentItem.id !== item.id
																	)
															  )
															: setQuantity(
																	cartItems.map((items, i) => {
																		return i === currentItemIndex
																			? { ...items, qty: items.qty - 1 }
																			: items;
																	})
															  ));
												}}>
												<TiMinus />
											</button>
											<p>Qty: {item.qty}</p>
											<button
												onClick={() => {
													setQuantity(
														cartItems.map((items, i) => {
															return i === currentItemIndex
																? { ...items, qty: items.qty + 1 }
																: items;
														})
													);
												}}>
												<TiPlus />
											</button>
										</div>
									</div>
									<button
										onClick={() => {
											setQuantity(
												cartItems.filter(
													(currentItem) => currentItem.id !== item.id
												)
											);
										}}
										className='w-36 mt-3 bg-red-400 px-4 py-2 text-white'>
										Remove
									</button>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
			{/* ==============Action Buttons ============== */}
			<div className=' flex min-w-full h-20 gap-0 bottom-0 absolute '>
				<button
					onClick={() => {
						CreateOrder({ ...cartItems });
					}}
					className='border-0 rounded-none flexCenter w-1/2 bg-green-400 text-black'>
					Buy Now
				</button>
				<button
					onClick={() => {
						setQuantity([]);
					}}
					className='border-0 rounded-none flexCenter w-1/2 bg-red-400 text-black'>
					Clear Cart
				</button>
			</div>
		</div>
	);
}

export default CartDrawer;
