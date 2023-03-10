import { useRef, useMemo, useState } from 'react';
import { Card, CardBody } from 'components/Card';
import { ResultsTableWrapper, ResultsHeaderBar } from 'components/Tables/ResultsTable/components';
import { useCustomersLogic, HeadContent, ContentHeader } from '.';

import Classes from '../../../styles/modules/PropertyTable.module.css';

const CustomersContainer = ({
	customers,
	setDataUpdate,
	deleteId,
	setDeleteId,
	bodyFooter,
	pageCountInfo,
	loading
}) => {

	const {
		headerFooter,
		resultsData,
		setEditData,
		editReady
	} = useCustomersLogic({ setUpdate: setDataUpdate });

	const printRef = useRef(null);

	const [printing, setPrinting] = useState(false);

	const filteredData = useMemo(() => customers, [customers]);
	const rowsData = useMemo(() => resultsData(filteredData), [resultsData, filteredData])

	return (
		<div
			className={Classes["print-property"]}
			ref={(elem) => printRef.current = elem}
		>
			<Card>
				<ContentHeader
					data={customers}
					printRef={printRef}
					setPrinting={setPrinting}
					pageCountInfo={pageCountInfo}
				/>
				<CardBody>
					<div className="mt-2">
						{rowsData?.length ? (
							<ResultsHeaderBar
								quantity={rowsData.length}
								headContent={<HeadContent />}
							/>
						) : null}
						<ResultsTableWrapper
							results={rowsData}
							headItems={headerFooter.head}
							colWidths={headerFooter.colWidths}
							colClasses={headerFooter.colClasses}
							footerContent={headerFooter.footer}
							setDataUpdate={setDataUpdate}
							deleteId={deleteId}
							loading={loading}
							onDelete={setDeleteId}
							setEditData={setEditData}
							editDone={editReady}
							upload={true}
							printing={printing}
							sticky={true}
						/>
					</div>
				</CardBody>
				{bodyFooter && <div className="card-footer d-print-none">{bodyFooter}</div>}
			</Card>
		</div>
	)
}

export default CustomersContainer
