import React from "react";
import { TiMinus, TiPlus } from "react-icons/ti";
import { useCartState } from "../utils/store";
import { CgCross } from "react-icons/cg";
import { ImCross } from "react-icons/im";

function CartDrawer({
	isVisible,
	setIscartVisible,
}: {
	isVisible: boolean;
	setIscartVisible: any;
}) {
	const { cartItems, setCartItems } = useCartState();

	return (
		<div
			className={`bg-gray-100  border-l  z-[1000]  py-10 px-5 transition-all duration-300 ease-in-out  shadow fixed right-0 top-0 min-h-screen min-w-[30rem] ${
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
				<ul>
					{cartItems.map((item, i) => {
						<li
							key={i}
							className='flex justify-between overflow-clip '>
							<img
								src='https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png'
								alt='image'
								className='w-1/4 h-full object-cover aspect-square '
							/>
							<div className='flex justify-start w-3/4 flex-col gap-1'>
								<div className='flex '>
									<h5 className='text-2xl'>Essence Mascara Lash Princess</h5>
								</div>
								<div className='flex w-full items-start flex-col gap-1'>
									<h5>Rs. 499</h5>
									<div className='flex gap-4'>
										<button onClick={() => {}}>
											<TiMinus />
										</button>
										<p>Qty: 1</p>
										<button onClick={() => {}}>
											<TiPlus />
										</button>
									</div>
								</div>
								<button
									onClick={() => {}}
									className='w-36 mt-3 bg-red-400 px-4 py-2 text-white'>
									Remove
								</button>
							</div>
						</li>;
					})}
				</ul>
			</div>
			{/* ==============Action Buttons ============== */}
			<div className=' flex min-w-full h-20 gap-0 bottom-0 absolute '>
				<button className='border-0 rounded-none flexCenter w-1/2 bg-green-400 text-black'>
					Buy Now
				</button>
				<button className='border-0 rounded-none flexCenter w-1/2 bg-red-400 text-black'>
					Clear Cart
				</button>
			</div>
		</div>
	);
}

export default CartDrawer;