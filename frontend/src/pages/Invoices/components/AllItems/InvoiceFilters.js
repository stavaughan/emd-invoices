import { FilterDropDown, ResetButton } from '.';
import { useMobile } from 'hooks';

const InvoiceFilters = ({ filter, filterOptions, onClickHandler, onClickReset }) => {

	const { isXSmall } = useMobile();

	return (
		<div className={isXSmall
			? 'd-flex justify-content-evenly align-items-center'
			: 'd-flex flex-row-reverse'
		}>
			<FilterDropDown
				label="Year"
				filterID="clientID"
				filterData={filterOptions.byYear}
				onClickHandler={onClickHandler('Year', 'clientID')}
				{...isXSmall && { margin: 'me-3' }}
			/>
			<FilterDropDown
				label="Customer"
				filterID="clientID"
				filterData={filterOptions.byClient}
				onClickHandler={onClickHandler('Customer', 'clientID')}
				margin="me-3"
			/>
			<FilterDropDown
				label="Business"
				filterID="contrID"
				filterData={filterOptions.byBusiness}
				onClickHandler={onClickHandler('Business', 'contrID')}
				margin="me-3"
			/>
			{filter && (
				<div {...!isXSmall && { className: "me-3" }}>
					<ResetButton
						onClickReset={onClickReset}
						isXSmall={isXSmall}
					/>
				</div>
			)}
		</div>
	);
};

export default InvoiceFilters;
