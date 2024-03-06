import Footer from "../components/Footer"
import Header from "../components/Header"
import ItemsInSolution from "../components/ItemsInSolution"
import LateralNavBar from "../components/LateralNavBar"
import Menu from "../components/Menu"
import Products from "../components/Products"
import SupportWhatsapp from "../components/SupportWhatsapp"
import VideosCarousel from "../components/VideosCarousel"
import Whatsapp from "../components/Whatsapp"

function SolucoesFiscais() {
	const title = "Soluções Fiscais"

	const videos = [
		"https://www.youtube.com/embed/zTJhwfRWWjw",
		"https://www.youtube.com/embed/T87FxxWCDJs",
		"https://www.youtube.com/embed/1kloOC4_z-M",
		"https://www.youtube.com/embed/GeVMI39VYqM",
		"https://www.youtube.com/embed/zTJhwfRWWjw",
		"https://www.youtube.com/embed/T87FxxWCDJs",
	]

	return (
		<>
			<Menu />
			<Header title={title} subtitle="Necessário para todos os negócios" />
			<main className="flex w-full flex-col items-center justify-center gap-8 ">
				<div className="item-center flex w-full max-w-lg flex-col justify-center gap-8 p-8 sm:py-16 lg:max-w-screen-lg lg:flex-row lg:gap-0 xl:px-0 ">
					<div className="flex w-full flex-col gap-8 sm:max-w-3xl lg:max-w-screen-lg lg:flex-row">
						<div className="flex w-full flex-col gap-8 self-center lg:max-w-[67%]">
							<img
								src="assets/images/jpg/solucoes-fiscais.jpg"
								alt="Uma empresária com um tablet e um notebook sobre alguns gráficos, ao centro, sobreposto, o nome Sírius ERP envolto de símbolos que remetem a eficiência, versatilidade e os retornos"
							/>
							<h3 className="text-lg font-extrabold text-second sm:text-2xl">SOBRE AS SOLUÇÕES FISCAIS</h3>
							<p className="w-full text-base font-medium text-[#3c4a54]">
								Sistema completo, simples e prático para emissão de qualquer tipo de documentos fiscais, tais como; Nota Fiscal Eletrônica
								(NF-e), Conhecimento de Transporte Eletrônico (CT-e) e Manifestação de Documentos Fiscais (MDF-e). Atuando em todos os estados,
								disponibilizamos as melhores funcionalidades para atender a qualquer tipo de empresa, seja comércio, distribuição, atacado e
								indústria. Atende a qualquer segmento do mercado e empresas de micro, pequeno e médio porte.
							</p>
							<p className="w-full text-base font-medium text-[#3c4a54]">
								Sistema homologado na Secretaria da Fazenda, atende completamente a toda Legislação Fiscal exigida pela SEFAZ de forma eficaz e
								totalmente simplificada.
							</p>
							<ItemsInSolution
								items={[
									{
										title: "Nota Fiscal Eletrônica",
										description:
											"Emissão de Nota Fiscal Eletrônica (NF-e) com envio e autorização junto a SEFAZ. Rotinas de cancelamento e inutilização por faixa numérica, carta de correção, envio automático de e-mail com XML e PDF. Configurações de diversos tipos de operações com cálculo automático de impostos. Pré-visualização e impressão do DANFE e opções de relatórios fiscais.",
									},
									{
										title: "Conhecimento de Transporte Eletrônico",
										description:
											"Emissão de Conhecimento de Transporte Eletrônico (CT-e) com envio e autorização junto a SEFAZ. Diversos processos automatizados. Filtros e relatórios gerenciais. Cadastros de emitente, remetente, consignatário, redespacho, tomador, expedidor, recebedor e destinatário. Pré-visualização e impressão do Conhecimento de Transporte.",
									},
									{
										title: "Manifesto de Documentos Fiscais",
										description:
											"Emissão de Manifestação de Documentos Fiscais com a finalidade de atender empresas prestadoras de serviço cujo transporte seja realizado em veículos próprios, arrendados, ou mediante a contratação de transportador autônomo de cargas, com mais de uma NF-e ou CT-e. A finalidade do MDF-e é agilizar o registro em lote de documentos fiscais em trânsito e identificar a unidade de carga utilizada e demais características do transporte.",
									},
								]}
							/>
						</div>
						<div className="flex w-full flex-col gap-4 lg:max-w-[33%]">
							<SupportWhatsapp />
							<img src="assets/images/png/erp.png" alt="Varejista com avental vermelho" />
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
						price: 82.9,
						items: [
							"Suporte online ilimitado",
							"Instalação remota inclusa",
							"Treinamento remoto incluso",
							"Sem fidelidade",
							"Mensalidade via Boleto",
							"Sem Desconto",
							"Contratar Plano",
						],
					}}
					anual={{
						price: 58.03,
						items: [
							"Suporte online ilimitado",
							"Instalação remota inclusa",
							"Treinamento remoto incluso",
							"Com fidelidade de 12 meses",
							"A Vista ou Parcelado*",
							"Desconto de até 30%*",
							"Contratar Plano",
						],
					}}
					semestral={{
						price: 70.46,
						items: [
							"Suporte online ilimitado",
							"Instalação remota inclusa",
							"Treinamento remoto incluso",
							"Com fidelidade de 6 meses",
							"A Vista ou Parcelado*",
							"Desconto de até 15%*",
							"Contratar Plano",
						],
					}}
				/>
			</main>
			<Footer />
			<Whatsapp />
		</>
	)
}

export default SolucoesFiscais
