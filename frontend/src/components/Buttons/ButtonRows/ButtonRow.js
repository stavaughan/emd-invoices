import { RowButton } from '.';

const ButtonRow = ({ btnItems, test = true }) => {

	return (
		<span className="d-print-none">
			{btnItems.map((btn, idx) => (
				<RowButton
					key={btn._id}
					btn={btn}
					test={test}
					{...idx !== btnItems.length - 1 && { margin: 'me-2' }}
				/>
			))}
		</span>
	);
}

export default ButtonRow
