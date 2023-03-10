const PaymentDescription = ({ label, methodLine }) => {
	return (
		<div className="d-flex flex-column align-items-start">
			<div>{label}</div>
			{methodLine && (
				<div className="text-xxs text-slate-400 fst-italic">
					{methodLine}
				</div>
			)}
		</div>
	)
}

export default PaymentDescription
