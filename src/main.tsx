import { NextUIProvider } from "@nextui-org/react"
import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import ASoftClever from "./pages/ASoftClever.tsx"
import Home from "./pages/Home.tsx"
import PoliticaDePrivacidade from "./pages/PoliticaDePrivacidade.tsx"
import Suporte from "./pages/Suporte.tsx"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/politica-de-privacidade",
		element: <PoliticaDePrivacidade />,
	},
	{
		path: "/a-soft-clever",
		element: <ASoftClever />,
	},
	{
		path: "/suporte",
		element: <Suporte />,
	},
])

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<NextUIProvider>
			<RouterProvider router={router} />
		</NextUIProvider>
	</React.StrictMode>
)
