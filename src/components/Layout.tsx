import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import CartDrawer from "./CartDrawer";
import Signup from "./Signup";

function Layout() {
	const [iscartVisible, setIscartVisible] = useState(false);
	return (
		<>
			<header className='w-auto max-w-7xl h-fit relative flexCenter bg-yellow-950 p-5 mb-5rounded-md'>
        <Link to={"/"}><img src="https://img.freepik.com/premium-vector/online-shopping-cart-vector-icon-logo-element_1114719-949.jpg?w=740" alt="Logo" className="h-24 w-24 mr-2"/></Link>
				<Link
					to={"/"} className='font-bold text-white font-serif mr-auto text-2xl'>
          ApnaShop
				</Link>
				<Link to={"/product-archive"} className="text-white">Shop</Link>
				<Signup />

				<button
					onClick={() => {
						setIscartVisible((prev) => !prev);
					}} className="text-white hover:text-yellow-500">
					Cart
				</button>
			</header>
			<Outlet />
			<CartDrawer
				setIscartVisible={setIscartVisible}
				isVisible={iscartVisible}
			/>
		
	<footer className="max-w-screen max-w-7xl bg-yellow-950 text-white flex flex-col justify-center mt-10 rounded-md">

   

      <div className="container flex items-center px-6">
      <div className="flex items-center space-x-4 pl-[2rem] mt-5">
        <img src="https://img.freepik.com/premium-vector/online-shopping-cart-vector-icon-logo-element_1114719-949.jpg?w=740" alt="Logo" className="w-[10rem] h-[10rem] pt-5"/>
        <p className="text-xl font-semibold font-serif">ApnaShop</p>
        <p className="text-l font-semibold pl-[32rem]">Follow us on social media</p>
      </div>

      <div className="flex gap-3 text-white">
        <a target="_blank" className="text-white mt-5 transition duration-300 ease-out rounded-sm hover:bg-white hover:text-darkgrey ml-[2rem]" href="">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg></a>
            <a target="_blank" className="text-white mt-5 transition duration-300 ease-out rounded-sm hover:bg-white hover:text-darkgrey" href=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"> </path></svg></a>
            <a target="_blank" className="text-white mt-5 transition duration-300 ease-out rounded-sm hover:bg-white hover:text-darkgrey" href="">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></a>
        </div>
    </div>

    <hr className="w-[72rem] border-1 border-white-300 my-5 ml-[3rem]"/>

    <div className="container mx-auto flex justify-between items-start pl-[4rem] pt-10 pb-10">
	  <nav className="flex flex-col space-y-4 w-1/2">
        <a href="#" className="text-white hover:underline transition duration-300 ease-in-out text-m">About Us </a>
        <a href="#" className="text-white hover:underline transition duration-300 ease-in-out text-m">Contact Us</a>
        <a href="#" className="text-white hover:underline transition duration-300 ease-in-out text-m">FAQ</a>
      </nav>

      <div className="flex flex-col items-start pr-[7rem]">
        <h3 className="text-l font-semibold pb-4">Get in Touch</h3>
        <p className="text-m"><span className="font-bold">Contact us :</span>+91 78753 58797</p>
        <p className="text-m"><span className="font-bold">Email us : </span>support@ApnaShop.com</p>
      </div>
    </div>

    <hr className="w-[72rem] border-1 border-white-300 my-5 ml-[2rem]"/>

    <div className="flex items-start pb-10 pt-8">
      <div className="flex items-start">
        <h3 className="text-m font-semibold pl-[4rem]">&copy; 2024 ApnaShop.com</h3>
      </div>


      <div className="flex pl-[45rem]">
        <ul className="flex">
          <li><a href="#" className="text-white hover:underline text-sm">Privacy Policy</a> I</li>
          <li><a href="#" className=" text-white hover:underline pl-2 text-sm">Terms of Service</a></li>
        </ul>
      </div>

    </div>
  </footer>
		</>
	);
}

export default Layout;
