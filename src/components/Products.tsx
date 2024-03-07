import { Link, useLocation } from "react-router-dom"

interface Card {
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

	const createWhatsappLink = (planName: string) => {
		const message = `Olá, gostaria de conhecer o plano *${planName}* do *${title}*.\n[*URL:* www.softclever.com.br_]${location.pathname}.`
		return `https://web.whatsapp.com/send?phone=5511992810249&text=${encodeURIComponent(message)}`
	}

	return (
		<div className="item-center flex w-full max-w-lg flex-col justify-center gap-8 p-8 sm:py-16 lg:max-w-screen-lg lg:flex-row lg:gap-0 xl:px-0 ">
			<div className="flex w-full flex-col gap-8 sm:max-w-3xl lg:max-w-screen-lg">
				<h3 className="w-full pb-6 text-2xl font-bold text-second sm:text-3xl">Nossas modalidades de contratação.</h3>
				<div className="flex w-full flex-col gap-8 sm:max-w-3xl lg:max-w-screen-lg lg:flex-row">
					<div className="flex w-full flex-col items-stretch justify-between gap-8 rounded-lg p-12 shadow-product lg:max-w-[32%]">
						<h3 className="text-xl font-black text-second">Mensal</h3>
						<ul className="flex flex-col gap-4">
							{mensal.items.map((item, index) => (
								<li key={index} className="flex items-center gap-2">
									<p className="text-third">+</p>
									<p className="text-second">{item}</p>
								</li>
							))}
						</ul>
						<Link
							to={createWhatsappLink("mensal")}
							className="rounded border-2 border-third p-2 text-center text-third transition-all hover:border-second hover:text-sm hover:text-second hover:shadow-[0_10px_24px_rgba(0,0,0,0.3)]"
						>
							Consulte valores
						</Link>
					</div>
					<div className="flex w-full flex-col items-stretch justify-between gap-8 rounded-lg bg-second p-12 shadow-product lg:max-w-[32%]">
						<h3 className="text-xl font-black text-white">Semestral</h3>
						<ul className="flex flex-col gap-4">
							{semestral.items.map((item, index) => (
								<li key={index} className="flex items-center gap-2">
									<p className="text-third">+</p>
									<p className="text-white">{item}</p>
								</li>
							))}
						</ul>
						<Link
							to={createWhatsappLink("semestral")}
							className="rounded border-2 border-white p-2 text-center text-white transition-all hover:text-sm"
						>
							Consulte valores
						</Link>
					</div>
					<div className="flex w-full flex-col items-stretch justify-between gap-8 rounded-lg p-12 shadow-product lg:max-w-[32%]">
						<h3 className="text-xl font-black text-second">Anual</h3>
						<ul className="flex flex-col gap-4">
							{anual.items.map((item, index) => (
								<li key={index} className="flex items-center gap-2">
									<p className="text-third">+</p>
									<p className="text-second">{item}</p>
								</li>
							))}
						</ul>
						<Link
							to={createWhatsappLink("anual")}
							className="rounded border-2 border-third p-2 text-center text-third transition-all hover:border-second hover:text-sm hover:text-second hover:shadow-[0_10px_24px_rgba(0,0,0,0.3)]"
						>
							Consulte valores
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Products
