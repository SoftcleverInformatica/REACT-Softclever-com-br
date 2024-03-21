import { createBrowserRouter } from "react-router-dom"
import ASoftClever from "../pages/ASoftClever"
import Clientes from "../pages/Clientes"
import Contato from "../pages/Contato"
import GestaoErp from "../pages/GestaoErp"
import Home from "../pages/Home"
import Obrigado from "../pages/Obrigado"
import PoliticaDePrivacidade from "../pages/PoliticaDePrivacidade"
import SatENfce from "../pages/SatENfce"
import SolucoesFiscais from "../pages/SolucoesFiscais"
import SpedEBlocoK from "../pages/SpedEBlocoK"
import Suporte from "../pages/Suporte"

export const router = createBrowserRouter([
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
		path: "/obrigado",
		element: <Obrigado />,
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
])
