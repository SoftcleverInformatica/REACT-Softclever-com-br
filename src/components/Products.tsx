import { Link, useLocation } from "react-router-dom"

interface Card {
	price: number
	items: string[]
}

interface ProductsProps {
	title: string
	mensal: Card
	anual: Card
	semestral: Card
}

function Products({ title, mensal, anual, semestral }: ProductsProps) {
	const location = useLocation()

	const formatPrice = (price: number) => {
		return price.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
	}

	const createWhatsappLink = (planName: string, price: number) => {
		const formattedPrice = formatPrice(price)
		const message = `Olá, gostaria de contratar o plano *${planName}* do *${title}* por *R$ ${formattedPrice}*.\n\n[_*URL*: www.softclever.com.br${location.pathname}_]`
		return `https://web.whatsapp.com/send?phone=5511992810249&text=${encodeURIComponent(message)}`
	}

	return (
		<div className="item-center flex w-full max-w-lg flex-col justify-center gap-8 p-8 sm:py-16 lg:max-w-screen-lg lg:flex-row lg:gap-0 xl:px-0 ">
			<div className="flex w-full flex-col gap-8 sm:max-w-3xl lg:max-w-screen-lg lg:flex-row">
				<div className="flex w-full flex-col items-stretch justify-between gap-8 rounded-lg p-12 shadow-product lg:max-w-[32%]">
					<h3 className="text-xl font-black text-second">Mensal</h3>
					<p className="text-3xl text-third">
						R$
						<span className="pl-4 text-5xl font-bold text-second">{formatPrice(mensal.price)}</span>
					</p>
					<p className="font-semibold text-second">(a partir de)</p>
					<ul className="flex flex-col gap-4">
						{mensal.items.map((item, index) => (
							<li key={index} className="flex items-center gap-2">
								<p className="text-third">+</p>
								<p className="text-second">{item}</p>
							</li>
						))}
					</ul>
					<Link
						to={createWhatsappLink("mensal", mensal.price)}
						className="rounded border-2 border-third p-2 text-center text-third transition-all hover:border-second hover:text-sm hover:text-second hover:shadow-[0_10px_24px_rgba(0,0,0,0.3)]"
					>
						Contratar Plano
					</Link>
				</div>
				<div className="flex w-full flex-col items-stretch justify-between gap-8 rounded-lg bg-second p-12 shadow-product lg:max-w-[32%]">
					<h3 className="text-xl font-black text-white">Anual</h3>
					<p className="text-3xl text-third">
						R$
						<span className="pl-4 text-5xl font-bold text-white">{formatPrice(anual.price)}</span>
					</p>
					<p className="font-semibold text-white">(a partir de)</p>
					<ul className="flex flex-col gap-4">
						{anual.items.map((item, index) => (
							<li key={index} className="flex items-center gap-2">
								<p className="text-third">+</p>
								<p className="text-white">{item}</p>
							</li>
						))}
					</ul>
					<Link
						to={createWhatsappLink("anual", anual.price)}
						className="rounded border-2 border-white p-2 text-center text-white transition-all hover:text-sm"
					>
						Contratar Plano
					</Link>
				</div>
				<div className="flex w-full flex-col items-stretch justify-between gap-8 rounded-lg p-12 shadow-product lg:max-w-[32%]">
					<h3 className="text-xl font-black text-second">Semestral</h3>
					<p className="text-3xl text-third">
						R$
						<span className="pl-4 text-5xl font-bold text-second">{formatPrice(semestral.price)}</span>
					</p>
					<p className="font-semibold text-second">(a partir de)</p>
					<ul className="flex flex-col gap-4">
						{semestral.items.map((item, index) => (
							<li key={index} className="flex items-center gap-2">
								<p className="text-third">+</p>
								<p className="text-second">{item}</p>
							</li>
						))}
					</ul>
					<Link
						to={createWhatsappLink("semestral", semestral.price)}
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
