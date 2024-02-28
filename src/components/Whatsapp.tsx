import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

function Whatsapp() {
	return (
		<Link
			className="fixed bottom-4 right-0 z-10 rounded-l-lg bg-white p-2"
			to={"https://web.whatsapp.com/send?phone=5511992810249&text=Ol%C3%A1%2C%20Soft%20Clever.%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento."}
		>
			<FontAwesomeIcon icon={faWhatsapp} style={{ color: "#25d366" }} size="2xl" />
		</Link>
	)
}

export default Whatsapp
