import VideosCarousel from "../components/Carousels/VideosCarousel"
import Footer from "../components/Footer"
import Header from "../components/Header"
import ItemsInSolution from "../components/ItemsInSolution"
import LateralNavBar from "../components/LateralNavBar"
import Menu from "../components/Menu"
import Products from "../components/Products"
import SupportWhatsapp from "../components/SupportWhatsapp"
import Whatsapp from "../components/Whatsapp"

function SatENfce() {
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
								src="assets/images/jpg/sat.jpg"
								alt="Um celular com enfeites de lojas e uma placa pendurada como se fosse em uma porta escrita 'open'"
							/>
							<h3 className="text-lg font-extrabold text-second sm:text-2xl">SOBRE O SÍRIUS S@T E SÍRIUS NFC-E</h3>
							<p className="w-full text-base font-medium text-[#3c4a54]">
								Sistema de gestão completo, simples e prático, com tecnologia avançada, está em constante atualização, crescimento e com
								milhares de Comércios atendidos. Atuando em todos os estados, disponibilizamos as melhores funcionalidades para atender a
								qualquer tipo de Comércio com vendas em atacado, varejo e serviços.
							</p>
							<p className="w-full text-base font-medium text-[#3c4a54]">
								Sistema homologado na Secretaria da Fazenda, atende completamente a toda Legislação Fiscal exigida pela SEFAZ de forma eficaz e
								totalmente simplificada.
							</p>
							<ItemsInSolution
								items={[
									{
										title: "Pré-Vendas",
										description:
											"Pedidos e orçamentos de vendas. Fácil e ágil. Integra o pedido de venda com o caixa (emissão de cupom fiscal).",
									},
									{
										title: "Controle de Caixa",
										description:
											"Permite ao usuário acompanhamento diário das movimentações do caixa. Rotinas de abertura e fechamento do caixa, reforços e sangrias e muito mais.",
									},
									{
										title: "Controle de Estoque",
										description:
											"Rotinas simplificadas que facilitam o controle de entrada e saída de produtos. Totalmente integrado com o pedido de compras, pré-vendas e cupom fiscal.",
									},
									{
										title: "Delivery",
										description:
											"Localize rapidamente o cadastro do cliente. Emissão de comandas e controle simplificado dos pedidos para a entrega. Permite finalizar a venda através da emissão do cupom fiscal.",
									},
									{
										title: "Comandas",
										description:
											"Atende comércios que necessitem controlar mesas e/ou comandas. Fácil inclusão e alteração de produtos além de ser possível finalizar a venda através da emissão do cupom fiscal.",
									},
									{
										title: "WEB Lojas",
										description:
											"Gerenciamento online e a distância de uma ou mais lojas, sendo possível cadastrar produtos, verificar saldos em estoque, histórico de vendas e valores em caixa.",
									},
									{
										title: "APP Pré-Vendas",
										description:
											"Aplicativo desenvolvido para celulares Android. Permite a geração de pré-vendas e comandas facilitando e agilizando as vendas para emissão do cupom fiscal.",
									},
									{
										title: "Financeiro",
										description:
											"Integrado com compras e vendas, permite ao usuário controle detalhado das contas a pagar e a receber, além de diversas opções de filtros e relatórios facilitando a gestão financeira.",
									},
									{
										title: "Relatórios",
										description:
											"Relatórios com totais de vendas e totais de comissões por vendedores e muito mais. Facilita a gestão das vendas realizadas e auxilia no pagamento de comissões.",
									},
									{
										title: "Formas de Pagamentos",
										description:
											"Permite ao usuário cadastrar diferentes tipos de formas de pagamentos, além de ser possível a integração com maquinas de cartões de crédito/débito.",
									},
									{
										title: "Cadastros",
										description:
											"Controle completo dos cadastros de Clientes, Fornecedores, Produtos e Vendedores. Relatórios com dados dos cadastros que podem ser gerados a partir do filtro escolhido.",
									},
									{
										title: "Pedidos de Compras",
										description:
											"Totalmente integrado com o estoque e financeiro a pagar. Permite ao usuário gerar pedidos de compras para os fornecedores, facilitando o controle de estoque e a gestão financeira.",
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

export default SatENfce
