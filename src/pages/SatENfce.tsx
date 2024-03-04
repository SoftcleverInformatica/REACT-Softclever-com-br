import DataCounters from "../components/DataCounters"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Menu from "../components/Menu"
import SupportWhatsapp from "../components/SupportWhatsapp"
import Whatsapp from "../components/Whatsapp"

function SatENfce() {
	return (
		<>
			<Menu />
			<Header title={"S@T – NFC-E"} subtitle="Ideal para pequenos e médios comércios e varejistas" />
			<main className="flex w-full flex-col items-center justify-center gap-8 p-8 sm:p-16">
				<div className="item-center flex w-full flex-col justify-center gap-8 sm:max-w-3xl lg:max-w-screen-lg lg:flex-row lg:gap-0 ">
					<div className="flex w-full flex-col gap-8 sm:max-w-3xl lg:max-w-screen-lg lg:flex-row">
						<div className="flex w-full flex-col gap-8 self-center lg:max-w-[67%] lg:flex-row">
							<p className="w-full text-base font-medium text-[#3c4a54]">
								Desde 1994 e milhares de clientes atendidos. Procurando atender cada vez melhor, o nosso segredo está no comprometimento com
								nosso trabalho, pensando sempre no bem estar de nossos clientes com o compromisso de sempre resolver e orientar para melhor
								decisão, gerando assim confiança e satisfação nos nossos atendimentos.
							</p>
							<p className="w-full text-base font-medium text-[#3c4a54] ">
								Contando com uma equipe qualificada e laboratório próprio, atendemos todas as necessidades do mercado com agilidade e
								comprometimento. A fidelidade de nossos clientes é a melhor demonstração de qualidade dos nossos serviços. Desenvolvemos
								projetos específicos para todo tipo de empresas, seja ela micro, pequena ou de médio porte.
							</p>
						</div>
						<div className="flex w-full flex-col gap-8 lg:max-w-[33%]">
							<SupportWhatsapp />
						</div>
					</div>
				</div>
				<div className="item-center flex w-full flex-col justify-center gap-8 sm:max-w-3xl lg:max-w-screen-lg lg:flex-row lg:gap-0 ">
					<div className="flex w-full flex-col gap-8 lg:flex-row">
						<div className="flex w-full flex-col gap-4 self-center lg:max-w-[67%]">
							<h3 className="w-full font-bold text-third">O QUE NÓS FAZEMOS</h3>
							<h2 className="w-full text-3xl font-black text-second">Soluções</h2>
							<p className="w-full text-base font-medium text-[#3c4a54] ">
								Com mais de 25 anos de experiência, nossa equipe treinada esta apta a resolver em um curto prazo de tempo qualquer necessidade
								dos nossos clientes com as melhores ferramentas do mercado de TI. Muito mais do que um cliente, tratamos a sua empresa como
								membro do nosso grupo.
							</p>
						</div>
					</div>
				</div>
				<DataCounters />
			</main>
			<Footer />
			<Whatsapp />
		</>
	)
}

export default SatENfce
