import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import CartDrawer from "./CartDrawer";
import Signup from "./Signup";

function Layout() {
	const [iscartVisible, setIscartVisible] = useState(false);
	return (
		<>
			<header className='w-screen max-w-7xl    h-fit relative flexCenter'>
				<Link
					to={"/"}
					className='font-bold text-blue-400 font-serif mr-auto text-2xl'>
					ApnaShop
				</Link>
				<Link to={"/product-archive"}>Shop</Link>
				<Signup />

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
