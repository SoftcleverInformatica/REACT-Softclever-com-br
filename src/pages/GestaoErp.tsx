import VideosCarousel from "../components/carousels/VideosCarousel"
import Footer from "../components/Footer"
import Header from "../components/Header"
import ItemsInSolution from "../components/ItemsInSolution"
import LateralNavBar from "../components/LateralNavBar"
import Menu from "../components/Menu"
import Products from "../components/Products"
import SupportWhatsapp from "../components/SupportWhatsapp"
import Whatsapp from "../components/Whatsapp"

function GestaoErp() {
	const title = "Gestão ERP"

	const videos = ["https://www.youtube.com/watch?v=83Pxy3TwN2w", "https://www.youtube.com/watch?v=GwttGRBPf1M"]

	return (
		<>
			<Menu />
			<Header title={title} subtitle="SOFTWARE DE MELHOR CUSTO X BENEFICIO DO MERCADO" />
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
								Sistema de gestão empresarial completo que facilita o fluxo de informações entre todos os setores da empresa, tais como:
								produção, compras, vendas, estoque, fiscal, financeiro, expedição, cobrança e afins.
							</p>
							<p className="w-full text-base font-medium text-[#3c4a54]">
								O Sírius ERP está em constante atualização e crescimento e conta com mais de 12 mil usuários atendidos. Disponibilizamos as
								melhores e mais avançadas tecnologias para atender de forma prática qualquer tipo de empresa de micro, pequeno, e médio porte.
								Atende completamente a Legislação Fiscal exigida pela SEFAZ. Tudo de forma simples e ágil.
							</p>
							<ItemsInSolution
								items={[
									{
										title: "Pedidos de Vendas",
										description:
											"Integrado com o estoque e financeiro. Emissão de pedidos de vendas de maneira expressa ou detalhada. Diversas opções de filtros e relatórios e finalização de vendas parciais ou totais através da emissão de NF-e ou NFS-e. Geração de orçamentos e transferências, controle de entregas parciais com elaboração de romaneio de carga, geração de ordem de produção, múltiplos status, troca e devolução com geração de crédito ao cliente, reserva de produtos, controle de movimentações financeiras dos clientes, liberação e expedição de pedidos, impressão de recibo de entrega, etiquetas e pedidos e muito mais.",
									},
									{
										title: "Financeiro",
										description:
											"Integrado com as compras e vendas. Controle detalhado das contas a pagar e a receber. Diversas opções de filtros e relatórios. Opções de controle de contas contábeis, centro de custos e departamento. Controle de conciliação bancárias. Gera boleto bancário com controle de remessa e retorno junto ao banco. Integração de pagamentos bancários através do SISPAG. Permite lançamento de despesas avulsas e de contas estimadas e/ou reais. Vínculo com conta corrente e cheques. Permite projeção de novas despesas, registro de pagamentos individuais, tudo individualmente ou através de filtro, Controle de fluxo de caixa, previsões e metas orçamentárias, controle de saldo bancários com transferência em contas correntes e muito mais.",
									},
									{
										title: "Nota Fiscal de Produtos",
										description:
											"Totalmente integrado com o estoque e financeiro, Nota Fiscal Eletrônica (NF-e) com envio e autorização junto a Secretaria da Fazenda SEFAZ. Rotinas de cancelamento e inutilização por faixa numérica, carta de correção, envio automático de e-mail com XML e PDF para o cliente, configurações de diversos tipos de operações com cálculo automático de impostos, pré-visualização e impressão do DANFE e opções de relatórios fiscais.",
									},
									{
										title: "Produção",
										description:
											"Totalmente integrado com o estoque. Geração de ordem de produção a partir do pedido de venda. Controle por fases da produção, controle por grade, baixa automática das matérias primas e remessa parcial de matérias primas a terceiros. Carga automática de estoque dos produtos acabados, impressão de ordem de produção, ficha técnica e ou de corte. Envia pagamento a terceiros para as contas a pagar.",
									},
									{
										title: "Entrada para Beneficiamento",
										description:
											"Totalmente integrado com o estoque, vendas e financeiro. Permite ao usuário controle detalhado das entradas de mercadorias que passarão pelos processos de beneficiamento. Entrada de notas, emissão de pedidos de vendas totais e parciais, controle de saldos de matérias primas e produtos acabados, emissão de NF-es a partir do pedido de venda com possibilidade de acrescentar mais de uma operação na mesma NF-e.",
									},
									{
										title: "Relatórios Gerenciais",
										description:
											"Essenciais para o controle completo e gestão financeira da empresa. Permite ao usuário diversas opções de filtros e relatórios com totais de vendas detalhado por período, movimentações de vendas e saídas, movimentações do caixa com opções de resumo por forma e condição de pagamento, Curva ABC de Clientes, Produtos e Vendedores e Fornecedores e mapas de vendas.",
									},
									{
										title: "Compras",
										description:
											"Totalmente integrado com o estoque e financeiro. Permite ao usuário gerar pedidos de compras para serviços ou produtos. Também é possível importar arquivos XMLs enviado pelos fornecedores. Impressão de diversos modelos de pedidos de compra e diversas opções de filtros e relatórios.",
									},
									{
										title: "Ordens de Serviços",
										description:
											"Totalmente integrado com as vendas, estoque e financeiro. Controle de entradas dos itens que serão consertados. Geração de orçamentos e ordens de serviços. Envio para pedido de vendas e geração de nota fiscal. Baixa automática das peças utilizadas, diversas opções de status, filtros, relatório e rotinas com exportação para Excel.",
									},
									{
										title: "Nota Fiscal de Serviços",
										description:
											"Nota Fiscal de Serviços Eletrônica (NFS-e), com envio rápido e em lote para o sistema da prefeitura. Gerada a partir do pedido de venda e integrada com o financeiro. Envio automático de PDF por e-mail.",
									},
									{
										title: "Orçamentos",
										description:
											"Digitação e controle completo dos orçamentos. Permite ao usuário envio parcial dos produtos para os pedidos de vendas. Controle de saldos, curva ABC de orçamentos, opções de relatórios comparativos (Orçado x Faturado x Saldo), status Pendente e Realizado, Follow-Up e impressão de orçamentos.",
									},
									{
										title: "Cadastros",
										description:
											"Controle completo dos cadastros de Clientes, Fornecedores, Produtos, Transportadores e Vendedores. Relatórios com dados dos cadastros que podem ser gerados a partir do filtro escolhido. Diversas opções de rotinas que facilitam os controles e cadastros.",
									},
									{
										title: "Tabelas Auxiliares",
										description:
											"Essenciais para a melhor funcionalidade de cada módulo, permitem ao usuário cadastros auxiliares para emissão de Nota Fiscais, cadastro de produtos clientes e fornecedores, controle financeiro, produção e caixa, além de rotinas para a sincronização dos cadastros caso a empresa tenha mais de um banco de dados.",
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
						],
					}}
					semestral={{
						items: [
							"Suporte online ilimitado",
							"Instalação remota inclusa",
							"Treinamento remoto incluso",
							"Com fidelidade de 6 meses",
							"A Vista ou Parcelado*",
							"Desconto em relação ao valor mensal. Consulte",
						],
					}}
					anual={{
						items: [
							"Suporte online ilimitado",
							"Instalação remota inclusa",
							"Treinamento remoto incluso",
							"Com fidelidade de 12 meses",
							"A Vista ou Parcelado*",
							"Desconto em relação ao valor mensal. Consulte",
						],
					}}
				/>
			</main>
			<Footer />
			<Whatsapp />
		</>
	)
}

export default GestaoErp
