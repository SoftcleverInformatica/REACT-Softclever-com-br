import { faBars, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	Image,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from "@nextui-org/react"
import { useState } from "react"
import { FaWhatsapp } from "react-icons/fa6"
import { Link } from "react-router-dom"

interface SvgProps {
	fill?: string
	size?: number
	height?: number
	width?: number
	[key: string]: unknown // Propriedades adicionais
}

const ChevronDown = ({ fill, size, height, width, ...props }: SvgProps) => {
	return (
		<svg
			fill="none"
			height={size || height || 24}
			viewBox="0 0 24 24"
			width={size || width || 24}
			xmlns="http://www.w3.org/2000/svg"
			{...props}
			className="text-white"
		>
			<path
				d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
				stroke={fill}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeMiterlimit={10}
				strokeWidth={3.5}
			/>
		</svg>
	)
}

function Menu() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const menuItems = [
		{ label: "A SOFT CLEVER", key: "a-soft-clever" },
		{ label: "SOLUÇÕES", key: "solucoes" },
		{ label: "CLIENTES", key: "clientes" },
		{ label: "CONTATO", key: "contato" },
		{ label: "SUPORTE", key: "suporte" },
	]

	const solutionItems = [
		{ key: "sat-e-nfc-e", label: "S@T E NFC-e" },
		{ key: "gestao-erp", label: "GESTÃO ERP" },
		{ key: "solucoes-fiscais", label: "SOLUÇÕES FISCAIS" },
		{ key: "sped-e-bloco-k", label: "SPED E BLOCO K" },
	]

	const SolutionsDropdown = () => {
		const icons = {
			chevron: <ChevronDown fill="currentColor" size={16} />,
		}

		return (
			<Dropdown>
				<DropdownTrigger>
					<Button
						disableRipple
						className="bg-transparent p-0 data-[hover=true]:bg-transparent "
						endContent={icons.chevron}
						radius="sm"
						variant="light"
					>
						<p className="text-ms font-bold text-first">SOLUÇÕES</p>
					</Button>
				</DropdownTrigger>
				<DropdownMenu
					aria-label="Dynamic Actions"
					className="w-[340px]"
					itemClasses={{
						base: "gap-4",
					}}
					items={solutionItems}
				>
					{(solutionItem) => (
						<DropdownItem
							className="text-ms font-semibold text-second"
							key={solutionItem.key}
							textValue={solutionItem.label}
							href={`/${solutionItem.key}`}
						>
							<span className="text-ms font-semibold text-second">{solutionItem.label}</span>
						</DropdownItem>
					)}
				</DropdownMenu>
			</Dropdown>
		)
	}

	return (
		<Navbar
			className="flex w-full justify-center bg-second px-2 lg:px-0"
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
			position="sticky"
			isBordered
			isBlurred={false}
		>
			<NavbarContent>
				<NavbarBrand className="aspect-[172/48] h-12">
					<Link className="aspect-[172/48] h-12" to={"/home"}>
						<Image className="aspect-[172/48] h-12 rounded-none" src="assets/images/png/softclever-logo.png" />
					</Link>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden gap-8 pr-3 lg:flex" justify="center">
				{menuItems.map((item, index) => (
					<NavbarItem key={item.key} isActive>
						{index !== 1 ? (
							<Link className="text-ms font-bold text-first" to={`/${item.key}`}>
								{item.label}
							</Link>
						) : (
							<SolutionsDropdown />
						)}
					</NavbarItem>
				))}
				<NavbarItem className="flex items-center justify-center gap-2">
					<FontAwesomeIcon icon={faPhone} style={{ color: "#03BFCB" }} />
					<span className="text-ms font-bold text-third">(11) 3991-3923 /</span>
					<FaWhatsapp className="text-third" size={20} />
					<Link to={"https://web.whatsapp.com/send?phone=5511992810249"} className="text-ms font-bold text-third">
						(11) 99281-0249
					</Link>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="lg:hidden" justify="end">
				<NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} icon={<FontAwesomeIcon icon={faBars} style={{ color: "#ffffff" }} />} />
			</NavbarContent>

			<NavbarMenu className="bg-second">
				{menuItems.map((item, index) => (
					<NavbarItem key={item.key} isActive>
						{index !== 1 ? (
							<Link className="text-ms font-bold text-first" to={`/${item.key}`}>
								{item.label}
							</Link>
						) : (
							<SolutionsDropdown />
						)}
					</NavbarItem>
				))}
				<NavbarMenuItem className="flex items-center gap-2">
					<FontAwesomeIcon icon={faPhone} style={{ color: "#03BFCB" }} />
					<span className="text-ms font-bold text-third">(11) 3991-3923</span>
				</NavbarMenuItem>
			</NavbarMenu>
		</Navbar>
	)
}

export default Menu
