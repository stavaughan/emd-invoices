import clsx from 'clsx'

import '../styles/invoice.css';

const PayWrap = ({ label, amount, pclass, color, margin }) => {

	const style = {
		...color && { color },
		borderTop: `1px solid ${color}`
	}

	return (
		<tr {...pclass && { className: pclass }}>
			<td
				colSpan="3"
				{...margin && { className: margin }}
			></td>
			<td
				className={clsx('text-start paywrap', margin)}
				colSpan="2"
				{...color && { style }}
			>
				{label}
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
