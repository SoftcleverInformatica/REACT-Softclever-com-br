import { useCallback, useEffect, useState } from "react"

const brands = [
	"assets/images/clients/BOLLATEL.png",
	"assets/images/clients/ESCALEVE.jpeg",
	"assets/images/clients/AIA.png",
	"assets/images/clients/PONTO DO PADEIRO.png",
	"assets/images/clients/colormix-white.png",
	"assets/images/clients/BAX ARTIGOS FESTAS.png",
	"assets/images/clients/COOPERPECAS.png",
]

function HomeBrandsCarousel() {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [translateX, setTranslateX] = useState(0)
	const [numDots, setNumDots] = useState(brands.length)
	const [slideTime, setSlideTime] = useState(brands.length)
	const [init, setInit] = useState(true)

	const nextSlide = useCallback(() => {
		const windowWidth = window.innerWidth
		if (currentSlide !== numDots - 1) {
			if (windowWidth < 640) {
				setCurrentSlide(brands.length - 1)
			} else if (windowWidth < 768) {
				setCurrentSlide(brands.length - 2)
			} else if (windowWidth < 1024) {
				setCurrentSlide(brands.length - 3)
			} else {
				setCurrentSlide(brands.length - 4)
			}
		} else {
			setCurrentSlide(0)
		}
	}, [currentSlide, numDots])

	useEffect(() => {
		const handleResize = () => {
			const windowWidth = window.innerWidth
			if (windowWidth < 640) {
				setNumDots(brands.length)
				setTranslateX(currentSlide * 100)
			} else if (windowWidth < 768) {
				setNumDots(brands.length - 1)
				setTranslateX(currentSlide * (100 / 2))
			} else if (windowWidth < 1024) {
				setNumDots(brands.length - 2)
				setTranslateX(currentSlide * (100 / 3))
			} else {
				setNumDots(brands.length - 3)
				setTranslateX(currentSlide * (100 / 4))
			}
		}

		handleResize()

		const interval = setInterval(() => {
			if (init) {
				setInit(false)
				setSlideTime(slideTime * 5)
			}
			nextSlide()
		}, slideTime * 1000)

		window.addEventListener("resize", handleResize)

		return () => {
			clearInterval(interval)
			window.removeEventListener("resize", handleResize)
		}
	}, [currentSlide, nextSlide, slideTime, init])

	return (
		<div className="item-center flex w-full justify-center p-8 sm:p-16">
			<div className="item-center flex w-full flex-col justify-center gap-2 lg:max-w-screen-lg">
				<div className="relative w-full">
					<div className="overflow-hidden rounded-md">
						<div className="flex ease-linear" style={{ transform: `translateX(-${translateX}%)`, transition: `transform ${slideTime}s` }}>
							{brands.map((image, index) => (
								<div key={index} className="relative w-full flex-none overflow-hidden bg-third p-6 sm:w-1/2 md:w-1/3 lg:w-1/4">
									<div className="relative sm:px-4">
										<img
											src={image} // Obtém o link de incorporação do YouTube
											className="h-full w-full rounded-md"
										></img>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomeBrandsCarousel
