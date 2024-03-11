import { ReactNode } from "react"
import { PiGearSixThin, PiHandbagThin, PiMoneyThin, PiStorefrontThin } from "react-icons/pi"
import { Link } from "react-router-dom"
import HomeCarousel from "../components/Carousels/HomeCarousel"
import DataCounters from "../components/DataCounters"
import Footer from "../components/Footer"
import Menu from "../components/Menu"
import Whatsapp from "../components/Whatsapp"

interface Card {
	icon: ReactNode
	title: string
	text: string
	link: string
}

interface PageCard {
	image: string
	title: string
	text: string
}

const pageCards = [
	{
		image: "images/jpg/varejista.jpg",
		title: "COMÉRCIO VAREJISTA",
		text: "Software completo para o Comércio Varejista. O Sírius S@T e NFCe oferece recursos facilitados e controles via WEB, APP Pré Vendas e Comandas, Market Place, Cartão de Crédito via TEF...",
	},
	{
		image: "images/jpg/atacado.jpg",
		title: "ATACADO E DISTRIBUIÇÃO",
		text: "Software completo para o Atacado e Distribuição. O Sírius ERP oferece recursos automatizados para emissão de NFEs e CTEs, Controle de Vendas, Financeiro, Compras, SPED Fiscal, Bloco K...",
	},
	{
		image: "images/jpg/assistencia.jpg",
		title: "SERVIÇOS E ASSISTÊNCIAS TÉCNICAS",
		text: "Software completo para o Serviços e Assistências Técnicas. O Sírius Serviços oferece recursos automatizados para emissão de Ordens de Serviços, Orçamentos, Notas Fiscais de Serviços...",
	},
	{
		image: "images/jpg/fabril.jpg",
		title: "PRODUÇÃO / FABRIL",
		text: "Software completo para a Produção Fabril. O Sírius ERP oferece controles e recursos facilitados para a emissão de Ordens de Produção, Controle de Matérias Primas, Produtos Acabados...",
	},
]

const cards = [
	{
		icon: <PiStorefrontThin className="-translate-x-1 text-third" size={60} />,
		title: "SAT e NFC-e",
		text: "Ideal para pequenos e médios comércios.",
		link: "sat-e-nfc-e",
	},
	{
		icon: <PiGearSixThin className="-translate-x-1 text-third" size={60} />,
		title: "Gestão ERP",
		text: "Gestão Empresarial de melhor custo benefício.",
		link: "gestao-erp",
	},
	{
		icon: <PiMoneyThin className="-translate-x-1 text-third" size={60} />,
		title: "Soluções Fiscais",
		text: "Necessário para todos os tipos de negócios.",
		link: "solucoes-fiscais",
	},
	{
		icon: <PiHandbagThin className="-translate-x-1 text-third" size={60} />,
		title: "SPED e Bloco K",
		text: "Impostos de Entrada e Saída dos produtos.",
		link: "sped-e-bloco-k",
	},
]

const Card = ({ icon, title, text, link }: Card) => {
	return (
		<Link
			to={link}
			className="flex h-fit w-full flex-col gap-4 bg-white p-6 shadow-md transition-all hover:-translate-y-4 hover:cursor-pointer hover:shadow-[0_10px_24px_rgba(0,0,0,0.3)] sm:max-w-[48%] lg:max-w-[25%]"
		>
			{icon}
			<h3 className="w-full text-lg font-extrabold text-second">{title}</h3>
			<p className="w-full text-base text-[#3c4a54]">{text}</p>
		</Link>
	)
}

const PageCard = ({ image, title, text }: PageCard) => {
	return (
		<div className="grid-item overflow-hidden rounded-md bg-white shadow-md">
			<img src={image} alt="Imagem de varejista" />
			<div className="flex flex-col gap-4 p-8">
				<h4 className="text-xl font-bold text-second">{title}</h4>
				<h3 className="text-sm text-third">SOLUÇÕES:</h3>
				<p className="text-base font-medium text-[#3c4a54]">{text}</p>
				<a href="/contato" className="w-fit rounded bg-third p-2 text-sm font-bold text-white transition-all hover:bg-second hover:text-xs">
					Solicite contato
				</a>
			</div>
		</div>
	)
}

const Cards = () => {
	return (
		<section className="item-center flex w-full flex-col justify-center gap-8 sm:max-w-3xl lg:h-28 lg:max-w-screen-lg lg:flex-row lg:gap-0">
			<div className="flex w-full flex-col flex-wrap justify-between gap-4 p-4 sm:max-w-3xl sm:flex-row lg:max-w-screen-lg lg:-translate-y-[10rem] lg:flex-nowrap xl:p-0">
				{cards.map((card, index) => (
					<Card key={index} icon={card.icon} title={card.title} text={card.text} link={card.link}></Card>
				))}
			</div>
		</section>
	)
}

const PageCards = () => {
	return (
		<section className="flex w-full justify-center bg-background p-8 md:p-16">
			<div className="flex w-full flex-col gap-4 sm:max-w-3xl lg:max-w-screen-lg">
				<h3 className="w-full font-bold text-third">PARA A SUA EMPRESA</h3>
				<h2 className="w-full text-3xl font-black text-second">Segmentos atendidos</h2>
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-4">
					{pageCards.map((pageCard, index) => (
						<PageCard key={index} image={pageCard.image} title={pageCard.title} text={pageCard.text}></PageCard>
					))}
				</div>
			</div>
		</section>
	)
}

function Home() {
	return (
		<>
			<Menu />
			<main className="flex w-full flex-col items-center justify-center">
				<HomeCarousel />
				<Cards />
				<section className="flex w-full flex-col items-center justify-center gap-8 p-8 md:p-16 lg:flex-row lg:gap-0 xl:py-8">
					<div className="flex w-full flex-col gap-8 sm:max-w-3xl lg:max-w-screen-lg lg:flex-row">
						<iframe
							src="https://www.youtube.com/embed/83Pxy3TwN2w"
							title="Vídeo da entrevista do quadro Empresários de Sucesso"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							className="aspect-video w-full rounded-md lg:max-w-[50%]"
						></iframe>
						<div className="flex w-full flex-col gap-4 self-center lg:max-w-[50%]">
							<h3 className="w-full font-bold text-third">A SOFT CLEVER</h3>
							<h2 className="w-full text-3xl font-black text-second">Mais de 28 anos de experiência</h2>
							<p className="w-full text-base font-medium text-[#3c4a54]">
								Com mais de 25 anos de experiência, nossa equipe treinada esta apta a resolver em um curto prazo de tempo qualquer necessidade
								dos nossos clientes com as melhores ferramentas do mercado de TI. Muito mais do que um cliente, tratamos a sua empresa como
								membro do nosso grupo.
							</p>
						</div>
					</div>
				</section>
				<PageCards />
				<section className="flex w-full flex-col flex-wrap items-center justify-center gap-8 bg-header bg-cover bg-center px-8 py-32 md:px-16">
					<h2 className="w-full max-w-2xl text-center text-2xl font-black text-white">
						"Muito mais do que um cliente, tratamos a sua empresa como membro do nosso grupo."
					</h2>
					<div className="grid w-full max-w-screen-lg grid-cols-1 gap-8 sm:grid-cols-6 md:px-16 lg:px-32">
						<img src="images/clients/rikwil.png" alt="" className="grid-item w-32 justify-self-center" />
						<img src="images/clients/otica-indaia.png" alt="" className="grid-item w-32 justify-self-center" />
						<img src="images/clients/villa-cerroni.png" alt="" className="grid-item w-32 justify-self-center" />
						<img src="images/clients/cia-das-letras.png" alt="" className="grid-item w-32 justify-self-center" />
						<img src="images/clients/yhalub.png" alt="" className="grid-item w-32 justify-self-center" />
						<img src="images/clients/colormix-white.png" alt="" className="grid-item w-32 justify-self-center" />
					</div>
				</section>
				<section className="flex w-full flex-col items-center justify-center gap-8 bg-background p-8 md:p-16 lg:flex-row lg:gap-0 xl:py-8">
					<div className="flex w-full flex-col gap-8 sm:max-w-3xl lg:max-w-screen-lg lg:flex-row">
						<div className="relative hidden w-full max-w-[50%] rounded-md lg:block">
							<img src="images/png/illustrative-ui.png" className="absolute left-60 top-28 h-40 -translate-x-1/2 -translate-y-1/2"></img>
							<img src="images/png/macOK.png" className="absolute left-48 top-40 h-40 -translate-x-1/2 -translate-y-1/2"></img>
						</div>
						<div className="flex w-full flex-col gap-4 self-center lg:max-w-[50%]">
							<h3 className="w-full font-bold text-third">A SOFT CLEVER</h3>
							<h2 className="w-full text-3xl font-black text-second">Mais de 28 anos de experiência</h2>
							<p className="w-full text-base font-medium text-[#3c4a54]">
								Com mais de 25 anos de experiência, nossa equipe treinada esta apta a resolver em um curto prazo de tempo qualquer necessidade
								dos nossos clientes com as melhores ferramentas do mercado de TI. Muito mais do que um cliente, tratamos a sua empresa como
								membro do nosso grupo.
							</p>
						</div>
					</div>
				</section>
				<DataCounters />
			</main>
			<Footer />
			<Whatsapp />
		</>
	)
}

export default Home
