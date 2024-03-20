import Footer from "../components/Footer"
import Menu from "../components/Menu"
import Whatsapp from "../components/Whatsapp"

function Obrigado() {
	return (
		<>
			<Menu />
			<main className="relative flex w-full flex-col items-center justify-center gap-8">
				<div className="item-center flex w-full flex-col justify-center gap-8 p-8 sm:p-16 lg:flex-row lg:gap-0">
					<h2 className="w-full max-w-2xl text-center text-2xl font-black text-second">OBRIGADO PELO CONTATO</h2>
				</div>
			</main>
			<Footer />
			<Whatsapp />
		</>
	)
}

export default Obrigado
