import React, { useEffect, useState } from "react"

interface ClientsCarouselProps {
	images: string[] // Alterado para aceitar links do YouTube
}

const ClientsCarousel: React.FC<ClientsCarouselProps> = ({ images }) => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [translateX, setTranslateX] = useState(0)
	const [autoPlay, setAutoPlay] = useState(true)
	const [numDots, setNumDots] = useState(images.length)

	const nextSlide = () => {
		if (currentSlide !== numDots - 1) {
			setCurrentSlide((prevSlide) => prevSlide + 1)
		} else {
			setCurrentSlide(0)
		}
	}

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
			if (windowWidth < 1024) {
				setNumDots(images.length - 1)
				setTranslateX(currentSlide * (100 / 2))
			} else {
				setNumDots(images.length - 3)
				setTranslateX(currentSlide * (100 / 4))
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
	}, [currentSlide, autoPlay, images, nextSlide])

	const handlePause = () => {
		setAutoPlay(false)
		setTimeout(() => {
			setAutoPlay(true)
		}, 15000)
	}

	return (
		<div className="item-center flex w-full flex-col items-center justify-center gap-2 bg-background p-8 sm:p-16">
			<div className="flex w-full max-w-screen-lg flex-col justify-center">
				<p className="text-ms font-bold text-third sm:text-sm">SOLUÇÕES</p>
				<h3 className="pb-6 text-2xl font-bold text-second sm:text-3xl">Vídeos demonstrativos</h3>
				<div className="relative w-full" onClick={handlePause}>
					<div className="overflow-hidden rounded-md">
						<div className="flex" style={{ transform: `translateX(-${translateX}%)`, transition: "transform 0.5s" }}>
							{images.map((image, index) => (
								<div key={index} className="relative w-1/2 flex-none overflow-hidden lg:w-1/4">
									<div className="relative px-4">
										<img
											src={getImageSrc(image)} // Obtém o link de incorporação do YouTube
											className="aspect-video h-full w-full rounded-md"
										></img>
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
	return `assets/images/clients/${src}`
}

export default ClientsCarousel
