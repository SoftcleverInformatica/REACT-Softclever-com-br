import ClientsCarousel from "../components/carousels/ClientsCarousel"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Menu from "../components/Menu"
import Whatsapp from "../components/Whatsapp"

function Clientes() {
	return (
		<>
			<Menu />
			<Header title={"Nossos Clientes"} subtitle="PARCEIROS DE NEGÓCIOS" />
			<main className="flex w-full flex-col items-center justify-center">
				<div className="item-center flex w-full flex-col justify-center gap-8 px-8 pb-8 sm:px-16 sm:pb-0 lg:flex-row lg:gap-0">
					<div className="flex w-full flex-col items-center justify-center gap-8 sm:max-w-3xl lg:max-w-screen-lg lg:flex-row">
						<div className="flex flex-col gap-6 py-8">
							<p className="w-full text-base font-medium text-[#3c4a54]">
								Nós da Soft Clever temos o intuito de ter sua empresa como membro do nosso grupo e não somente como mais um cliente.
							</p>
							<h2 className="w-full pt-4 text-3xl font-black text-second">Veja abaixo as avaliações recebidas:</h2>
							<p className="w-full text-base font-medium text-[#3c4a54]">
								A Soft Clever desenvolve soluções em sistemas desde 1994. São mais de 12.000 usuários atendidos ao longo destes 30 anos e
								centenas de parcerias firmadas com contabilidades.
							</p>
						</div>
						<img
							className="hidden w-1/3 self-end lg:block"
							src="assets/images/png/clients.png"
							alt="Um homem e uma mulher com roupas sociais apertando as mãos"
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

export default Clientes
