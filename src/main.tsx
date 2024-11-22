import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ArchivePage from "./ArchivePage";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Layout />}>
					<Route
						path='*'
						element={<NotFound />}
					/>
					<Route
						path='/product-archive'
						element={<ArchivePage />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
