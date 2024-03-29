import { faFacebookF, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

function Footer() {
	return (
		<footer className="flex w-full flex-col items-center gap-8 bg-second p-8 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-0">
			<div className="flex w-full max-w-lg flex-col gap-4 lg:w-[50%]">
				<h1 className="text-lg font-black text-first sm:text-xl">REDES SOCIAIS</h1>
				<p className="text-ms font-medium text-first opacity-80 sm:text-sm">Siga-nos e fique por dentro das novidades.</p>
				<div className="flex">
					<Link className="flex h-7 w-10 items-center justify-center bg-[#3B5998]" to={"https://www.facebook.com/softcleverinformatica"}>
						<FontAwesomeIcon icon={faFacebookF} style={{ color: "#ffffff" }} />
					</Link>
					<Link className="flex h-7 w-10 items-center justify-center bg-[#464646]" to={"https://www.instagram.com/soft.clever/"}>
						<FontAwesomeIcon icon={faInstagram} style={{ color: "#ffffff" }} size="lg" />
					</Link>
					<Link className="flex h-7 w-10 items-center justify-center bg-[#cc181e]" to={"https://www.youtube.com/channel/UCd15UMZr95UzVWWKbu5khTw"}>
						<FontAwesomeIcon icon={faYoutube} style={{ color: "#ffffff" }} />
					</Link>
				</div>
			</div>
			<div className="flex w-full max-w-lg flex-col gap-4 lg:w-[50%]">
				<h1 className="text-lg font-black text-first sm:text-xl">CONTATO</h1>
				<div className="flex w-full justify-between gap-1">
					<p className="flex-shrink-0 text-ms font-bold text-first sm:text-sm">Endereço</p>
					<div className="h-4 flex-grow border-b border-dotted border-third"></div>
					<p className="flex-shrink-0 text-ms font-medium text-first opacity-80 sm:text-sm">Rua João Alves Pimenta, 880</p>
				</div>
				<div className="flex w-full justify-between gap-1">
					<div className="h-4 flex-grow border-b border-dotted border-third"></div>
					<p className="flex-shrink-0 text-ms font-medium text-first opacity-80 sm:text-sm">Freguesia do Ó - São Paulo - SP</p>
				</div>
				<div className="flex w-full justify-between gap-1">
					<p className="flex-shrink-0 text-ms font-bold text-first sm:text-sm">E-mail</p>
					<div className="h-4 flex-grow border-b border-dotted border-third"></div>
					<p className="flex-shrink-0 text-ms font-medium text-first opacity-80 sm:text-sm">softclever@softclever.com.br</p>
				</div>
				<div className="flex w-full justify-between gap-1">
					<p className="flex-shrink-0 text-ms font-bold text-first sm:text-sm">Telefones</p>
					<div className="h-4 flex-grow border-b border-dotted border-third"></div>
					<p className="flex-shrink-0 text-ms font-medium text-first opacity-80 sm:text-sm">11 3991-3923 / 11 2361-8334</p>
				</div>
				<div className="flex w-full justify-between gap-1">
					<p className="flex-shrink-0 text-ms font-bold text-first sm:text-sm">Atendimento</p>
					<div className="h-4 flex-grow border-b border-dotted border-third"></div>
					<p className="flex-shrink-0 text-ms font-medium text-first opacity-80 sm:text-sm">Seg - Sex | 08h - 18h</p>
				</div>
			</div>
			<div className="mt-8 flex w-full items-center justify-center gap-4 border-t border-first border-opacity-20 pt-8">
				<p className="text-xs text-first">© 1994 - {new Date().getFullYear()} | Soft Clever</p>
				<Link to="/politica-de-privacidade" className="text-xs text-third">
					Política de Privacidade
				</Link>
			</div>
		</footer>
	)
}

export default Footer
