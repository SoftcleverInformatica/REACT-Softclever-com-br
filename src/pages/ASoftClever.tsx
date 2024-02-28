import Footer from "../components/Footer"
import Header from "../components/Header"
import Menu from "../components/Menu"
import Whatsapp from "../components/Whatsapp"

function Home() {
	return (
		<>
			<Menu />
			<Header title={"A Soft Clever"} subtitle="Nossos valores" />
			<Footer />
			<Whatsapp />
		</>
	)
}

export default Home
