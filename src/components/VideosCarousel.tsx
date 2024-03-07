import React, { useCallback, useEffect, useState } from "react"

interface VideosCarouselProps {
	videos: string[] // Alterado para aceitar links do YouTube
}

const VideosCarousel: React.FC<VideosCarouselProps> = ({ videos }) => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [translateX, setTranslateX] = useState(0)
	const [autoPlay, setAutoPlay] = useState(true)
	const [numDots, setNumDots] = useState(videos.length)

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

	const goToSlide = (index: number) => {
		setCurrentSlide(index)
	}

	useEffect(() => {
		const handleResize = () => {
			const windowWidth = window.innerWidth
			if (windowWidth < 640) {
				setNumDots(videos.length)
				setTranslateX(currentSlide * 100)
			} else if (windowWidth >= 640 && windowWidth < 1024) {
				setNumDots(videos.length - 1)
				setTranslateX(currentSlide * (100 / 2))
			} else {
				setNumDots(videos.length - 2)
				setTranslateX(currentSlide * (100 / 3))
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
	}, [currentSlide, autoPlay, videos, nextSlide])

	const handlePause = () => {
		setAutoPlay(false)
		setTimeout(() => {
			setAutoPlay(true)
		}, 15000)
	}

	return (
		<div className="item-center flex w-full justify-center bg-background p-8 sm:p-16">
			<div className="item-center flex w-full flex-col justify-center gap-2 bg-background lg:max-w-screen-lg">
				<div className="relative w-full" onClick={handlePause}>
					<div className="overflow-hidden rounded-md">
						<div className="flex" style={{ transform: `translateX(-${translateX}%)`, transition: "transform 0.5s" }}>
							{videos.map((video, index) => (
								<div key={index} className="relative w-full flex-none overflow-hidden sm:w-1/2 lg:w-1/3">
									<div className="relative sm:px-4">
										<iframe
											src={getEmbedLink(video)} // Obtém o link de incorporação do YouTube
											title={`YouTube Video ${index}`} // Título para acessibilidade
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" // Permissões
											allowFullScreen // Habilita o modo de tela cheia
											className="aspect-video h-full w-full rounded-md"
											// Remova o listener de eventos quando o componente é desmontado
											// para evitar vazamentos de memória
											onLoad={(e) => {
												const iframe = e.currentTarget
												return () => {
													iframe.contentWindow?.removeEventListener("scroll", handlePause)
												}
											}}
										></iframe>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="absolute bottom-[-16px] left-1/2 flex -translate-x-1/2 transform space-x-2">
						{Array.from(Array(numDots), (_, index) => (
							<button
								key={index}
								onClick={() => goToSlide(index)}
								className={`h-2 w-2 rounded-full border-1 border-second transition-all hover:bg-second ${index === currentSlide ? "w-4 bg-second" : "bg-transparent"}`}
							></button>
						))}
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
function getEmbedLink(link: string): string {
	// Extrai o ID do vídeo do link do YouTube
	const videoId = link.split("v=")[1]
	// Retorna o link de incorporação formatado
	return `https://www.youtube.com/embed/${videoId}`
}

export default VideosCarousel
