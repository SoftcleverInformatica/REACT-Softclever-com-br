import Footer from "../../components/Footer"
import Header from "../../components/Header"
import ItemsInSolution from "../../components/ItemsInSolution"
import LateralNavBar from "../../components/LateralNavBar"
import Menu from "../../components/Menu"
import Products from "../../components/Products"
import SupportWhatsapp from "../../components/SupportWhatsapp"
import Whatsapp from "../../components/Whatsapp"

function SpedEBlocoK2() {
	const title = "SPED e Bloco K"

	return (
		<>
			<Menu />
			<Header title={title} subtitle="Imprescindível para todos os tipos de negócios" />
			<main className="flex w-full flex-col items-center justify-center gap-8">
				<div className="item-center flex w-full max-w-lg flex-col justify-center gap-8 p-8 sm:py-16 lg:max-w-screen-lg lg:flex-row lg:gap-0 xl:px-0">
					<div className="flex w-full flex-col gap-8 sm:max-w-3xl lg:max-w-screen-lg lg:flex-row">
						<div className="flex w-full flex-col gap-8 self-center lg:max-w-[67%]">
							<img
								src="assets/images/jpg/sped.jpg"
								alt="Uma empresária com um tablet e um notebook sobre alguns gráficos, ao centro, sobreposto, o nome Sírius ERP envolto de símbolos que remetem a eficiência, versatilidade e os retornos"
							/>
							<h3 className="text-lg font-extrabold text-second sm:text-2xl">SOBRE O SPED E BLOCO K</h3>
							<p className="w-full text-base font-medium text-[#3c4a54]">
								O SPED (Sistema Público de Escrituração Digital) e o Bloco K são essenciais para simplificar os processos fiscais de qualquer
								empresa, independente do ramo de atuação. O Sírius Sped Fiscal e Bloco K está constantemente atualizado com as melhores
								tecnologias para oferecer uma solução prática e eficiente para empresas de todos os portes.
							</p>
							<p className="w-full text-base font-medium text-[#3c4a54]">
								Nossa solução atende completamente a toda legislação fiscal exigida pela SEFAZ, garantindo conformidade e simplicidade nos
								processos.
							</p>
							<ItemsInSolution
								items={[
									{
										title: "Sped Fiscal",
										description:
											"Integrado totalmente com as operações de compras e vendas, o Sped Fiscal calcula automaticamente os impostos de entrada e saída, realiza a captura de arquivos XML, gera o arquivo Sped mensalmente para envio à SEFAZ e contabilidade, entre outras funcionalidades.",
									},
									{
										title: "Bloco K",
										description:
											"Integrado com compras, estoque e produção, o Bloco K atua como parte do Sped Fiscal para controlar detalhadamente os saldos de entrada e saída de produtos e insumos, gerando mensalmente os arquivos Bloco K 200 e/ou 280 para envio à SEFAZ e contabilidade.",
									},
									{
										title: "Módulos Auxiliares",
										description:
											"Os módulos auxiliares, como Vendas, Compras e Produção, são fundamentais para a geração dos arquivos fiscais, contando com rotinas automáticas para minimizar erros e simplificar os processos.",
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

export default SpedEBlocoK2
