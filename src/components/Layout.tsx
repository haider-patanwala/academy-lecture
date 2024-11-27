import React, { createContext, useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import CartDrawer from "./CartDrawer";
import Signup from "./Signup";
import { isLoggedIn, signupformOpen } from "@/utils/store";

function Layout() {
	const [iscartVisible, setIscartVisible] = useState(false);

	const singupformState = useContext(signupformOpen);

	const [isOpen, setIsOpen] = useState<boolean>(false);
	const { loggedIn } = isLoggedIn();
	console.log("loggedin", loggedIn);

	return (
		<signupformOpen.Provider value={{ isOpen, setIsOpen }}>
			<header className='w-screen max-w-7xl    h-fit relative flexCenter'>
				<Link
					to={"/"}
					className='font-bold text-blue-400 font-serif mr-auto text-2xl'>
					ApnaShop
				</Link>
				<Link to={"/product-archive"}>Shop</Link>
				{!loggedIn && (
					<button
						onClick={() => {
							setIsOpen((prev: boolean) => !prev);
						}}>
						Login
					</button>
				)}
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
			<Signup />
		</signupformOpen.Provider>
	);
}

export default Layout;
