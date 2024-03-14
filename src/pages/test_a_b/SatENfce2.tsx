import VideosCarousel from "../../components/Carousels/VideosCarousel"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import ItemsInSolution from "../../components/ItemsInSolution"
import LateralNavBar from "../../components/LateralNavBar"
import Menu from "../../components/Menu"
import Products from "../../components/Products"
import SupportWhatsapp from "../../components/SupportWhatsapp"
import Whatsapp from "../../components/Whatsapp"

function SatENfce2() {
	const title = "S@T – NFC-E"

	const videos = ["https://www.youtube.com/watch?v=83Pxy3TwN2w", "https://www.youtube.com/watch?v=GwttGRBPf1M"]

	return (
		<>
			<Menu />
			<Header title={title} subtitle="IDEAL PARA PEQUENOS E MÉDIOS COMÉRCIOS VAREJISTAS" />
			<main className="flex w-full flex-col items-center justify-center gap-8">
				<div className="item-center flex w-full max-w-lg flex-col justify-center gap-8 p-8 sm:py-16 lg:max-w-screen-lg lg:flex-row lg:gap-0 xl:px-0">
					<div className="flex w-full flex-col gap-8 sm:max-w-3xl lg:max-w-screen-lg lg:flex-row">
						<div className="flex w-full flex-col gap-8 self-center lg:max-w-[67%]">
							<img
								src="assets/images/jpg/cell.jpg"
								alt="Um celular com enfeites de lojas e uma placa pendurada como se fosse em uma porta escrita 'open'"
							/>
							<h3 className="text-lg font-extrabold text-second sm:text-2xl">SOBRE O SÍRIUS S@T E SÍRIUS NFC-E</h3>
							<p className="w-full text-base font-medium text-[#3c4a54]">
								O Sistema de gestão Sírius S@T e Sírius NFC-E é completo, simples e prático, utilizando tecnologia avançada. Está sempre em
								constante atualização e crescimento, com milhares de comércios atendidos em todo o país. Seja no atacado, varejo ou serviços,
								oferecemos as melhores funcionalidades para atender a qualquer tipo de comércio.
							</p>
							<p className="w-full text-base font-medium text-[#3c4a54]">
								Nosso sistema é homologado na Secretaria da Fazenda e cumpre totalmente toda a legislação fiscal exigida pela SEFAZ de forma
								eficaz e simplificada.
							</p>
							<ItemsInSolution
								items={[
									{
										title: "Pré-Vendas",
										description:
											"Pedidos e orçamentos de vendas facilitados e ágeis, integrando o pedido de venda com o caixa para a emissão de cupom fiscal.",
									},
									{
										title: "Controle de Caixa",
										description:
											"Acompanhe diariamente as movimentações do caixa com facilidade. Realize aberturas e fechamentos, reforços, sangrias e muito mais.",
									},
									{
										title: "Controle de Estoque",
										description:
											"Facilite o controle de entrada e saída de produtos com rotinas simplificadas. Totalmente integrado com pedido de compras, pré-vendas e cupom fiscal.",
									},
									{
										title: "Delivery",
										description:
											"Simplifique o controle de pedidos para entrega, emitindo comandas e controlando os pedidos de forma eficiente. Finalize a venda com a emissão do cupom fiscal.",
									},
									{
										title: "Comandas",
										description:
											"Atenda comércios que precisam controlar mesas e/ou comandas. Facilite a inclusão e alteração de produtos e finalize a venda com a emissão do cupom fiscal.",
									},
									{
										title: "WEB Lojas",
										description:
											"Gerencie uma ou mais lojas de forma online e remota, cadastrando produtos, verificando estoque, histórico de vendas e valores em caixa.",
									},
									{
										title: "APP Pré-Vendas",
										description:
											"Aplicativo para celulares Android que permite a geração de pré-vendas e comandas, agilizando as vendas para a emissão do cupom fiscal.",
									},
									{
										title: "Financeiro",
										description:
											"Controle detalhado das contas a pagar e a receber, integrado com compras e vendas. Opções avançadas de filtros e relatórios para facilitar a gestão financeira.",
									},
									{
										title: "Relatórios",
										description:
											"Relatórios detalhados com totais de vendas e comissões por vendedores, facilitando a gestão das vendas realizadas e auxiliando no pagamento de comissões.",
									},
									{
										title: "Formas de Pagamentos",
										description: "Cadastre diferentes formas de pagamento e integre com máquinas de cartões de crédito/débito.",
									},
									{
										title: "Cadastros",
										description:
											"Controle completo dos cadastros de clientes, fornecedores, produtos e vendedores, com relatórios detalhados disponíveis.",
									},
									{
										title: "Pedidos de Compras",
										description:
											"Totalmente integrado com estoque e financeiro a pagar. Gere pedidos de compras para fornecedores e facilite o controle de estoque e gestão financeira.",
									},
								]}
							/>
						</div>
						<div className="flex w-full flex-col gap-4 lg:max-w-[33%]">
							<SupportWhatsapp />
							<img src="assets/images/png/sat.png" alt="Varejista com avental vermelho" />
							<h3 className="w-full pt-4 font-bold text-third">SOFT CLEVER</h3>
							<h2 className="w-full text-3xl font-black text-second">Nossas Soluções</h2>
							<LateralNavBar />
						</div>
					</div>
				</div>

				<VideosCarousel videos={videos} />

				<Products
					title={title}
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

export default SatENfce2
