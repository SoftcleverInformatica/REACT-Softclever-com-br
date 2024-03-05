import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

function LateralNavBar() {
	const [activeLink, setActiveLink] = useState("")
	const location = useLocation()

	const handleMouseEnter = (path: string) => {
		setActiveLink(path)
	}

	const handleMouseLeave = () => {
		setActiveLink("")
	}

	const isLinkActive = (path: string) => {
		return activeLink === path || location.pathname === path
	}

	return (
		<nav className="flex w-full flex-col gap-4 rounded bg-second p-8">
			<Link
				to="/sat-e-nfc-e"
				className={`flex items-center gap-2 border-b-1 pb-2 font-medium transition ease-in-out hover:border-third ${isLinkActive("/sat-e-nfc-e") ? "border-third text-third" : "border-blue-300 text-white"}`}
				onMouseEnter={() => handleMouseEnter("/sat-e-nfc-e")}
				onMouseLeave={handleMouseLeave}
			>
				<p
					className={`flex h-4 w-4 items-center justify-center rounded-full border-1 text-center text-xs font-medium transition ease-in-out hover:border-third ${isLinkActive("/sat-e-nfc-e") ? "border-third text-third" : "border-white text-white"}`}
				>
					+
				</p>
				S@T E NFC-E
			</Link>
			<Link
				to="/gestao-erp"
				className={`flex items-center gap-2 border-b-1 pb-2 font-medium transition ease-in-out hover:border-third ${isLinkActive("/gestao-erp") ? "border-third text-third" : "border-blue-300 text-white"}`}
				onMouseEnter={() => handleMouseEnter("/gestao-erp")}
				onMouseLeave={handleMouseLeave}
			>
				<p
					className={`flex h-4 w-4 items-center justify-center rounded-full border-1 text-center text-xs font-medium transition ease-in-out hover:border-third ${isLinkActive("/gestao-erp") ? "border-third text-third" : "border-white text-white"}`}
				>
					+
				</p>
				Gestão ERP
			</Link>
			<Link
				to="/solucoes-fiscais"
				className={`flex items-center gap-2 border-b-1 pb-2 font-medium transition ease-in-out hover:border-third ${isLinkActive("/solucoes-fiscais") ? "border-third text-third" : "border-blue-300 text-white"}`}
				onMouseEnter={() => handleMouseEnter("/solucoes-fiscais")}
				onMouseLeave={handleMouseLeave}
			>
				<p
					className={`flex h-4 w-4 items-center justify-center rounded-full border-1 text-center text-xs font-medium transition ease-in-out hover:border-third ${isLinkActive("/solucoes-fiscais") ? "border-third text-third" : "border-white text-white"}`}
				>
					+
				</p>
				Soluções Fiscais
			</Link>
			<Link
				to="/sped-e-bloco-k"
				className={`flex items-center gap-2 border-b-1 pb-2 font-medium transition ease-in-out hover:border-third ${isLinkActive("/sped-e-bloco-k") ? "border-third text-third" : "border-blue-300 text-white"}`}
				onMouseEnter={() => handleMouseEnter("/sped-e-bloco-k")}
				onMouseLeave={handleMouseLeave}
			>
				<p
					className={`flex h-4 w-4 items-center justify-center rounded-full border-1 text-center text-xs font-medium transition ${isLinkActive("/sped-e-bloco-k") ? "border-third text-third" : "border-white text-white"}`}
				>
					+
				</p>
				Sped e Bloco K
			</Link>
		</nav>
	)
}

export default LateralNavBar
