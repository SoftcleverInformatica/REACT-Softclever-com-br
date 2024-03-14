import VideosCarousel from "../../components/Carousels/VideosCarousel"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import ItemsInSolution from "../../components/ItemsInSolution"
import LateralNavBar from "../../components/LateralNavBar"
import Menu from "../../components/Menu"
import Products from "../../components/Products"
import SupportWhatsapp from "../../components/SupportWhatsapp"
import Whatsapp from "../../components/Whatsapp"

function SolucoesFiscais2() {
	const title = "Soluções Fiscais"

	const videos = ["https://www.youtube.com/watch?v=83Pxy3TwN2w", "https://www.youtube.com/watch?v=GwttGRBPf1M"]

	return (
		<>
			<Menu />
			<Header title={title} subtitle="Necessário para todos os tipos de negócios" />
			<main className="flex w-full flex-col items-center justify-center gap-8">
				<div className="item-center flex w-full max-w-lg flex-col justify-center gap-8 p-8 sm:py-16 lg:max-w-screen-lg lg:flex-row lg:gap-0 xl:px-0">
					<div className="flex w-full flex-col gap-8 sm:max-w-3xl lg:max-w-screen-lg lg:flex-row">
						<div className="flex w-full flex-col gap-8 self-center lg:max-w-[67%]">
							<img
								src="assets/images/jpg/solucoes-fiscais.jpg"
								alt="Empresária com um tablet e um notebook, com gráficos e o nome Sírius ERP envolto de símbolos de eficiência e versatilidade"
							/>
							<h3 className="text-lg font-extrabold text-second sm:text-2xl">SOBRE AS SOLUÇÕES FISCAIS</h3>
							<p className="w-full text-base font-medium text-[#3c4a54]">
								Oferecemos um sistema completo, simples e prático para a emissão de diversos tipos de documentos fiscais, incluindo Nota Fiscal
								Eletrônica (NF-e), Conhecimento de Transporte Eletrônico (CT-e) e Manifestação de Documentos Fiscais (MDF-e). Com nossa solução,
								atendemos empresas de todos os tamanhos e segmentos, desde comércio até distribuição e indústria, cumprindo todas as exigências
								legais da SEFAZ de forma eficaz e simplificada.
							</p>
							<ItemsInSolution
								items={[
									{
										title: "Nota Fiscal Eletrônica",
										description:
											"Emissão de NF-e com envio e autorização junto à SEFAZ, com rotinas para cancelamento, inutilização, carta de correção, além de pré-visualização e impressão do DANFE.",
									},
									{
										title: "Conhecimento de Transporte Eletrônico",
										description:
											"Emissão de CT-e com envio e autorização junto à SEFAZ, com processos automatizados, cadastros de partes envolvidas e pré-visualização do documento.",
									},
									{
										title: "Manifesto de Documentos Fiscais",
										description:
											"Emissão de MDF-e para empresas que necessitam realizar transporte próprio ou contratado, agilizando o registro em lote de documentos fiscais em trânsito.",
									},
								]}
							/>
						</div>
						<div className="flex w-full flex-col gap-4 lg:max-w-[33%]">
							<SupportWhatsapp />
							<img src="assets/images/png/erp.png" alt="Símbolo do Soft Clever" />
							<h3 className="w-full pt-4 font-bold text-third">SOFT CLEVER</h3>
							<h2 className="w-full text-3xl font-black text-second">Nossas Soluções</h2>
							<LateralNavBar />
						</div>
					</div>
				</div>

				<VideosCarousel videos={videos} />

				<Products
					title="Soft Clever"
					mensal={{
						items: [
							"Suporte online ilimitado",
							"Instalação remota inclusa",
							"Treinamento remoto incluso",
							"Sem fidelidade",
							"Mensalidade via Boleto",
						],
					}}
					semestral={{
						items: [
							"Suporte online ilimitado",
							"Instalação remota inclusa",
							"Treinamento remoto incluso",
							"Com fidelidade de 6 meses",
							"A Vista ou Parcelado*",
							"Desconto de até 12,5%*",
						],
					}}
					anual={{
						items: [
							"Suporte online ilimitado",
							"Instalação remota inclusa",
							"Treinamento remoto incluso",
							"Com fidelidade de 12 meses",
							"A Vista ou Parcelado*",
							"Desconto de até 25%*",
						],
					}}
				/>
			</main>
			<Footer />
			<Whatsapp />
		</>
	)
}

export default SolucoesFiscais2
