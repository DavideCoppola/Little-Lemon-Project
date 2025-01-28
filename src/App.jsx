// import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import MainContent from "./components/MainContent";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
]);

function App() {
	return (
		<>
			<Header />
			<RouterProvider router={router} />
			<Footer />
		</>
	);
}

export default App;
