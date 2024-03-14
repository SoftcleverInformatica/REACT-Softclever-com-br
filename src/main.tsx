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
import SolucoesFiscais from "./pages/SolucoesFiscais.tsx"
import SpedEBlocoK from "./pages/SpedEBlocoK.tsx"
import Suporte from "./pages/Suporte.tsx"
import ASoftClever2 from "./pages/test_a_b/ASoftClever2.tsx"
import Clientes2 from "./pages/test_a_b/Clientes2.tsx"
import GestaoErp2 from "./pages/test_a_b/GestaoErp2.tsx"
import Home2 from "./pages/test_a_b/Home2.tsx"
import SatENfce2 from "./pages/test_a_b/SatENfce2.tsx"
import SolucoesFiscais2 from "./pages/test_a_b/SolucoesFiscais2.tsx"
import SpedEBlocoK2 from "./pages/test_a_b/SpedEBlocoK2.tsx"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/home2",
		element: <Home2 />,
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
	{
		path: "/solucoes-fiscais",
		element: <SolucoesFiscais />,
	},
	{
		path: "/sped-e-bloco-k",
		element: <SpedEBlocoK />,
	},
	{
		path: "/a-soft-clever2",
		element: <ASoftClever2 />,
	},
	{
		path: "/sat-e-nfc-e2",
		element: <SatENfce2 />,
	},
	{
		path: "/gestao-erp2",
		element: <GestaoErp2 />,
	},
	{
		path: "/solucoes-fiscais2",
		element: <SolucoesFiscais2 />,
	},
	{
		path: "/sped-e-bloco-k2",
		element: <SpedEBlocoK2 />,
	},
	{
		path: "/clientes2",
		element: <Clientes2 />,
	},
])

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<NextUIProvider>
			<RouterProvider router={router} />
		</NextUIProvider>
	</React.StrictMode>
)
