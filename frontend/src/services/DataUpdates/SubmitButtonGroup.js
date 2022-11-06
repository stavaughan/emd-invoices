import { CancelSubmitGroup } from 'components/Buttons/Type';

const SubmitButtonGroup = ({
	setClear,
	isLoading,
	setDisplay,
	entering
}) => {

	return (
		<div className="px-3">
			<hr />
			<CancelSubmitGroup
				float="end"
				className="mb-3 pe-2"
				displayCancel={!!entering}
				disabled={!entering || isLoading}
				handleCancel={() => {
					entering ? setDisplay(true) : setClear(true)
				}}
				isLoading={isLoading}
			/>
		</div>
	)
}

export default SubmitButtonGroup
