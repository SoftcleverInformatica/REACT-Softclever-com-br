import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import VideosCarousel from "../components/carousels/VideosCarousel"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Menu from "../components/Menu"
import Whatsapp from "../components/Whatsapp"

function Suporte() {
	const videos = ["https://www.youtube.com/watch?v=83Pxy3TwN2w", "https://www.youtube.com/watch?v=GwttGRBPf1M"]

	return (
		<>
			<Menu />
			<Header title={"Suporte"} subtitle="Entre em contato" />
			<main className="flex w-full flex-col items-center justify-center gap-8">
				<div className="flex w-full flex-col items-center justify-center gap-8 p-8 sm:p-16">
					<p className="w-full max-w-screen-lg text-lg font-extrabold text-second sm:text-2xl">ATENDEMOS DE SEGUNDA A SEXTA DAS 08h-18h</p>
					<div className="flex w-full  max-w-screen-lg flex-col items-center justify-between gap-8 lg:flex-row lg:gap-0">
						<Link
							className="flex w-full items-center justify-center lg:w-[30%]"
							to={"https://drive.google.com/file/d/16Ghh0MIZA6u5_1Yb3t9S7y-EN58-ULQ0/view"}
						>
							<p className="flex w-full items-center justify-center gap-2 bg-background p-6 text-center text-base font-medium text-second">
								<FontAwesomeIcon icon={faPhone} className="text-second" />
								(11) 3991-3923
							</p>
						</Link>
						<Link
							className="flex w-full items-center justify-center lg:w-[30%]"
							to={"https://drive.google.com/file/d/16Ghh0MIZA6u5_1Yb3t9S7y-EN58-ULQ0/view"}
						>
							<p className="flex w-full items-center justify-center gap-2 bg-background p-6 text-center text-base font-medium text-second">
								<FontAwesomeIcon icon={faPhone} className="text-second" />
								(11) 2361-8334
							</p>
						</Link>
						<div className="flex w-full flex-col items-center justify-center lg:w-[30%]"></div>
					</div>
					<h3 className="w-full max-w-screen-lg text-lg font-extrabold text-second sm:text-2xl">DOWNLOAD ACESSO REMOTO</h3>
					<div className="flex w-full  max-w-screen-lg flex-col items-center justify-between gap-8 lg:flex-row lg:gap-0">
						<Link
							className="flex w-full flex-col items-center justify-center lg:w-[30%]"
							to={"https://drive.google.com/file/d/16Ghh0MIZA6u5_1Yb3t9S7y-EN58-ULQ0/view"}
						>
							<p className="w-full bg-background p-6 text-center text-base font-medium text-second">AMMY</p>
							<p className="w-full bg-second p-4 text-center text-sm font-medium text-white">Download</p>
						</Link>
						<Link
							className="flex w-full flex-col items-center justify-center lg:w-[30%]"
							to={"https://drive.google.com/file/d/16Ghh0MIZA6u5_1Yb3t9S7y-EN58-ULQ0/view"}
						>
							<p className="w-full bg-background p-6 text-center text-base font-medium text-second">ANYDESK</p>
							<p className="w-full bg-second p-4 text-center text-sm font-medium text-white">Download</p>
						</Link>
						<Link
							className="flex w-full flex-col items-center justify-center lg:w-[30%]"
							to={"https://drive.google.com/file/d/1VXzw6PPiUBr0OwyVXmrYa1GqFPdr19lX/view?pli=1"}
						>
							<p className="w-full bg-background p-6 text-center text-base font-medium text-second">SC REMOTE</p>
							<p className="w-full bg-second p-4 text-center text-sm font-medium text-white">Download</p>
						</Link>
					</div>
				</div>

				<VideosCarousel videos={videos} />
			</main>
			<Footer />
			<Whatsapp />
		</>
	)
}

export default Suporte
