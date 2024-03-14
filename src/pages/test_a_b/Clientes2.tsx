import ClientsCarousel from "../../components/Carousels/ClientsCarousel"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Whatsapp from "../../components/Whatsapp"
import Menu2 from "./Menu2"

function Clientes2() {
	return (
		<>
			<Menu2 />
			<Header title={"Nossos Clientes"} subtitle="PARCEIROS DE NEGÓCIOS" />
			<main className="flex w-full flex-col items-center justify-center">
				<div className="item-center flex w-full flex-col justify-center gap-8 px-8 pb-8 sm:px-16 sm:pb-0 lg:flex-row lg:gap-0">
					<div className="flex w-full flex-col items-center justify-center gap-8 sm:max-w-3xl lg:max-w-screen-lg lg:flex-row">
						<div className="flex flex-col gap-6 py-8">
							<p className="w-full text-base font-medium text-[#3c4a54]">
								Na Soft Clever, nosso objetivo é mais do que apenas ter sua empresa como cliente; queremos que faça parte do nosso grupo.
							</p>
							<h2 className="w-full pt-4 text-3xl font-black text-second">Avaliações dos Nossos Clientes:</h2>
							<p className="w-full text-base font-medium text-[#3c4a54]">
								Desde 1994, a Soft Clever desenvolve soluções em sistemas. Ao longo desses 30 anos, já atendemos mais de 12.000 usuários e
								estabelecemos centenas de parcerias com escritórios de contabilidade.
							</p>
						</div>
						<img
							className="hidden w-1/3 self-end lg:block"
							src="assets/images/png/clients.png"
							alt="Um homem e uma mulher vestidos formalmente apertando as mãos"
						/>
					</div>
				</div>
				<ClientsCarousel />
			</main>
			<Footer />
			<Whatsapp />
		</>
	)
}

export default Clientes2
