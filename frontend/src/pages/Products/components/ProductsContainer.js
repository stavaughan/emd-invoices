import { useRef, useMemo, useState } from 'react';
import { Card, CardBody } from 'components/Card';
import { ResultsTableWrapper, ResultsHeaderBar } from 'components/Tables/ResultsTable/components';
import { useProductsLogic, HeadContent, ContentHeader, FilterReset } from '.';
import { AllItemsFilterSearch } from 'components/Page/ListPage/AllItems';

import Classes from '../../../styles/modules/PropertyTable.module.css';

const ProductsContainer = ({
	services,
	setDataUpdate,
	deleteId,
	setDeleteId,
	bodyFooter,
	pageCountInfo,
	setSelSID,
	selSID,
	loading
}) => {

	const printRef = useRef(null);

	const [printing, setPrinting] = useState(false);

	const {
		headerFooter,
		resultsData,
		setEditData,
		editReady
	} = useProductsLogic({ setUpdate: setDataUpdate });

	const rowsData = useMemo(() => resultsData(services), [resultsData, services])

	return (
		<div
			className={Classes["print-property"]}
			ref={(elem) => printRef.current = elem}>
			<Card>
				<ContentHeader
					data={services}
					printRef={printRef}
					setPrinting={setPrinting}
					pageCountInfo={pageCountInfo}
				/>
				<CardBody>
					<AllItemsFilterSearch
						BodyActions={() => (
							<FilterReset
								selSID={selSID}
								setSelSID={setSelSID}
							/>
						)}
						searchData={services}
						searchKey="_sID"
						setSelID={setSelSID}
						id="productbyid"
					/>
					<div className="mt-2">
						{services?.length ? (
							<ResultsHeaderBar
								quantity={services.length}
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

export default ProductsContainer
