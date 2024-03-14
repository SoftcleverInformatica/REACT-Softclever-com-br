import VideosCarousel from "../../components/Carousels/VideosCarousel"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import ItemsInSolution from "../../components/ItemsInSolution"
import LateralNavBar from "../../components/LateralNavBar"
import Products from "../../components/Products"
import SupportWhatsapp from "../../components/SupportWhatsapp"
import Whatsapp from "../../components/Whatsapp"
import Menu2 from "./Menu2"

function GestaoErp2() {
	const title = "Gestão ERP"

	const videos = ["https://www.youtube.com/watch?v=83Pxy3TwN2w", "https://www.youtube.com/watch?v=GwttGRBPf1M"]

	return (
		<>
			<Menu2 />
			<Header title={title} subtitle="Software de melhor custo-benefício do mercado" />
			<main className="flex w-full flex-col items-center justify-center gap-8">
				<div className="item-center flex w-full max-w-lg flex-col justify-center gap-8 p-8 sm:py-16 lg:max-w-screen-lg lg:flex-row lg:gap-0 xl:px-0">
					<div className="flex w-full flex-col gap-8 sm:max-w-3xl lg:max-w-screen-lg lg:flex-row">
						<div className="flex w-full flex-col gap-8 self-center lg:max-w-[67%]">
							<img
								src="assets/images/jpg/erp.jpg"
								alt="Uma empresária com um tablet e um notebook sobre alguns gráficos, ao centro, sobreposto, o nome Sírius ERP envolto de símbolos que remetem a eficiência, versatilidade e os retornos"
							/>
							<h3 className="text-lg font-extrabold text-second sm:text-2xl">SOBRE A GESTÃO ERP</h3>
							<p className="w-full text-base font-medium text-[#3c4a54]">
								Sistema de gestão empresarial completo que facilita o fluxo de informações entre todos os setores da empresa, incluindo
								produção, compras, vendas, estoque, fiscal, financeiro, expedição, cobrança e outros.
							</p>
							<p className="w-full text-base font-medium text-[#3c4a54]">
								O Sírius ERP está em constante atualização e crescimento, atendendo mais de 12 mil usuários. Disponibilizamos as melhores e mais
								avançadas tecnologias para atender de forma prática qualquer tipo de empresa, desde micro até médio porte. Além disso, nosso
								sistema está em conformidade com a legislação fiscal exigida pela SEFAZ, proporcionando simplicidade e agilidade.
							</p>
							<ItemsInSolution
								items={[
									{
										title: "Pedidos de Vendas",
										description:
											"Gerencie pedidos de vendas de maneira expressa ou detalhada, integrado com estoque e financeiro. Controle entregas parciais ou totais, geração de orçamentos, reserva de produtos, liberação e expedição de pedidos, entre outras funcionalidades.",
									},
									{
										title: "Financeiro",
										description:
											"Controle detalhado das contas a pagar e a receber, conciliação bancária, geração de boletos bancários, integração de pagamentos bancários, controle de fluxo de caixa, projeção de despesas, entre outras funcionalidades.",
									},
									{
										title: "Nota Fiscal de Produtos",
										description:
											"Emissão de Nota Fiscal Eletrônica (NF-e) integrada com estoque e financeiro, com rotinas de cancelamento, inutilização, carta de correção, entre outras.",
									},
									{
										title: "Produção",
										description:
											"Geração de ordens de produção a partir de pedidos de venda, controle por fases da produção, baixa automática de matérias-primas, remessa parcial de matérias-primas a terceiros, entre outras funcionalidades.",
									},
									{
										title: "Entrada para Beneficiamento",
										description:
											"Controle detalhado das entradas de mercadorias destinadas a processos de beneficiamento, incluindo emissão de notas fiscais e controle de saldos de matérias-primas e produtos acabados.",
									},
									{
										title: "Relatórios Gerenciais",
										description:
											"Oferece diversas opções de filtros e relatórios, incluindo totais de vendas por período, movimentações de vendas e saídas, movimentações do caixa, curva ABC de clientes, produtos e vendedores, entre outros.",
									},
									{
										title: "Compras",
										description:
											"Geração de pedidos de compras para serviços ou produtos, importação de arquivos XML, impressão de pedidos de compra, entre outras funcionalidades.",
									},
									{
										title: "Ordens de Serviços",
										description:
											"Controle de entradas de itens para conserto, geração de orçamentos e ordens de serviços, entre outras funcionalidades.",
									},
									{
										title: "Nota Fiscal de Serviços",
										description:
											"Emissão rápida e em lote de Nota Fiscal de Serviços Eletrônica (NFS-e), integrada com o financeiro e envio automático de PDF por e-mail.",
									},
									{
										title: "Orçamentos",
										description:
											"Controle completo dos orçamentos, incluindo envio parcial de produtos para pedidos de venda, controle de saldos, curva ABC de orçamentos, relatórios comparativos, entre outras funcionalidades.",
									},
									{
										title: "Cadastros",
										description:
											"Controle completo dos cadastros de clientes, fornecedores, produtos, transportadores e vendedores, com relatórios gerados a partir do filtro escolhido.",
									},
									{
										title: "Tabelas Auxiliares",
										description:
											"Permitem cadastros auxiliares para emissão de notas fiscais, cadastro de produtos, clientes e fornecedores, controle financeiro, produção e caixa, além de rotinas para sincronização dos cadastros.",
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
					title={title}
					mensal={{
						items: [
							"Suporte online ilimitado",
							"Instalação remota inclusa",
							"Treinamento remoto incluso",
							"Sem fidelidade",
							"Mensalidade via Boleto",
							"Com taxa de implantação",
						],
					}}
					semestral={{
						items: [
							"Suporte online ilimitado",
							"Instalação remota inclusa",
							"Treinamento remoto incluso",
							"Com fidelidade de 6 meses",
							"À Vista ou Parcelado*",
							"Sem taxa de implantação",
							"Desconto de até 12,5%*",
						],
					}}
					anual={{
						items: [
							"Suporte online ilimitado",
							"Instalação remota inclusa",
							"Treinamento remoto incluso",
							"Com fidelidade de 12 meses",
							"À Vista ou Parcelado*",
							"Sem taxa de implantação",
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

export default GestaoErp2
