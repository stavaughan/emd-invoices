import { TextBetween } from "components/Wrappers"
import { useMobile } from "hooks"
import clsx from "clsx"

const InvoiceNumber = ({ number, className, color, sentStatus }) => {

	const { isXSmall } = useMobile()

	return (
		<TextBetween className="float-end py-auto mb-2" >
			<span className={clsx(
				isXSmall ? 'text-xs' : 'text-sm',
				'font-light leading-8',
				sentStatus !== 'sent' && 'highlighted'
			)}>
				{sentStatus === 'sent' ? 'INVOICE#' : 'ESTIMATE#'}
			</span>
			<span
				className={clsx(
					isXSmall ? 'text-base' : 'text-xl',
					'leading-7', className
				)}
				style={{ color }}
			>
				{number + (sentStatus !== 'sent' ? 'e' : '')}
			</span>
		</TextBetween>
	)
}

export default InvoiceNumber
