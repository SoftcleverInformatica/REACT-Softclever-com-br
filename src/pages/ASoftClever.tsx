import DataCounters from "../components/DataCounters"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Menu from "../components/Menu"
import Whatsapp from "../components/Whatsapp"

function ASoftClever() {
	return (
		<>
			<Menu />
			<Header title={"A Soft Clever"} subtitle="Nossos valores" />
			<main className="flex w-full flex-col items-center justify-center p-8">
				<div className="item-center flex w-full flex-col justify-center gap-8 sm:max-w-3xl lg:max-w-screen-lg lg:flex-row lg:gap-0">
					<div className="flex w-full flex-col gap-8 sm:max-w-3xl lg:max-w-screen-lg lg:flex-row">
						<div className="flex w-full flex-col gap-8 self-center lg:max-w-[67%] lg:flex-row">
							<p className="w-full text-base font-medium text-[#3c4a54]">
								A Soft Clever tem uma trajetória sólida no desenvolvimento de sistemas desde 1994. Com mais de 12.000 usuários atendidos e
								inúmeras parcerias estabelecidas com escritórios de contabilidade, nossa empresa está empenhada em oferecer um serviço cada vez
								mais aprimorado. Nosso segredo reside no compromisso com a excelência, priorizando o bem-estar de nossos clientes e buscando
								sempre orientá-los para as melhores decisões. Isso resulta em confiança e satisfação em cada interação com nossos serviços.
							</p>
							<p className="w-full text-base font-medium text-[#3c4a54]">
								Contamos com uma equipe altamente qualificada e própria, capacitada para atender às diversas demandas do mercado com agilidade e
								comprometimento. A fidelidade de nossos clientes é a maior prova da qualidade dos serviços que oferecemos. Desenvolvemos
								projetos específicos para empresas de todos os tamanhos, desde microempreendimentos até médias empresas, adaptando-nos às
								necessidades individuais de cada cliente.
							</p>
						</div>
						<div className="flex w-full flex-col gap-8 lg:max-w-[33%]">
							<img
								src="images/jpg/a-soft-clever.jpg"
								alt="2 Homens vestidos de terno e roupas sociais apertando a mão ao fechar um acordo bem sucedido"
								className="w-full"
							/>
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

export default ASoftClever
