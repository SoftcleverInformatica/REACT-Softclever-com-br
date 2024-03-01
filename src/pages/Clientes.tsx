import ClientsCarousel from "../components/ClientsCarousel"
import DataCounters from "../components/DataCounters"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Menu from "../components/Menu"
import Whatsapp from "../components/Whatsapp"

function Clientes() {
	const images = [
		"ADRIANA HAIR.jpg",
		"AIA.png",
		"ALBUS-CLINIC.jpg",
		"ALIBEC.jpeg",
		"ALINHASTRO.jpg",
		"ANDERSSON CABELOS.jpg",
		"AQUI O BICHO PEGA.png",
		"ART VENITE.png",
		"ATIVA PORTARIA INTELIGENTE.png",
		"BARBARA CONSERVAS.jpg",
		"BAX ARTIGOS FESTAS.png",
		"BICHO CHIC.jpg",
		"BOLLATEL.png",
		"BRASIL SISTEMAS.jpeg",
		"BRUMED.png",
		"CAVIVA 2.png",
		"Colormix.png",
		"COOPERPECAS.png",
		"CSE.jpg",
		"CSP FIX.jpeg",
		"ENVELOPACK.png",
		"ESCALEVE.jpeg",
		"FASTLASER.jpeg",
		"FENIXGAS.jpg",
		"GOLDEN MIX.png",
		"GR-Modas.jpg",
		"INFINI.png",
		"INFOLINE.png",
		"IRMAOS BOZZA.jpg",
		"JACC DOCES.jpg",
		"JCRB BLOCOS.png",
		"LIRA.png",
		"logo-casa-do-bar.png",
		"MAINARD.jpg",
		"MIAMI BILHARES.png",
		"MOTODAKAR.png",
		"nani chinelato.jpg",
		"NANO BLINDAGENS.png",
		"OCULOS MANIA.png",
		"PET SHOP BIORI.jpg",
		"PONTO DO PADEIRO.png",
		"PONTUAL POLIMEROS.png",
		"portoro.png",
		"PROLAR.jpg",
		"RAMOS.jpg",
		"RAMSOR.png",
		"RED NOSE.jpg",
		"RIKWILL.jpg",
		"RIQUELLA.png",
		"ROMA.jpg",
		"RVC AUTOMACAO.jpeg",
		"SALTOJA.jpg",
		"TECNIGRAV.png",
		"TRESSAR.png",
		"TUGUMI.jpg",
		"TUSSAR.jpg",
	]
	return (
		<>
			<Menu />
			<Header title={"Suporte"} subtitle="Entre em contato" />
			<main className="flex w-full flex-col items-center justify-center gap-8 ">
				<ClientsCarousel images={images} />
				<DataCounters />
			</main>
			<Footer />
			<Whatsapp />
		</>
	)
}

export default Clientes
