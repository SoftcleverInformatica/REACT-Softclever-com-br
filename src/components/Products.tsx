import { Link } from "react-router-dom"

function Products() {
	return (
		<div className="item-center flex w-full max-w-lg flex-col justify-center gap-8 p-8 sm:py-16 lg:max-w-screen-lg lg:flex-row lg:gap-0 xl:px-0 ">
			<div className="flex w-full flex-col gap-8 sm:max-w-3xl lg:max-w-screen-lg lg:flex-row">
				<div className="shadow-product flex w-full flex-col items-stretch justify-between gap-8 rounded-lg p-12 lg:max-w-[32%]">
					<h3 className="text-xl font-black text-second">Mensal</h3>
					<p className="text-3xl text-third">
						R$
						<span className="pl-4 text-5xl font-bold text-second">127,90</span>
					</p>
					<p className="font-semibold text-second">(a partir de)</p>
					<ul className="flex flex-col gap-4">
						<li className="flex items-center gap-2">
							<p className="text-third">+</p>
							<p className="text-second">Suporte online ilimitado</p>
						</li>
						<li className="flex items-center gap-2">
							<p className="text-third">+</p>
							<p className="text-second">Instalação remota inclusa</p>
						</li>
						<li className="flex items-center gap-2">
							<p className="text-third">+</p>
							<p className="text-second">Treinamento remoto incluso</p>
						</li>
						<li className="flex items-center gap-2">
							<p className="text-third">+</p>
							<p className="text-second">Sem fidelidade</p>
						</li>
						<li className="flex items-center gap-2">
							<p className="text-third">+</p>
							<p className="text-second">Mensalidade via Boleto</p>
						</li>
						<li className="flex items-center gap-2">
							<p className="text-third">+</p>
							<p className="text-second">Sem Desconto</p>
						</li>
					</ul>
					<Link
						to={
							"https://web.whatsapp.com/send?phone=5511992810249&text=Ol%C3%A1%2C%20eu%20gostaria%20de%20solicitar%20o%20plano%20mensal%20de%20R%24%20127%2C90%20que%20vi%20no%20site%20www.softclever.com."
						}
						className="rounded border-2 border-third p-2 text-center text-third transition-all hover:border-second hover:text-sm hover:text-second hover:shadow-[0_10px_24px_rgba(0,0,0,0.3)]"
					>
						Contratar Plano
					</Link>
				</div>
				<div className="shadow-product flex w-full flex-col items-stretch justify-between gap-8 rounded-lg bg-second p-12 lg:max-w-[32%]">
					<h3 className="text-xl font-black text-white">Anual</h3>
					<p className="text-3xl text-third">
						R$
						<span className="pl-4 text-5xl font-bold text-white">89,53</span>
					</p>
					<p className="font-semibold text-white">(a partir de)</p>
					<ul className="flex flex-col gap-4">
						<li className="flex items-center gap-2">
							<p className="text-third">+</p>
							<p className="text-white">Suporte online ilimitado</p>
						</li>
						<li className="flex items-center gap-2">
							<p className="text-third">+</p>
							<p className="text-white">Instalação remota inclusa</p>
						</li>
						<li className="flex items-center gap-2">
							<p className="text-third">+</p>
							<p className="text-white">Treinamento remoto incluso</p>
						</li>
						<li className="flex items-center gap-2">
							<p className="text-third">+</p>
							<p className="text-white">Com fidelidade de 12 meses</p>
						</li>
						<li className="flex items-center gap-2">
							<p className="text-third">+</p>
							<p className="text-white">A Vista ou Parcelado*</p>
						</li>
						<li className="flex items-center gap-2">
							<p className="text-third">+</p>
							<p className="text-white">Desconto de até 30%*</p>
						</li>
					</ul>
					<Link
						to={
							"https://web.whatsapp.com/send?phone=5511992810249&text=Ol%C3%A1%2C%20eu%20gostaria%20de%20solicitar%20o%20plano%20anual%20de%20R%24%2089%2C53%20que%20vi%20no%20site%20www.softclever.com."
						}
						className="rounded border-2 border-white p-2 text-center text-white transition-all hover:text-sm"
					>
						Contratar Plano
					</Link>
				</div>
				<div className="shadow-product flex w-full flex-col items-stretch justify-between gap-8 rounded-lg p-12 lg:max-w-[32%]">
					<h3 className="text-xl font-black text-second">Semestral</h3>
					<p className="text-3xl text-third">
						R$
						<span className="pl-4 text-5xl font-bold text-second">108,71</span>
					</p>
					<p className="font-semibold text-second">(a partir de)</p>
					<ul className="flex flex-col gap-4">
						<li className="flex items-center gap-2">
							<p className="text-third">+</p>
							<p className="text-second">Suporte online ilimitado</p>
						</li>
						<li className="flex items-center gap-2">
							<p className="text-third">+</p>
							<p className="text-second">Instalação remota inclusa</p>
						</li>
						<li className="flex items-center gap-2">
							<p className="text-third">+</p>
							<p className="text-second">Treinamento remoto incluso</p>
						</li>
						<li className="flex items-center gap-2">
							<p className="text-third">+</p>
							<p className="text-second">Com fidelidade de 6 meses</p>
						</li>
						<li className="flex items-center gap-2">
							<p className="text-third">+</p>
							<p className="text-second">A Vista ou Parcelado*</p>
						</li>
						<li className="flex items-center gap-2">
							<p className="text-third">+</p>
							<p className="text-second">Desconto de até 15%*</p>
						</li>
					</ul>
					<Link
						to={
							"https://web.whatsapp.com/send?phone=5511992810249&text=Ol%C3%A1%2C%20eu%20gostaria%20de%20solicitar%20o%20plano%20semestral%20de%20R%24%20108%2C71%20que%20vi%20no%20site%20www.softclever.com."
						}
						className="rounded border-2 border-third p-2 text-center text-third transition-all hover:border-second hover:text-sm hover:text-second hover:shadow-[0_10px_24px_rgba(0,0,0,0.3)]"
					>
						Contratar Plano
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Products
