interface Items {
	title: string
	description: string
}

function ItemsInSolution({ items }: { items: Items[] }) {
	return (
		<div className="flex w-full flex-col flex-wrap gap-4 lg:flex-row lg:gap-0">
			<h3 className="text-lg font-extrabold text-second sm:text-2xl">CONHEÇA PARTE DOS RECURSOS DISPONÍVEIS</h3>
			{items.map((item, index) => (
				<div key={index} className="flex w-full flex-col gap-4 lg:max-w-[33%] lg:py-4 lg:pr-4">
					<div className="flex w-full items-center justify-center">
						<p className="flex h-8 min-w-8 items-center justify-center rounded-full border-1 border-gray-400 text-center text-sm font-bold text-second">
							{index + 1}
						</p>
						<div className="w-full flex-grow border-t-1 border-gray-400"></div>
					</div>
					<h4 className="text-base font-bold text-second">{item.title}</h4>
					<p className="text-sm text-text">{item.description}</p>
				</div>
			))}
		</div>
	)
}

export default ItemsInSolution
