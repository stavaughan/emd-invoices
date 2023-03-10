import React, { useCallback } from 'react';
import { CustomersContainer } from './components';
import { InvoicesProvider } from 'contexts/invoices-context';
import { StartingPointsPage } from 'Layout';
import { useSelector } from 'react-redux';
import { useItemDelete, useItemUpdate, useLoadResource } from 'hooks';
import { usePagination } from 'components/Navigation/Pagination';

const Customers = () => {

	const { loading } = useLoadResource('customers');
	const { customers } = useSelector(state => state.customers);

	const { setDeleteId, deleteId } = useItemDelete('customers')
	const { setID, setReqBody, setReady } = useItemUpdate('customers');

	const setDataUpdate = useCallback((id, reqBody) => {
		setID(id);
		setReqBody(reqBody);
		setReady(true);
	}, [setID, setReqBody, setReady]);

	const hasData = customers?.length > 0;

	const { currentPage, bodyFooter, countFooter } = usePagination({
		data: customers,
		itemLabel: 'item',
		itemsPerPage: 20
	});

	return (
		<InvoicesProvider>
			<StartingPointsPage
				containerProps={{ className: 'py-3 px-xl-3' }}
				dataKey="customers"
				noPageData={!loading && !hasData}
			>
				<CustomersContainer
					customers={currentPage?.items}
					loading={loading}
					deleteId={deleteId}
					setDataUpdate={setDataUpdate}
					setDeleteId={setDeleteId}
					bodyFooter={bodyFooter}
					pageCountInfo={countFooter}
				/>
			</StartingPointsPage>
		</InvoicesProvider>
	)
};

export default Customers;
