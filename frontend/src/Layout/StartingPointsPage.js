import React from 'react';
import { PageContainer } from 'components/Containers';
import { StartingPointsEmptyState } from 'components/EmptyState';
import { useEmptyStates } from 'components/EmptyState/components';
import { Loader } from 'components/Loader';

const StartingPointsPage = ({
	dataKey,
	noPageData,
	containerProps,
	loading,
	children
}) => {

	const { emptyStates } = useEmptyStates();

	if(loading) return <Loader />

	if (noPageData) {
		return (
			<>
				<PageContainer className="py-3 px-xl-3">
					<StartingPointsEmptyState
						{...emptyStates[dataKey]}
					/>
				</PageContainer>
			</>
		)
	};

	return (
		<PageContainer {...containerProps}>
			{children}
		</PageContainer>
	);
};

export default StartingPointsPage;
