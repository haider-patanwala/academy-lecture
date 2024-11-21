import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import CartDrawer from "./src/components/CartDrawer";

function Layout() {
	const [iscartVisible, setIscartVisible] = useState(false);
	return (
		<>
			<header className='w-[45rem] max-w-7xl justify-between  h-fit relative flexCenter'>
				<p className='font-bold text-blue-400 font-serif text-2xl'>ApnaShop</p>
				<button
					onClick={() => {
						setIscartVisible((prev) => !prev);
					}}>
					Cart
				</button>
			</header>
			<Outlet />
			<CartDrawer
				setIscartVisible={setIscartVisible}
				isVisible={iscartVisible}
			/>
			<footer>This Is my Footer</footer>
		</>
	);
}

export default Layout;
