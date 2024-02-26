import { faFacebookF, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

function Footer() {
	return (
		<footer className="bg-second flex w-full flex-col items-center lg:flex-row lg:flex-wrap lg:justify-center">
			<div className="flex w-full max-w-lg flex-col gap-4 px-8 py-8">
				<h1 className="text-first text-lg font-black sm:text-xl">REDES SOCIAIS</h1>
				<p className="text-first text-ms font-medium opacity-80 sm:text-sm">Siga-nos e fique por dentro das novidades.</p>
				<div className="flex">
					<div className="flex h-7 w-10 items-center justify-center bg-[#3B5998]">
						<FontAwesomeIcon icon={faFacebookF} style={{ color: "#ffffff" }} />
					</div>
					<div className="flex h-7 w-10 items-center justify-center bg-[#464646]">
						<FontAwesomeIcon icon={faInstagram} style={{ color: "#ffffff" }} size="lg" />
					</div>
					<div className="flex h-7 w-10 items-center justify-center bg-[#cc181e]">
						<FontAwesomeIcon icon={faYoutube} style={{ color: "#ffffff" }} />
					</div>
				</div>
			</div>
			<div className="flex w-full max-w-lg flex-col gap-4 px-8 py-8">
				<h1 className="text-first text-lg font-black sm:text-xl">CONTATO</h1>
				<div className="flex w-full justify-between gap-1">
					<p className="text-first flex-shrink-0 text-ms font-bold sm:text-sm">Endereço</p>
					<div className="border-third h-4 flex-grow border-b border-dotted"></div>
					<p className="text-first flex-shrink-0 text-ms font-medium opacity-80 sm:text-sm">Rua João Alves Pimenta, 880</p>
				</div>
				<div className="flex w-full justify-between gap-1">
					<div className="border-third h-4 flex-grow border-b border-dotted"></div>
					<p className="text-first flex-shrink-0 text-ms font-medium opacity-80 sm:text-sm">Freguesia do Ó - São Paulo - SP</p>
				</div>
				<div className="flex w-full justify-between gap-1">
					<p className="text-first flex-shrink-0 text-ms font-bold sm:text-sm">E-mail</p>
					<div className="border-third h-4 flex-grow border-b border-dotted"></div>
					<p className="text-first flex-shrink-0 text-ms font-medium opacity-80 sm:text-sm">softclever@softclever.com.br</p>
				</div>
				<div className="flex w-full justify-between gap-1">
					<p className="text-first flex-shrink-0 text-ms font-bold sm:text-sm">Telefones</p>
					<div className="border-third h-4 flex-grow border-b border-dotted"></div>
					<p className="text-first flex-shrink-0 text-ms font-medium opacity-80 sm:text-sm">11 3991-3923 / 11 2361-8334</p>
				</div>
				<div className="flex w-full justify-between gap-1">
					<p className="text-first flex-shrink-0 text-ms font-bold sm:text-sm">Atendimento</p>
					<div className="border-third h-4 flex-grow border-b border-dotted"></div>
					<p className="text-first flex-shrink-0 text-ms font-medium opacity-80 sm:text-sm">Seg - Sex | 08h - 18h</p>
				</div>
			</div>
			<div className="border-first flex w-full items-center justify-center gap-4 border-t border-opacity-20 p-4">
				<p className="text-first text-xs">© 1994 - {new Date().getFullYear()} | Soft Clever</p>
				<Link to="/politica-de-privacidade" className="text-third text-xs">
					Política de Privacidade
				</Link>
			</div>
		</footer>
	)
}
export default Footer
