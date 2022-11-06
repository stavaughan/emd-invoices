import { TableWrap } from 'components/Tables';

const SelectedItemRows = (props) => {

	return (
		<div className="table-responsive">
			<TableWrap>
				<tbody>
					{props.children}
				</tbody>
			</TableWrap>
		</div>
	)
}

export default SelectedItemRows
