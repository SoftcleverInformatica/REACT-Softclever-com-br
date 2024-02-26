import Footer from "../components/Footer"
import Menu from "../components/Menu"
import Whatsapp from "../components/Whatsapp"

function PoliticaDePrivacidade() {
	return (
		<>
			<Menu />
			<div className="flex w-full items-center justify-center bg-slate-100 p-8">
				<h1 className="w-full max-w-lg bg-slate-100 text-2xl font-extrabold text-second sm:max-w-3xl sm:text-4xl lg:max-w-5xl">
					Política de Privacidade
				</h1>
			</div>
			<div className="flex w-full items-center justify-center bg-slate-100 p-8">
				<h2 className="w-full max-w-lg bg-slate-100 text-xl font-extrabold text-second sm:max-w-3xl sm:text-2xl lg:max-w-5xl">
					Política de Privacidade
				</h2>
			</div>
			<Footer />
			<Whatsapp />
		</>
	)
}

export default PoliticaDePrivacidade
