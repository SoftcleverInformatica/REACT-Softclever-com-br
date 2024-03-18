import { Link } from "react-router-dom"
import VideosCarousel from "../components/Carousels/VideosCarousel"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Menu from "../components/Menu"
import SupportWhatsapp from "../components/SupportWhatsapp"
import Whatsapp from "../components/Whatsapp"

function Suporte() {
	const videos = ["https://www.youtube.com/watch?v=83Pxy3TwN2w", "https://www.youtube.com/watch?v=GwttGRBPf1M"]

	return (
		<>
			<Menu />
			<Header title={"Suporte"} subtitle="Entre em contato" />
			<main className="flex w-full flex-col items-center justify-center gap-8">
				<div className="item-center flex w-full flex-col justify-center gap-8 bg-background p-8 sm:p-16 lg:flex-row lg:gap-0">
					<div className="flex w-full flex-col gap-8 sm:max-w-3xl lg:max-w-screen-lg lg:flex-row">
						<div className="flex w-full flex-col gap-8 self-center lg:max-w-[67%]">
							<h3 className="text-lg font-extrabold text-second sm:text-2xl">COMO PODEMOS TE AJUDAR?</h3>
							<ul className="text-third" style={{ listStyleType: "disc", listStylePosition: "inside" }}>
								<li className="text-xl text-third">
									<span className="text-base text-text">Download Acesso Remoto</span>
								</li>
								<li className="text-xl text-third">
									<span className="text-base text-text">Vídeos demonstrativos</span>
								</li>
								<li className="text-xl text-third">
									<span className="text-base text-text">Falar com o Suporte</span>
								</li>
							</ul>
						</div>
						<div className="flex w-full flex-col gap-8 lg:max-w-[33%]">
							<SupportWhatsapp />
						</div>
					</div>
				</div>
				<div className="flex w-full flex-col items-center justify-center gap-8 p-8 sm:p-16">
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
