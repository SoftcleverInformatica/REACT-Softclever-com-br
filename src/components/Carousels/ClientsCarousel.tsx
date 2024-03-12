import { useCallback, useEffect, useState } from "react"
import { FaStar } from "react-icons/fa6"

interface Reviews {
	image: string
	name: string
	message: string
	stars: number
	date: string
	showFullComment: boolean
}

function renderStars() {
	// Create an array of the desired number of stars
	return Array(5).fill(<FaStar className="text-black" size={15} />)
}

function ClientsCarousel() {
	const [reviews, setReviews] = useState<Reviews[]>([
		{
			name: "Aurelio Vari",
			image: "Aurelio Vari.png",
			// "localGuide": false,
			// "commentsQuantity": 1,
			// "photosQuantity": 0,
			stars: 5,
			date: "2 semanas atrás",
			message:
				"A Soft Cleber desde 2015 mantém um atendimento muito bom. Tem o domínio do software e da política financeira do governo. O custo de contrato mensal também está bem competitivo. Enfim, é uma boa empresa para contratar.",
			showFullComment: false,
		},
		{
			name: "Buker engrenagens",
			image: "Buker engrenagens.png",
			// "localGuide": false,
			// "commentsQuantity": 1,
			// "photosQuantity": 0,
			stars: 5,
			date: "2 semanas atrás",
			message:
				"A Soft Clever resolveu-me um problema que durante muito tempo a tentar resolver, sem sucesso. Analisaram com o máximo cuidado, conseguiram identificar o problema, e ver a melhor solução. Somos gratos por essa parceria de tanto tempo!!!!",
			showFullComment: false,
		},
		{
			name: "Rosely Barbosa",
			image: "Rosely Barbosa.png",
			// "localGuide": false,
			// "commentsQuantity": 2,
			// "photosQuantity": 0,
			stars: 5,
			date: "2 semanas atrás",
			message:
				"Trabalhamos com a Soft Clever há mais de 10 anos, sempre nos atendeu bem, com cordialidade e rapidez. Nossas solicitações sempre foram atendidas.",
			showFullComment: false,
		},
		{
			name: "RHVAUD VAUD",
			image: "RHVAUD VAUD.png",
			// "localGuide": false,
			// "commentsQuantity": 1,
			// "photosQuantity": 0,
			stars: 5,
			date: "3 semanas atrás",
			message:
				"O sistema é ágil e prático para emissão de notas fiscais. Sempre que surge algum problema, o pessoal do suporte são super competentes e atenciosos.",
			showFullComment: false,
		},
		{
			name: "AIA Embalagens",
			image: "AIA Embalagens.png",
			// "localGuide": false,
			// "commentsQuantity": 1,
			// "photosQuantity": 0,
			stars: 5,
			date: "3 semanas atrás",
			message:
				"adoro trabalhar com a equipe da soft clever, ERP descomplicado, funcionários sempre dispostos a ajudar, explicam e auxiliam sempre da melhor forma... super indico !",
			showFullComment: false,
		},
		{
			name: "Bax Festas",
			image: "Bax Festas.png",
			// "localGuide": 2,
			// "commentsQuantity": 1,
			// "photosQuantity": 0,
			stars: 5,
			date: "3 semanas atrás",
			message: "Excelente atendimento e rapidez para solucionar os problemas. Parceria duradoura e eficiente.",
			showFullComment: false,
		},
		{
			name: "Alex Cavalcante",
			image: "Alex Cavalcante.png",
			// "localGuide": false,
			// "commentsQuantity": 6,
			// "photosQuantity": 0,
			stars: 5,
			date: "3 semanas atrás",
			message: "Empresa muito prestativa sempre muito rápida para o atendimento e com muita postura, indico.",
			showFullComment: false,
		},
		{
			name: "Cristiano Boscariol",
			image: "Cristiano Boscariol.png",
			// "localGuide": false,
			// "commentsQuantity": 1,
			// "photosQuantity": 0,
			stars: 5,
			date: "2 semanas atrás",
			message: "Bom Atendimento , sempre sendo muito bem atendido ..",
			showFullComment: false,
		},
		{
			name: "Ana Maria Giamarini Couto",
			image: "Ana Maria Giamarini Couto.png",
			// "localGuide": false,
			// "commentsQuantity": 3,
			// "photosQuantity": 0,
			stars: 5,
			date: "3 semanas atrás",
			message: "Minha experiência está sendo boa, sendo atendida dentro da minha necessidade.",
			showFullComment: false,
		},
		{
			name: "Stefano Klein",
			image: "Stefano Klein.png",
			// "localGuide": false,
			// "commentsQuantity": 1,
			// "photosQuantity": 1,
			stars: 5,
			date: "3 semanas atrás",
			message: "Atendimento nota 10,paciência dos atendentes,( já se tornaram amigos) nota 10,meus parabens",
			showFullComment: false,
		},
		{
			name: "Valdeir Oliveira",
			image: "Valdeir Oliveira.png",
			// "localGuide": false,
			// "commentsQuantity": 1,
			// "photosQuantity": 1,
			stars: 5,
			date: "3 semanas atrás",
			message: "E muito bom o atendimento  com quem falei sempre  min atenderam muito bem estão  de parabéns",
			showFullComment: false,
		},
		{
			name: "renovando moda",
			image: "renovando moda.png",
			// "localGuide": false,
			// "commentsQuantity": 1,
			// "photosQuantity": 0,
			stars: 5,
			date: "3 semanas atrás",
			message: "ótimo atendimento e estão sempre com disposição para ajudar!",
			showFullComment: false,
		},
		{
			name: "Michelle Mendes",
			image: "Michelle Mendes.png",
			// "localGuide": true,
			// "commentsQuantity": 14,
			// "photosQuantity": 0,
			stars: 5,
			date: "3 semanas atrás",
			message: "Bons profissionais, sistema customizado e bom custo benefício!",
			showFullComment: false,
		},
		{
			name: "Stefanie Prado",
			image: "Stefanie Prado.png",
			// "localGuide": false,
			// "commentsQuantity": 1,
			// "photosQuantity": 0,
			stars: 5,
			date: "3 semanas atrás",
			message: "A soft Clever tem um atendimento maravilhoso,  super rápido e ágil.",
			showFullComment: false,
		},
		{
			name: "Pedro Lima",
			image: "Pedro Lima.png",
			// "localGuide": false,
			// "commentsQuantity": 1,
			// "photosQuantity": 0,
			stars: 5,
			date: "3 semanas atrás",
			message: "Excelente atendimento, sempre atenciosos no que precisar!",
			showFullComment: false,
		},
		{
			name: "Rita de Cassia Troiano Trindade",
			image: "Rita de Cassia Troiano Trindade.png",
			// "localGuide": false,
			// "commentsQuantity": 1,
			// "photosQuantity": 0,
			stars: 5,
			date: "2 semanas atrás",
			message: "Os serviços e explicações foram rápidas e claras.",
			showFullComment: false,
		},
		{
			name: "Cadiveu Academy",
			image: "Cadiveu Academy.png",
			// "localGuide": false,
			// "commentsQuantity": 1,
			// "photosQuantity": 0,
			stars: 5,
			date: "3 anos atrás",
			message:
				"Conheço o trabalho da empresa de longa data, são extremamente sérios e comprometidos com seus clientes. O suporte realmente funciona, estão sempre interessados em resolver os problemas e solucionar as nossas dúvidas, dá para perceber que eles realmente entendem do que estão falando.  Ás vezes o atendimento não acontece no exato momento que se liga, mas logo eles retornam a ligação. Sempre foram eficientes nas atualizações das versões por ocasião das mudanças na legislação fiscal, a parte da nota fiscal é totalmente automática. O sistema também é bem completo, com muitos recursos que possuem excelente funcionalidade, nós gostamos muito, apesar de raramente aparecerem algumas dificuldades no uso, mas o bacana é que no final alguém sempre ajuda a finalizar o trabalho. Estamos completamente satisfeitos!",
			showFullComment: false,
		},
		{
			name: "Caio Felipe de Mendonça",
			image: "Caio Felipe de Mendonca.png",
			// "localGuide": false,
			// "commentsQuantity": 1,
			// "photosQuantity": 0,
			stars: 5,
			date: "5 anos atrás",
			message:
				"Tenho o sistema da Soft Clever cerca de 7 anos e sempre recebi um atendimento excelente, tanto do suporte quanto do comercial. Sistema atende a todas as minhas necessidades e estou muito satisfeito. Já tive outros sistemas e só com o Sírius tive um custo beneficio muito positivo",
			showFullComment: false,
		},
		{
			name: "Edna Guaita",
			image: "Edna Guaita.png",
			// "localGuide": false,
			// "commentsQuantity": 1,
			// "photosQuantity": 1,
			stars: 5,
			date: "2 semanas atrás",
			message: "foi tudo normal",
			showFullComment: false,
		},
		{
			name: "Israel Bezerra",
			image: "Israel Bezerra.png",
			// "localGuide": false,
			// "commentsQuantity": 3,
			// "photosQuantity": 0,
			stars: 5,
			date: "3 semanas atrás",
			message: "Muito bom o atendimento e presteza!!",
			showFullComment: false,
		},
		{
			name: "Marcelo Doelitzschi",
			image: "Marcelo Doelitzschi.png",
			// "localGuide": false,
			// "commentsQuantity": 4,
			// "photosQuantity": 0,
			stars: 5,
			date: "6 anos atrás",
			message:
				"O comentário aqui quem voz faz, é de um conhecedor da qualidade tanto no desenvolvimento de sistemas quanto no atendimento direto ao cliente. Conhecedor a exatamente  14 anos, acompanhado todo o processo de evolução em tecnologia e capacitação de pessoal, indico sem sombra de dúvidas a empresa em questão.",
			showFullComment: false,
		},
		{
			name: "Larissa Romão",
			image: "Larissa Romao.png",
			// "localGuide": true,
			// "commentsQuantity": 18,
			// "photosQuantity": 0,
			stars: 5,
			date: "5 anos atrás",
			message:
				"Estou com o sistema a alguns anos, e durante este período recebi auxilio em todas as minhas solicitações. Não tenho reclamação quanto ao atendimento, comercial e do suporte, gosto bastante do sistema, pois é de simples manuseio.",
			showFullComment: false,
		},
		{
			name: "joao silva",
			image: "joao silva.png",
			// "localGuide": false,
			// "commentsQuantity": 1,
			// "photosQuantity": 0,
			stars: 5,
			date: "5 anos atrás",
			message:
				"O sistema atende a todas as necessidades do cliente, na sua forma modular, te proporciona conforto na contratação, atendimento perfeito no suporte com pessoas capacitadas. Sistema de fácil utilização e rapidez no atendimento ao consumidor final.",
			showFullComment: false,
		},
		{
			name: "Wendel Faria",
			image: "Wendel Faria.png",
			// "localGuide": true,
			// "commentsQuantity": 63,
			// "photosQuantity": 11,
			stars: 5,
			date: "3 semanas atrás",
			message: "Excelente empresa",
			showFullComment: false,
		},
		{
			name: "Simone Barbosa",
			image: "Simone Barbosa.png",
			// "localGuide": false,
			// "commentsQuantity": 3,
			// "photosQuantity": 0,
			stars: 5,
			date: "3 semanas atrás",
			message: "Atendimento excelente.",
			showFullComment: false,
		},
		{
			name: "Jessica Moniz de Souza",
			image: "Jessica Moniz de Souza.png",
			// "localGuide": false,
			// "commentsQuantity": 10,
			// "photosQuantity": 0,
			stars: 5,
			date: "6 anos atrás",
			message:
				"Software de qualidade, pratico, fácil de operar e que atende a todas as necessidade, suporte preparado para atender as duvidas do cliente, sem dúvida o melhor custo x beneficio que encontrei.",
			showFullComment: false,
		},
		{
			name: "Quezia Fabiana",
			image: "Quezia Fabiana.png",
			// "localGuide": true,
			// "commentsQuantity": 1,
			// "photosQuantity": 6,
			stars: 5,
			date: "5 anos atrás",
			message: "ótima empresa, não tenho reclamações, indico a todos meus conhecidos.",
			showFullComment: false,
		},
		{
			name: "Nanci Menezes",
			image: "Nanci Menezes.png",
			// "localGuide": false,
			// "commentsQuantity": 4,
			// "photosQuantity": 0,
			stars: 5,
			date: "3 semanas atrás",
			message: "Atendimento de qualidade.",
			showFullComment: false,
		},
		{
			name: "Leia Ferreira",
			image: "Leia Ferreira.png",
			// "localGuide": false,
			// "commentsQuantity": 1,
			// "photosQuantity": 0,
			stars: 5,
			date: "2 semanas atrás",
			message: "Excelente atendimento",
			showFullComment: false,
		},
		{
			name: "Flavia Nunes",
			image: "Flavia Nunes.png",
			// "localGuide": false,
			// "commentsQuantity": 2,
			// "photosQuantity": 0,
			stars: 5,
			date: "5 anos atrás",
			message: "Ótima empresa, soluções rápidas e cabiveis. super recomendo!!",
			showFullComment: false,
		},
		{
			name: "Residencial Pousada Cantinho Ocian",
			image: "Residencial Pousada Cantinho Ocian.png",
			// "localGuide": false,
			// "commentsQuantity": 4,
			// "photosQuantity": 7,
			stars: 5,
			date: "5 anos atrás",
			message: "O sistema atendê a nossas necessidades, suporte rápido e equipe prestativo.",
			showFullComment: false,
		},
		{
			name: "Rafaela Miranda",
			image: "Rafaela Miranda.png",
			// "localGuide": false,
			// "commentsQuantity": 3,
			// "photosQuantity": 0,
			stars: 5,
			date: "5 anos atrás",
			message: "ótima empresa, não tenho reclamações, indico a todos meus conhecidos.",
			showFullComment: false,
		},
		{
			name: "Kaique Chaves",
			image: "Kaique Chaves.png",
			// "localGuide": false,
			// "commentsQuantity": 3,
			// "photosQuantity": 0,
			stars: 5,
			date: "5 anos atrás",
			message: "Sistema fácil, utilizo a muito tempo. Recomendo para todos.",
			showFullComment: false,
		},
		{
			name: "Gus Almeida",
			image: "Gus Almeida.png",
			// "localGuide": false,
			// "commentsQuantity": 1,
			// "photosQuantity": 0,
			stars: 5,
			date: "5 anos atrás",
			message: "Ótima empresa, super indico a todos.",
			showFullComment: false,
		},
		{
			name: "Belsau beleza & saúde saúde",
			image: "Belsau beleza e saude saude.png",
			// "localGuide": false,
			// "commentsQuantity": 1,
			// "photosQuantity": 0,
			stars: 5,
			date: "5 anos atrás",
			message: "Empresa séria, atendimento de primeira. Cumpre o que promete.",
			showFullComment: false,
		},
		{
			name: "Laercio Inacio Da Rosa",
			image: "Laercio Inacio Da Rosa.png",
			// "localGuide": false,
			// "commentsQuantity": 1,
			// "photosQuantity": 0,
			stars: 5,
			date: "6 anos atrás",
			message: "Recebi tratamento de primeira, muito bom.",
			showFullComment: false,
		},
		{
			name: "Atelie - Ateliê da Linguiça",
			image: "Atelie da Linguica.png",
			// "localGuide": true,
			// "commentsQuantity": 92,
			// "photosQuantity": 11,
			stars: 5,
			date: "5 anos atrás",
			message: "Empresa séria e com pessoas competentes.",
			showFullComment: false,
		},
		{
			name: "Marcos Goulart",
			image: "Marcos Goulart.png",
			// "localGuide": false,
			// "commentsQuantity": 1,
			// "photosQuantity": 0,
			stars: 5,
			date: "5 anos atrás",
			message: "Melhor lugar, otimos atendentes <3",
			showFullComment: false,
		},
		{
			name: "Alek dias",
			image: "Alek dias.png",
			// "localGuide": true,
			// "commentsQuantity": 66,
			// "photosQuantity": 1,
			stars: 5,
			date: "5 anos atrás",
			message: "Tecnologia a favor da sua empresa.",
			showFullComment: false,
		},
		{
			name: "Tatiana Conti",
			image: "Tatiana Conti.png",
			// "localGuide": true,
			// "commentsQuantity": 92,
			// "photosQuantity": 4,
			stars: 5,
			date: "5 anos atrás",
			message: "Sempre nos atende no que precisamos.",
			showFullComment: false,
		},
		{
			name: "carolina romao",
			image: "carolina romao.png",
			// "localGuide": false,
			// "commentsQuantity": 1,
			// "photosQuantity": 0,
			stars: 5,
			date: "6 anos atrás",
			message: "Muito boa",
			showFullComment: false,
		},
		{
			name: "Douglas Gouveia",
			image: "Douglas Gouveia.png",
			// "localGuide": false,
			// "commentsQuantity": 3,
			// "photosQuantity": 0,
			stars: 5,
			date: "4 anos atrás",
			message: "Muito bom.",
			showFullComment: false,
		},
		{
			name: "Romaoromao Romao",
			image: "Romaoromao Romao.png",
			// "localGuide": true,
			// "commentsQuantity": 60,
			// "photosQuantity": 3,
			stars: 5,
			date: "um ano atrás",
			message: "Otimo",
			showFullComment: false,
		},
		{
			name: "Ellba Ferreira",
			image: "Ellba Ferreira.png",
			// "localGuide": false,
			// "commentsQuantity": 1,
			// "photosQuantity": 0,
			stars: 5,
			date: "18 horas atrás",
			message: "Sempre tive um excelente atendimento... realmente é uma empresa seria..",
			showFullComment: false,
		},
	])
	const [currentSlide, setCurrentSlide] = useState(0)
	const [translateX, setTranslateX] = useState(0)
	const [autoPlay, setAutoPlay] = useState(true)
	const [numDots, setNumDots] = useState(reviews.length)

	const nextSlide = useCallback(() => {
		if (currentSlide !== numDots - 1) {
			setCurrentSlide((prevSlide) => prevSlide + 1)
		} else {
			setCurrentSlide(0)
		}
	}, [currentSlide, numDots])

	const prevSlide = () => {
		if (currentSlide !== 0) {
			setCurrentSlide((prevSlide) => prevSlide - 1)
		} else {
			setCurrentSlide(numDots - 1)
		}
	}

	useEffect(() => {
		const handleResize = () => {
			const windowWidth = window.innerWidth
			if (windowWidth < 640) {
				setNumDots(reviews.length - 1)
				setTranslateX(currentSlide * 102)
			} else {
				setNumDots(reviews.length - 2)
				setTranslateX(currentSlide * (102 / 2))
			}
		}

		handleResize()

		const interval = setInterval(() => {
			if (autoPlay) {
				nextSlide()
			}
		}, 5000)

		window.addEventListener("resize", handleResize)

		return () => {
			clearInterval(interval)
			window.removeEventListener("resize", handleResize)
		}
	}, [currentSlide, autoPlay, nextSlide, reviews.length])

	const handlePause = () => {
		setAutoPlay(false)
		setTimeout(() => {
			setAutoPlay(true)
		}, 15000)
	}

	return (
		<div className="item-center flex w-full flex-col items-center justify-center gap-2 p-8">
			<div className="flex w-full max-w-screen-lg flex-col justify-center">
				<div className="relative w-full sm:px-8" onClick={handlePause}>
					<div className="overflow-hidden rounded-md">
						<div className="flex gap-[2%] " style={{ transform: `translateX(-${translateX}%)`, transition: "transform 0.5s" }}>
							{reviews.map((review, index) => (
								<div
									key={`review-${index}`}
									className="h- relative min-h-full w-full flex-none overflow-hidden rounded-lg bg-background p-4 sm:w-[49%]"
								>
									<div key={`review-content-${index}`} className="relative flex w-full gap-4">
										<img
											src={getImageSrc(review.image)} // Obtém o link de incorporação do YouTube
											key={`review-image-${index}`}
											className="aspect-square h-12 w-12 rounded-md"
										/>
										<div key={`review-info-${index}`} className="flex w-full flex-col gap-2 sm:gap-1 lg:gap-2">
											<p key={`review-name-${index}`} className="w-full text-xs font-bold text-[#3c4a54] sm:text-sm">
												{review.name}
											</p>
											<div key={`review-details-${index}`} className="flex flex-wrap items-end gap-1 lg:flex-nowrap">
												{renderStars()}
												<span
													key={`review-date-${index}`}
													className="h-[18px] w-fit align-bottom text-xs font-bold text-[#3c4a54] sm:text-sm"
												>
													{review.date}
												</span>
											</div>
										</div>
									</div>
									<div key={`review-text-${index}`} className="w-full pt-4">
										{review.showFullComment ? review.message : review.message.slice(0, 120)}
										{review.message.length > 120 && !review.showFullComment ? "... " : " "}
										{review.message.length > 120 && (
											<span
												key={`review-toggle-${index}`}
												className="cursor-pointer text-third underline"
												onClick={() => {
													const updatedReviews = [...reviews]
													updatedReviews[index].showFullComment = !reviews[index].showFullComment
													setReviews(updatedReviews)
												}}
											>
												{review.showFullComment ? "Ver menos" : "Ver mais"}
											</span>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
					<button
						className={`absolute left-0 top-1/2 flex h-8 w-8 -translate-y-1/2 transform items-center justify-center rounded-full bg-transparent font-black text-second sm:bg-second sm:text-white ${
							currentSlide === 0 ? "hidden" : ""
						}`}
						onClick={prevSlide}
					>
						{"<"}
					</button>
					<button
						className={`absolute right-0 top-1/2 flex h-8 w-8 -translate-y-1/2 transform items-center justify-center rounded-full bg-transparent font-black text-second sm:bg-second sm:text-white ${
							currentSlide === numDots - 1 ? "hidden" : ""
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

// Função para converter o link do YouTube em um link de incorporação
function getImageSrc(src: string): string {
	return `assets/images/reviews/${src}`
}

export default ClientsCarousel
