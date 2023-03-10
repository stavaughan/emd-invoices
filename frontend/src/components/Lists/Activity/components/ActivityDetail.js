import { useMemo } from 'react';
import { DataItem, useActivityLogic, NamesList } from '.'

const ActivityDetail = ({ owner, accountIDs, contactIDs, createdAt }) => {

	const {
		formattedDate,
		elapsedTime,
		ownerName,
		accountNames,
		contactNames
	} = useActivityLogic({ owner, accountIDs, contactIDs });

	const timeMessage = useMemo(() => elapsedTime(createdAt), [createdAt, elapsedTime]);
	const formDate = useMemo(() => formattedDate(createdAt), [createdAt, formattedDate]);

	return (
		<div className="p-3 rounded-3 bg-lighter">
			{ownerName && (
				<DataItem dataKey="owner">
					{ownerName}
				</DataItem>
			)}
			{accountNames?.length ? (
				<DataItem dataKey="accounts">
					<NamesList names={accountNames} />
				</DataItem>
			) : null}
			{contactNames?.length ? (
				<DataItem dataKey="Contacts">
					<NamesList names={contactNames} />
				</DataItem>
			) : null}
			<DataItem type="Completed">
				{`${timeMessage} ${formDate}`}
			</DataItem>
		</div>
	)
}

export default ActivityDetail
