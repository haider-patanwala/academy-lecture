import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductPage";
import SingleProduct from "./components/SingleProduct";
import Test from "./components/Test";


function App() {
const router = createBrowserRouter([
	{
		path:"/",
		element:<HomePage/>
	},{
		path:"/products",
		element:<ProductPage/>
	},
	{
		path:"/products/:id",
		element:<SingleProduct/>
	},
	{
		path:"/test",
		element:<Test/>
	}
])

	return (
		<RouterProvider router={router} />
	)
}

export default App;
