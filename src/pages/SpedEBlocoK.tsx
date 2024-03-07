import Footer from "../components/Footer"
import Header from "../components/Header"
import ItemsInSolution from "../components/ItemsInSolution"
import LateralNavBar from "../components/LateralNavBar"
import Menu from "../components/Menu"
import Products from "../components/Products"
import SupportWhatsapp from "../components/SupportWhatsapp"
import Whatsapp from "../components/Whatsapp"

function SpedEBlocoK() {
	const title = "Soluções Fiscais"

	return (
		<>
			<Menu />
			<Header title={title} subtitle="Necessário para todos os negócios" />
			<main className="flex w-full flex-col items-center justify-center gap-8 ">
				<div className="item-center flex w-full max-w-lg flex-col justify-center gap-8 p-8 sm:py-16 lg:max-w-screen-lg lg:flex-row lg:gap-0 xl:px-0 ">
					<div className="flex w-full flex-col gap-8 sm:max-w-3xl lg:max-w-screen-lg lg:flex-row">
						<div className="flex w-full flex-col gap-8 self-center lg:max-w-[67%]">
							<img
								src="assets/images/jpg/sped.jpg"
								alt="Uma empresária com um tablet e um notebook sobre alguns gráficos, ao centro, sobreposto, o nome Sírius ERP envolto de símbolos que remetem a eficiência, versatilidade e os retornos"
							/>
							<h3 className="text-lg font-extrabold text-second sm:text-2xl">SOBRE O SPED E BLOCO K</h3>
							<p className="w-full text-base font-medium text-[#3c4a54]">
								Sistema completo que facilita os processos fiscais de qualquer empresa, seja comércio, indústria, distribuição ou atacado.
								Atende a qualquer segmento do mercado. O Sírius Sped Fiscal e Bloco K está em constante atualização. Disponibilizamos as
								melhores e mais avançadas tecnologias para atender de forma prática a qualquer tipo de empresa, seja de micro, pequeno e médio
								porte.
							</p>
							<p className="w-full text-base font-medium text-[#3c4a54]">
								Atende completamente a toda Legislação Fiscal exigida pela SEFAZ de forma eficaz e totalmente simplificada.
							</p>
							<ItemsInSolution
								items={[
									{
										title: "Sped Fiscal",
										description:
											"Totalmente integrado com compras e vendas. Cálculo de impostos de entrada e saída. Captura do arquivo XML. Atribuição automática das CFOP´S de entrada e das CST´S de ICMS, IPI, PIS E COFINS. Geração mensal do arquivo Sped para envio a SEFAZ e contabilidade. Geração de livro fiscal para conferência com livro da contabilidade. Permite conversão das unidades de medidas (compra x venda) e rateio de impostos. Pode ser contratado separadamente de nosso ERP e integrado ao seu sistema. Você não precisa substituir todos os sistemas de sua empresa.",
									},
									{
										title: "Bloco K",
										description:
											"Totalmente integrado com as compras, estoque e produção. O Bloco K atua como um componente do Sped Fiscal para controle detalhado dos saldos de entrada e saída de produtos e insumos. Geração mensal do arquivo Bloco K 200 e/ou 280 para envio a SEFAZ e para a contabilidade com movimentações das compras, vendas e produção. Também controla os insumos. Controla estoque próprio e estoque em poder de terceiros. Pode ser contratado separadamente de nosso ERP e integrado ao seu sistema. Você não precisa substituir todos os sistemas de sua empresa.",
									},
									{
										title: "Módulos Auxiliares",
										description:
											"Os módulos auxiliares ao Sped Fiscal e Bloco K são: Vendas, Compras e Produção. Estes módulos são fundamentais para geração dos arquivos. Os módulos contam com rotinas automáticas que minimizam processos manuais e possíveis erros que interferem no resultado final.",
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

export default SpedEBlocoK
