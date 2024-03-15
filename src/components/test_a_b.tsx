import { ReactNode, useEffect, useRef, useState } from "react"
import { FaUsers } from "react-icons/fa"
import { FaRegUser } from "react-icons/fa6"
import { GrUserManager } from "react-icons/gr"
import { LuCable } from "react-icons/lu"

const DataCounters = () => {
	const DataCounter = ({ icon, title, value, classNames }: { icon: ReactNode; title: string; value: number; classNames?: string }) => {
		const [isVisible, setIsVisible] = useState(false)
		const dataCounterRef = useRef<HTMLDivElement>(null)

		function ValueUpdater(finalValue: number): number {
			const [currentValue, setCurrentValue] = useState(0)
			const increment = finalValue / 60 // Calcula o incremento

			useEffect(() => {
				if (!isVisible) return // Não atualiza se não estiver visível

				const interval = setInterval(() => {
					setCurrentValue((prevValue) => {
						const newValue = prevValue + increment
						if (newValue >= finalValue) {
							clearInterval(interval) // Para o intervalo quando o valor final for alcançado
							return finalValue
						} else {
							return Math.round(newValue * 100) / 100 // Arredonda o valor para conter valores decimais
						}
					})
				}, 16) // Intervalo de atualização em milissegundos

				return () => clearInterval(interval) // Limpa o intervalo quando o componente é desmontado
				// eslint-disable-next-line react-hooks/exhaustive-deps
			}, [finalValue, increment, isVisible]) // Executa o efeito sempre que o valor final ou a visibilidade mudar

			return currentValue
		}

		return (
			<div ref={dataCounterRef} className={`${classNames} flex w-full gap-4 sm:max-w-[50%] lg:w-[25%] lg:flex-grow`}>
				<div className="flex h-12 w-12 items-center justify-center rounded bg-second">{icon}</div>
				<div className="flex flex-grow flex-col">
					<p className="w-full font-bold text-second">{title.toUpperCase()}</p>
					<p className="w-full font-bold text-third">
						{ValueUpdater(value).toFixed(0)}
						<span className="font-bold text-third">+</span>
					</p>
				</div>
			</div>
		)
	}

    return <p>a</p>
}
export default DataCounters