import { useMemo } from 'react'
import { CardTitleActionsHeader } from 'components/Card'
import { ButtonRow } from 'components/Buttons/ButtonRows'
import { tableActionButtons } from 'components/Tables';

const ContentHeader = ({
	printRef,
	data,
	setPrinting,
	pageCountInfo
}) => {

	const btnItems = useMemo(() => tableActionButtons.businesses({
		printRef,
		setPrinting
	}), [printRef, setPrinting])

	return (
		<CardTitleActionsHeader
			title="Businesses"
			centeredContent={pageCountInfo}
			btnCount={5}
		>
			{data?.length ? <ButtonRow btnItems={btnItems} /> : null}
		</CardTitleActionsHeader>
	)
}

export default ContentHeader
