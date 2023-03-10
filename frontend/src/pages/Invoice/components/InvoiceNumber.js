import { TextBetween } from "components/Wrappers"
import clsx from "clsx"

const InvoiceNumber = ({ number, className, color, sent }) => {

	return (
		<TextBetween className="float-end mb-2 w-75">
			<span className={clsx(
				'text-sm font-light leading-8',
				!sent && 'highlighted'
			)}>
				{sent ? 'INVOICE# ' : 'ESTIMATE# '}
			</span>
			<span
				className={clsx('text-2xl leading-7', className)}
				style={{ color }}
			>
				{number + (!sent ? 'e' : '')}
			</span>
		</TextBetween>
	)
}

export default InvoiceNumber
