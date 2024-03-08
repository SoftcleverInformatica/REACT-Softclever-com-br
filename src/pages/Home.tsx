import { ReactNode } from "react"
import { PiGearSixThin, PiHandbagThin, PiMoneyThin, PiStorefrontThin } from "react-icons/pi"
import { Link } from "react-router-dom"
import HomeCarousel from "../components/Carousels/HomeCarousel"
import Footer from "../components/Footer"
import Menu from "../components/Menu"
import Whatsapp from "../components/Whatsapp"

interface Card {
	icon: ReactNode
	title: string
	text: string
	link: string
}

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

function Home() {
	return (
		<>
			<Menu />
			<main className="flex w-full flex-col items-center justify-center gap-8">
				<HomeCarousel />
				<section className="item-center flex w-full flex-col justify-center gap-8 sm:max-w-3xl lg:h-28 lg:max-w-screen-lg lg:flex-row lg:gap-0">
					<div className="flex w-full flex-col flex-wrap justify-between gap-4 p-4 sm:max-w-3xl sm:flex-row lg:max-w-screen-lg lg:-translate-y-[10rem] lg:flex-nowrap xl:p-0">
						{cards.map((card, index) => (
							<Card key={index} icon={card.icon} title={card.title} text={card.text} link={card.link}></Card>
						))}
					</div>
				</section>
				<section className="item-center flex w-full flex-col justify-center gap-8 p-8 sm:max-w-3xl lg:max-w-screen-lg lg:flex-row lg:gap-0 xl:p-0">
					<div className="flex w-full flex-col gap-8 lg:flex-row">
						<iframe
							src="https://www.youtube.com/embed/83Pxy3TwN2w"
							title="Vídeo da entrevista do quadro Empresários de Sucesso"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" // Permissões
							allowFullScreen // Habilita o modo de tela cheia
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
				<section className="w-full p-8 sm:max-w-3xl lg:max-w-screen-lg xl:p-0">
					<div className="flex w-full flex-col gap-4">
						<h3 className="w-full font-bold text-third">PARA A SUA EMPRESA</h3>
						<h2 className="w-full text-3xl font-black text-second">Segmentos atendidos</h2>
						<div className="flex w-full lg:flex-row">
							<div className="flex w-full flex-col gap-4 lg:max-w-[50%]">
								<img src="" alt="" />
								<h4 className="w-full font-bold text-second">A SOFT CLEVER</h4>
								<p className="w-full text-3xl font-black text-third">SOLUÇÕES:</p>
								<p className="w-full text-base font-medium text-[#3c4a54]">
									Com mais de 25 anos de experiência, nossa equipe treinada esta apta a resolver em um curto prazo de tempo qualquer
									necessidade dos nossos clientes com as melhores ferramentas do mercado de TI. Muito mais do que um cliente, tratamos a sua
									empresa como membro do nosso grupo.
								</p>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
			<Whatsapp />
		</>
	)
}

export default Home
