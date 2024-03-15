import DataCounters from "../../components/DataCounters"

function ASoftClever2() {
	return (
		<>
			<main className="flex w-full flex-col items-center justify-center p-8">
				<div className="item-center flex w-full flex-col justify-center gap-8 sm:max-w-3xl lg:max-w-screen-lg lg:flex-row lg:gap-0">
					<div className="flex w-full flex-col gap-8 sm:max-w-3xl lg:max-w-screen-lg lg:flex-row">
						<div className="flex w-full flex-col gap-8 self-center lg:max-w-[67%] lg:flex-row">
							<p className="w-full text-base font-medium text-[#3c4a54]">
								Desde 1994, a Soft Clever tem sido uma referência em desenvolvimento de sistemas. Com mais de 12.000 clientes satisfeitos e
								parcerias estabelecidas com escritórios de contabilidade, comprometemo-nos em fornecer serviços cada vez melhores. Nosso
								compromisso com a excelência e o foco no bem-estar dos clientes são os pilares que norteiam nossa atuação. Isso se reflete na
								confiança e satisfação demonstradas por nossos clientes em cada interação.
							</p>
							<p className="w-full text-base font-medium text-[#3c4a54]">
								Contamos com uma equipe própria e altamente qualificada, pronta para atender às diversas demandas do mercado com agilidade e
								dedicação. A fidelidade de nossos clientes é o maior reconhecimento da qualidade de nossos serviços. Desenvolvemos soluções
								personalizadas para empresas de todos os portes, adaptando-nos às necessidades específicas de cada cliente.
							</p>
						</div>
						<div className="flex w-full flex-col gap-8 lg:max-w-[33%]">
							<img
								src="assets/images/jpg/a-soft-clever.jpg"
								alt="Dois homens vestidos de terno e roupas sociais, apertando as mãos após fechar um acordo bem-sucedido"
								className="w-full"
							/>
						</div>
					</div>
				</div>
				<DataCounters />
			</main>
		</>
	)
}

export default ASoftClever2
