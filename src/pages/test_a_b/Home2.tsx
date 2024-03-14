import { ReactNode } from "react"
import { PiGearSixThin, PiHandbagThin, PiMoneyThin, PiStorefrontThin } from "react-icons/pi"
import { Link } from "react-router-dom"
import DataCounters from "../../components/DataCounters"
import Footer from "../../components/Footer"
import Menu from "../../components/Menu"
import Whatsapp from "../../components/Whatsapp"
import HomeBrandsCarousel from "./HomeBrandsCarousel"
import HomeCarousel2 from "./HomeCarousel2"

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
		image: "assets/images/jpg/varejista.jpg",
		title: "SOLUÇÕES PARA O COMÉRCIO VAREJISTA",
		text: "O Sírius S@T e NFCe oferece um software completo e simplificado para atender às necessidades do comércio varejista. Através de recursos como controle via WEB, APP Pré Vendas e Comandas, Market Place e Cartão de Crédito via TEF, proporcionamos uma gestão eficiente e descomplicada.",
	},
	{
		image: "assets/images/jpg/atacado.jpg",
		title: "SOLUÇÕES PARA ATACADO E DISTRIBUIÇÃO",
		text: "O Sírius ERP oferece um software completo e automatizado para o setor de atacado e distribuição. Com recursos especializados para emissão de NFEs e CTEs, controle de vendas, financeiro, compras, SPED Fiscal e Bloco K, garantimos uma gestão eficaz e integrada para o seu negócio.",
	},
	{
		image: "assets/images/jpg/assistencia.jpg",
		title: "SOLUÇÕES PARA SERVIÇOS E ASSISTÊNCIAS TÉCNICAS",
		text: "O Sírius Serviços oferece um software completo e automatizado para empresas de serviços e assistências técnicas. Com recursos para emissão de Ordens de Serviços, Orçamentos, Notas Fiscais de Serviços, garantimos uma gestão simplificada e eficiente para o seu segmento.",
	},
	{
		image: "assets/images/jpg/fabril.jpg",
		title: "SOLUÇÕES PARA PRODUÇÃO / FABRIL",
		text: "O Sírius ERP oferece uma solução completa para a produção fabril. Com controles precisos e recursos facilitados para emissão de Ordens de Produção, controle de matérias-primas, produtos acabados, garantimos uma gestão otimizada e eficaz para o seu negócio.",
	},
]

const cards = [
	{
		icon: <PiStorefrontThin className="-translate-x-1 text-third" size={60} />,
		title: "SAT e NFC-e",
		text: "Ideal para pequenos e médios comércios, o Sírius S@T e NFCe oferece uma solução completa e descomplicada para atender às exigências fiscais do varejo.",
		link: "sat-e-nfc-e",
	},
	{
		icon: <PiGearSixThin className="-translate-x-1 text-third" size={60} />,
		title: "Gestão ERP",
		text: "Com o Sírius ERP, tenha uma gestão empresarial completa e eficiente, garantindo o melhor custo-benefício para o seu negócio.",
		link: "gestao-erp",
	},
	{
		icon: <PiMoneyThin className="-translate-x-1 text-third" size={60} />,
		title: "Soluções Fiscais",
		text: "Essencial para todos os tipos de negócios, as Soluções Fiscais do Sírius oferecem o controle necessário para cumprir as obrigações fiscais com facilidade.",
		link: "solucoes-fiscais",
	},
	{
		icon: <PiHandbagThin className="-translate-x-1 text-third" size={60} />,
		title: "SPED e Bloco K",
		text: "Gerencie os impostos de entrada e saída dos produtos de forma eficaz com o Sírius SPED e Bloco K, garantindo conformidade fiscal e organização financeira.",
		link: "sped-e-bloco-k",
	},
]

const Card = ({ icon, title, text, link }: Card) => {
	return (
		<Link
			to={link}
			className="flex h-full w-full flex-col gap-4 bg-white p-6 shadow-md transition-all hover:-translate-y-4 hover:cursor-pointer hover:shadow-[0_10px_24px_rgba(0,0,0,0.3)] sm:max-w-[48%] lg:max-w-[25%]"
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
			<img src={image} alt={`Imagem de ${title}`} />
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
		<section className="item-center flex w-full flex-col justify-center gap-8 sm:max-w-3xl lg:max-w-screen-lg lg:flex-row lg:gap-0">
			<div className="flex w-full flex-col flex-wrap items-stretch justify-between gap-4 p-4 sm:max-w-3xl sm:flex-row lg:max-w-screen-lg lg:-translate-y-[6rem] lg:flex-nowrap xl:p-0">
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
				<h3 className="w-full font-bold text-third">SOLUÇÕES PARA O SEU NEGÓCIO</h3>
				<h2 className="w-full text-3xl font-black text-second">Segmentos Atendidos</h2>
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
				<HomeCarousel2 />
				<Cards />
				<section className="flex w-full flex-col items-center justify-center gap-8 p-8 md:p-16 lg:-translate-y-10 lg:flex-row lg:gap-0 xl:py-0">
					<div className="flex w-full flex-col gap-8 sm:max-w-3xl lg:max-w-screen-lg lg:flex-row">
						<iframe
							src="https://www.youtube.com/embed/83Pxy3TwN2w"
							title="Vídeo da entrevista do quadro Empresários de Sucesso"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							className="aspect-video w-full rounded-md lg:max-w-[50%]"
						></iframe>
						<div className="flex w-full flex-col gap-4 self-center lg:max-w-[50%]">
							<h3 className="w-full font-bold text-third">A Soft Clever</h3>
							<h2 className="w-full text-3xl font-black text-second">Mais de {new Date().getFullYear() - 1994} anos de experiência</h2>
							<p className="w-full text-base font-medium text-[#3c4a54]">
								Com mais de {new Date().getFullYear() - 1994} anos de experiência, nossa equipe treinada está apta para resolver em um curto
								prazo de tempo qualquer necessidade dos nossos clientes com as melhores ferramentas do mercado de TI.
							</p>
						</div>
					</div>
				</section>
				<PageCards />
				<section className="flex w-full flex-col flex-wrap items-center justify-center gap-8 bg-header bg-cover bg-center px-8 py-32 md:px-16">
					<h2 className="w-full max-w-2xl text-center text-2xl font-black text-white">
						"Muito mais do que um cliente, tratamos a sua empresa como membro do{" "}
						<span className="underline decoration-third decoration-4">nosso grupo.</span>"
					</h2>
					<h2 className="w-full max-w-2xl text-center text-2xl font-black text-white">São mais de 12000 clientes atendidos desde 1994.</h2>
					<HomeBrandsCarousel />
				</section>
				<section className="flex w-full flex-col items-center justify-center gap-8 bg-background p-8 md:p-16 lg:flex-row lg:gap-0 xl:py-8">
					<div className="flex w-full flex-col gap-8 sm:max-w-3xl lg:max-w-screen-lg lg:flex-row">
						<div className="relative hidden w-full max-w-[50%] rounded-md lg:block">
							<img src="assets/images/png/illustrative-ui.png" className="absolute left-60 top-28 h-40 -translate-x-1/2 -translate-y-1/2" />
							<img src="assets/images/png/macOK.png" className="absolute left-48 top-40 h-40 -translate-x-1/2 -translate-y-1/2" />
						</div>
						<div className="flex w-full flex-col gap-4 self-center lg:max-w-[50%]">
							<h3 className="w-full font-bold text-third">Contabilidade, Software e Hardware</h3>
							<h2 className="w-full text-3xl font-black text-second">Seja nosso Parceiro</h2>
							<p className="w-full text-base font-medium text-[#3c4a54]">
								Disponibilizamos um modelo de parceria com benefícios exclusivos e especiais para Empresas de Software, Hardware e
								Contabilidades, proporcionando a melhor solução e modelo de negócio ao nosso cliente.
							</p>
							<p className="w-full text-base font-medium text-[#3c4a54]">Descubra todos os benefícios de se unir ao nosso time.</p>
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
