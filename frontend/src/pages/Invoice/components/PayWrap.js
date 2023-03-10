import clsx from 'clsx'
import { PaymentDescription } from 'pages/Invoices/components';

import '../styles/invoice.css';

const PayWrap = ({
	label,
	amount,
	pclass,
	color,
	margin,
	methodLine
}) => {

	const style = {
		...color && { color },
		borderTop: `1px solid ${color}`
	}

	return (
		<tr {...pclass ? { className: pclass } : {}}>
			<td
				colSpan="3"
				{...margin ? { className: margin } : {}}
			></td>
			<td
				className={clsx('text-start', margin)}
				colSpan="2"
				{...color && { style }}
			>
				<PaymentDescription
					label={label}
					methodLine={methodLine}
				/>
			</td>
			<td
				className={clsx('text-end', margin)}
				{...color && { style }}
			>
				{amount}
			</td>
		</tr>
	);
};

export default PayWrap;
