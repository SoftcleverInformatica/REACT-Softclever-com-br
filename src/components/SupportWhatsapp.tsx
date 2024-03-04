import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

function SupportWhatsapp() {
	return (
		<Link
			className="relative h-24 w-full max-w-[336px]"
			to={"https://web.whatsapp.com/send?phone=5511992810249&text=Ol%C3%A1%2C%20Soft%20Clever.%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento."}
		>
			<div className="absolute left-0 top-0 z-10 h-24 w-24 rounded-full border-4 border-white bg-support bg-cover shadow-lg"></div>
			<FontAwesomeIcon
				icon={faWhatsapp}
				style={{
					zIndex: "11",
					height: "28px",
					width: "28px",
					position: "absolute",
					top: "20px",
					left: "76px",
					color: "#25d366",
					backgroundColor: "white",
					borderWidth: "2px",
					borderColor: "white",
					borderRadius: "9999px",
				}}
				size="2xl"
			/>
			<div className="absolute top-[50%] flex h-20 w-full max-w-[336px] translate-y-[-50%] flex-col justify-center gap-1 rounded-full bg-[#25d366] pl-[120px] shadow-lg">
				<p className="text-xs text-[#d5f0d9]">
					WhatsApp Suporte <span className="hidden rounded-md bg-white bg-opacity-20 p-1 text-xs text-white sm:inline-block">Online</span>
				</p>
				<p className="text-xs text-white">Entre em contato</p>
			</div>
		</Link>
	)
}

export default SupportWhatsapp
