import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

interface HomeCarouselProps {
	title: string
	subtitle: string
	text: string
	link: string
	image: string
}

const slides: HomeCarouselProps[] = [
	{
		title: "SEU COMÉRCIO DE MODO PRÁTICO E EFICAZ",
		subtitle: "SAT e NFC-e",
		text: "Sistema homologado na SEFAZ que atende qualquer tipo de comércio varejista, tais como: lojas, mercados, restaurantes, bares, autopeças, combustíveis, entre outros.",
		link: "sat-e-nfc-e",
		image: "sat.png",
	},
	{
		title: "SOFTWARE DE MELHOR CUSTO X BENEFICIO",
		subtitle: "Gestão ERP",
		text: "Software de Gestão Empresarial de melhor custo x benefício do mercado. Mais de 12 mil usuários atendidos desde 1994.",
		link: "gestao-erp",
		image: "erp.png",
	},
	{
		title: "MELHORES SOLUÇÕES FISCAIS DO MERCADO",
		subtitle: "Soluções Fiscais",
		text: "Ideal para todos os tipos de empresas e segmentos. Com recursos automatizados para a emissão de Notas Fiscais, Conhecimento de Transportes e Manifestos Fiscais. ",
		link: "solucoes-fiscais",
		image: "fiscal.png",
	},
	{
		title: "CONTROLE DA ENTRADA E SAÍDA DOS PRODUTOS",
		subtitle: "SPED e Bloco K",
		text: "Gerencie toda a área fiscal da sua empresa com o mais avançado Software para cálculo de impostos durante a entrada e saída de produtos.",
		link: "sped-e-bloco-k",
		image: "sped.png",
	},
	// Adicione mais slides conforme necessário
]

const HomeCarousel = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [autoPlay, setAutoPlay] = useState(true)

	useEffect(() => {
		const interval = setInterval(() => {
			if (autoPlay) {
				nextSlide()
			}
		}, 5000)

		return () => clearInterval(interval)
	}, [autoPlay])

	const nextSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
	}

	const prevSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1))
	}

	const handlePause = () => {
		setAutoPlay(false)
		setTimeout(() => {
			setAutoPlay(true)
		}, 30000)
	}

	const createWhatsappLink = (planName: string) => {
		const message = `Olá, gostaria de conhecer o plano *${planName}*.\n[_*URL:* www.softclever.com.br_]${location.pathname}.`
		return `https://web.whatsapp.com/send?phone=5511992810249&text=${encodeURIComponent(message)}`
	}

	return (
		<div className="item-center flex w-full flex-col items-center justify-center gap-2 bg-background bg-home bg-cover px-8 pt-8 sm:px-16 sm:pt-16">
			<div className="flex max-h-[110vh] w-full max-w-screen-lg flex-col justify-center">
				<div className="relative w-full" onClick={handlePause}>
					<div className="overflow-hidden rounded-md">
						<div className="flex" style={{ transform: `translateX(-${currentSlide * 100}%)`, transition: "transform 0.5s" }}>
							{slides.map((slide, index) => (
								<div key={index} className="w-full flex-none overflow-hidden">
									<div className="flex h-full justify-end px-4 sm:px-8">
										<div className="flex h-2/3 w-full flex-col justify-between gap-4 p-4 pb-16 lg:max-w-[60%] lg:p-0 lg:pl-5">
											<h2 className="w-full font-bold text-third">{slide.subtitle.toUpperCase()}</h2>
											<h1 className="w-full text-2xl font-extrabold text-second sm:text-4xl">{slide.title.toUpperCase()}</h1>
											<p className="w-full text-base font-medium text-[#3c4a54]">{slide.text}</p>
											<div className="flex w-full gap-4 self-end">
												<Link
													to={createWhatsappLink(slide.title)}
													className="flex h-fit w-1/2 items-center justify-center bg-third p-4 text-xs font-semibold text-white transition-all hover:bg-second hover:text-sm hover:shadow-[0_10px_24px_rgba(0,0,0,0.3)] sm:p-4 sm:text-sm"
												>
													CONSULTAR
												</Link>
												<Link
													to={slide.link}
													className="flex h-fit w-1/2 items-center justify-center rounded border-1 border-second bg-transparent px-2 py-4 text-xs font-semibold text-second transition-all hover:text-sm hover:shadow-[0_10px_24px_rgba(0,0,0,0.3)] sm:p-4 sm:text-sm"
												>
													SAIBA MAIS
												</Link>
											</div>
										</div>
										<img
											src={getImageSrc(slide.image)}
											className="hidden w-full max-w-[40%] rounded-md lg:block"
											alt={`Slide ${index + 1}`}
										/>
									</div>
								</div>
							))}
						</div>
					</div>
					<button
						className={`absolute left-0 top-1/2 flex h-8 w-8 -translate-y-1/2 transform items-center justify-center rounded-full bg-second font-black text-white ${
							currentSlide === 0 ? "hidden" : ""
						}`}
						onClick={prevSlide}
					>
						{"<"}
					</button>
					<button
						className={`absolute right-0 top-1/2 flex h-8 w-8 -translate-y-1/2 transform items-center justify-center rounded-full bg-second font-black text-white ${
							currentSlide === slides.length - 1 ? "hidden" : ""
						}`}
						onClick={nextSlide}
					>
						{">"}
					</button>
				</div>
			</div>
		</div>
	)
}

// Função para obter a URL da imagem
function getImageSrc(src: string): string {
	return `images/png/${src}`
}

export default HomeCarousel
