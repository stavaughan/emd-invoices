import { useMemo } from 'react';
import { Card, CardBody } from 'components/Card';
import { SnapShotPerformance } from '.';
import { amountUSD } from 'globals/js';
import clsx from 'clsx';
import { ArrowLinkButton } from 'components/Buttons/Type';

const InvoicesSnapShot = ({
	title,
	subTitle,
	sub1,
	amount,
	button,
	quantity,
	change,
	changeLabel,
	change2,
	changeLabel2
}) => {

	const formatAmount = useMemo(() => {
		return amount?.type === 'dollars' ? amountUSD({ num: amount?.number }) : ''
	}, [amount?.type, amount?.number]);

	return (
		<Card className={clsx(
			'bd-callout bd-callout-top-primary-softer rounded-3',
			'mb-sm-5 d-flex align-items-center'
		)}>
			<CardBody classBody="text-center">
				{sub1 && (
					<div className="text-sm card-text text-blue-400 fw-bolder pb-0 mb-2">
						{sub1}
					</div>
				)}
				<div className="text-lg text-blue-600 pb-0 mb-3">
					{title}
					{subTitle && (
						<div className="text-xs text-primary-blue-dark pt-1">{subTitle}</div>
					)}
				</div>
				{formatAmount && (
					<div className="text-xl font-bold text-primary mb-2">
						{formatAmount}
					</div>
				)}
				{quantity && (
					<div className="text-xs card-text text-slate-500 mb-4">
						- {`${quantity} invoices`} -
					</div>
				)}
				{button?.id && <ArrowLinkButton onClick={button.handleClick} label={button.label} />}
				{change ? <SnapShotPerformance amount={change} label={changeLabel} /> : null}
				{change2 ? <SnapShotPerformance amount={change2} label={changeLabel2} /> : null}
			</CardBody>
		</Card>
	)
}

export default InvoicesSnapShot
