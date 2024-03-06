interface IHeader {
	title: string
	subtitle: string
}

function Header({ title, subtitle }: IHeader) {
	return (
		<div className="item-center flex w-full flex-col justify-center bg-second bg-header bg-cover bg-center p-16 lg:flex-row">
			<div className="flex w-full sm:max-w-3xl lg:max-w-screen-lg">
				<div className="flex w-full max-w-lg flex-col gap-4 self-center sm:max-w-3xl lg:max-w-[50%]">
					<h1 className="w-full text-2xl font-extrabold text-white sm:text-4xl">{title.toUpperCase()}</h1>
					<h2 className="w-full font-bold text-third">{subtitle.toUpperCase()}</h2>
				</div>
				<div className="hidden w-full items-center justify-end lg:flex lg:max-w-[50%]">
					<p className="font-extrabold text-white">
						Home <span className="pl-2 font-extrabold text-third">/ {title}</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Header
