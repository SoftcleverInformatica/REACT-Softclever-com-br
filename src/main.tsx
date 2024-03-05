import { NextUIProvider } from "@nextui-org/react"
import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import ASoftClever from "./pages/ASoftClever.tsx"
import Clientes from "./pages/Clientes.tsx"
import Contato from "./pages/Contato.tsx"
import GestaoErp from "./pages/GestaoErp.tsx"
import Home from "./pages/Home.tsx"
import PoliticaDePrivacidade from "./pages/PoliticaDePrivacidade.tsx"
import SatENfce from "./pages/SatENfce.tsx"
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
		path: "/clientes",
		element: <Clientes />,
	},
	{
		path: "/contato",
		element: <Contato />,
	},
	{
		path: "/suporte",
		element: <Suporte />,
	},
	{
		path: "/sat-e-nfc-e",
		element: <SatENfce />,
	},
	{
		path: "/gestao-erp",
		element: <GestaoErp />,
	},
])

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<NextUIProvider>
			<RouterProvider router={router} />
		</NextUIProvider>
	</React.StrictMode>
)
