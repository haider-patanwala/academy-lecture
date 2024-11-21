import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import ArchivePage from "./ArchivePage";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Layout />}>
					<Route
						path='/product-archive'
						element={<ArchivePage />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);
