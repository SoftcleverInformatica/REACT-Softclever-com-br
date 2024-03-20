import { Button, Input, Textarea } from "@nextui-org/react"
import { ChangeEvent, FormEvent, useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Menu from "../components/Menu"
import SupportWhatsapp from "../components/SupportWhatsapp"
import Whatsapp from "../components/Whatsapp"

interface FormValues {
	nome: string
	empresa: string
	email: string
	telefone: string
	mensagem: string
	quem_enviou: string // Adicionado campo site_que_enviou
}

interface FormErrors {
	nome: string
	empresa: string
	email: string
	telefone: string
	mensagem: string
}

function Contato() {
	const initialFormValues: FormValues = {
		nome: "",
		email: "",
		telefone: "",
		empresa: "",
		mensagem: "",
		quem_enviou: "www.softclever.com.br",
	}

	const [formValues, setFormValues] = useState<FormValues>(initialFormValues)
	const [formErrors, setFormErrors] = useState<FormErrors>({
		nome: "",
		empresa: "",
		email: "",
		telefone: "",
		mensagem: "",
	})

	const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target
		setFormValues({
			...formValues,
			[name]: value,
		})
		// Remover mensagem de erro ao começar a digitar
		setFormErrors({
			...formErrors,
			[name]: "",
		})
	}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log("handleSubmit")
		const errors: FormErrors = {
			nome: !formValues.nome ? "Preencha esse campo" : "",
			empresa: !formValues.empresa ? "Preencha esse campo" : "",
			email: !formValues.email ? "Insira um email válido" : "",
			telefone: !formValues.telefone ? "Preencha esse campo" : "",
			mensagem: !formValues.mensagem ? "Preencha esse campo" : "",
		}

		setFormErrors(errors)

		const headers = {
			"Content-Type": "application/json",
		}
		formValues.mensagem = "Softclever | " + formValues.mensagem
		const body = JSON.stringify(formValues)
		async function request() {
			if (Object.values(errors).every((error) => !error)) {
				try {
					const response = await fetch("https://www.api.emissorsatfiscal.net.br/email?token=S0ftCL5vEr!Td4iN70rm@t!CA", {
						method: "POST",
						headers: headers,
						body: body,
					})

					if (response.ok) {
						// Aqui você pode tratar a resposta do servidor se necessário
						console.log("Formulário enviado com sucesso!")
					} else {
						console.error("Erro ao enviar o formulário:", response.statusText)
					}
				} catch (error) {
					console.error("Erro ao enviar o formulário:", error)
				}
			}
		}

		request()
	}

	return (
		<>
			<Menu />
			<Header title={"Contato"} subtitle="Entre em contato" />
			<main className="flex w-full flex-col items-center justify-center gap-8">
				<div className="item-center flex w-full flex-col justify-center gap-8 p-8 sm:p-16 lg:flex-row lg:gap-0">
					<div className="flex w-full flex-col gap-8 sm:max-w-3xl sm:flex-row lg:max-w-screen-lg">
						<div className="flex w-full min-w-64 flex-col gap-8 self-center sm:max-w-[33%]">
							<SupportWhatsapp />
							<div className="w-full border-b-1 border-[#bcced8] pb-8">
								<h3 className="pb-6 text-2xl font-bold text-second sm:text-3xl">Telefone</h3>
								<p className="text-ms font-medium text-text sm:text-sm">(11) 3991-3923</p>
							</div>
							<div className="w-full border-b-1 border-[#bcced8] pb-8">
								<h3 className="pb-6 text-2xl font-bold text-second sm:text-3xl">Telefone</h3>
								<p className="text-ms font-medium text-text sm:text-sm">(11) 2361-8334</p>
							</div>
						</div>
						<form className="flex w-full flex-col gap-8 sm:max-w-[67%]" onSubmit={handleSubmit}>
							<Input
								isRequired
								type="text"
								name="nome"
								label="Nome"
								variant="bordered"
								isInvalid={!!formErrors.nome}
								errorMessage={formErrors.nome}
								value={formValues.nome}
								onChange={handleInputChange}
							/>
							<Input
								isRequired
								type="text"
								name="empresa"
								label="Empresa"
								variant="bordered"
								isInvalid={!!formErrors.empresa}
								errorMessage={formErrors.empresa}
								value={formValues.empresa}
								onChange={handleInputChange}
							/>
							<Input
								isRequired
								type="email"
								name="email"
								label="Email"
								variant="bordered"
								isInvalid={!!formErrors.email}
								errorMessage={formErrors.email}
								value={formValues.email}
								onChange={handleInputChange}
							/>
							<Input
								isRequired
								type="tel"
								name="telefone"
								label="Telefone"
								variant="bordered"
								isInvalid={!!formErrors.telefone}
								errorMessage={formErrors.telefone}
								value={formValues.telefone}
								onChange={handleInputChange}
							/>
							<Textarea
								isRequired
								name="mensagem"
								label="Mensagem"
								variant="bordered"
								isInvalid={!!formErrors.mensagem}
								errorMessage={formErrors.mensagem}
								value={formValues.mensagem}
								onChange={handleInputChange}
							/>
							<Button color="primary" type="submit">
								Enviar
							</Button>
						</form>
					</div>
				</div>
			</main>
			<Footer />
			<Whatsapp />
		</>
	)
}

export default Contato
