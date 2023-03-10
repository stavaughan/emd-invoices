import { useMemo } from 'react';
import { FilterDropDown, ResetButton, useInvoiceFilters } from '.';
import { useMobile } from 'hooks';
import clsx from 'clsx';

const InvoiceFilters = ({
	initTitle,
	setTableTitle,
	setInvoices,
	filter,
	setFilter,
	setCancelFilter,
	activeFilterID,
	setActiveFilterID,
}) => {

	const { getFilterOptions } = useInvoiceFilters();

	const { isXSmall } = useMobile();

	const options = useMemo(() => getFilterOptions(), [getFilterOptions]);

	return (
		<div className={clsx(
			isXSmall
				? 'd-flex justify-content-evenly align-items-center'
				: 'd-flex flex-row-reverse align-items-center',
			'd-print-none'
		)}>
			<FilterDropDown
				label="year"
				filterID="clientID"
				setInvoices={setInvoices}
				setTableTitle={setTableTitle}
				filterData={options.byYear}
				setActiveID={setActiveFilterID}
				activeID={activeFilterID}
				setFilter={setFilter}
				{...isXSmall && { margin: 'me-3' }}
			/>
			<FilterDropDown
				label="customer"
				filterID="clientID"
				setInvoices={setInvoices}
				setTableTitle={setTableTitle}
				filterData={options.byClient}
				setActiveID={setActiveFilterID}
				activeID={activeFilterID}
				setFilter={setFilter}
				margin="me-3"
			/>
			<FilterDropDown
				label="business"
				filterID="contrID"
				setInvoices={setInvoices}
				setTableTitle={setTableTitle}
				filterData={options.byBusiness}
				setActiveID={setActiveFilterID}
				activeID={activeFilterID}
				setFilter={setFilter}
				margin="me-3"
			/>
			<FilterDropDown
				label="group"
				filterID="groupID"
				setInvoices={setInvoices}
				setTableTitle={setTableTitle}
				filterData={options.byGroup}
				setActiveID={setActiveFilterID}
				activeID={activeFilterID}
				setFilter={setFilter}
				margin="me-3"
			/>
			{!isXSmall && (
				<div className="text-blue-700 text-xs me-2">filter by:</div>
			)}
			{filter && (
				<div {...!isXSmall && { className: "me-3" }}>
					<ResetButton
						initTitle={initTitle}
						setFilter={setFilter}
						setInvoices={setInvoices}
						setActiveID={setActiveFilterID}
						setCancelFilter={setCancelFilter}
						setTableTitle={setTableTitle}
						isXSmall={isXSmall}
					/>
				</div>
			)}
		</div>
	);
};

export default InvoiceFilters;
