import { AccordianWrapper } from 'components/Accordian';
import { ArrowLinkButton } from 'components/Buttons/Type';
import { Card, CardBody, CardHeader } from 'components/Card';
import { IconContentList } from 'components/Lists';
import { SiteData } from 'data';
import { useItemDelete } from 'hooks';
import { useCallback, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const CollapsibleGroupWrapper = ({
	id,
	items,
	title,
	description,
	sectionTitle,
	selectedGroup,
	sliceAction,
	groupName,
	desField,
	groups,
	modalID,
	icon
}) => {

	const dispatch = useDispatch()

	const { setDeleteId } = useItemDelete(groupName);

	const [collapse, setCollapse] = useState(true);

	const groupCount = useCallback((id) => {
		if (!items || !items.length) return 0;
		const groupItems = items.filter(_ => _.groupID === id)
		return groupItems.length
	}, [items])

	const setSelelectedID = (id) => {
		setCollapse((collapse) => !collapse)
		dispatch(sliceAction({ id }))
	};

	const clGroups = useMemo(() => {
		const bgColors = [
			'bg-indigo-500',
			'bg-purple-500',
			'bg-blue-500',
			'bg-yellow-500',
			'bg-pink-500',
			'bg-green-500'
		];
		return groups.map((group, idx) => ({
			...group,
			background: bgColors[idx % bgColors.length],
			style: { height: '4rem', minWidth: '4rem' },
			icon: (props) => <FAIcon icon={icon || "list"} {...props} />,
		}));
	}, [groups, icon]);

	return (
		<Card>
			<CardHeader title={sectionTitle} />
			<CardBody>
				<div className="max-w-4xl pt-2 px-2">
					<AccordianWrapper
						id={id}
						title={title}
						description={description}
						collapse={collapse}
						setCollapse={setCollapse}
						chevron
					>
						<IconContentList
							data={clGroups}
							selectedTest={selectedGroup?._id || clGroups[0]._id}
							setSelelectedID={setSelelectedID}
							desField={desField}
							groupCount={groupCount}
							setDeleteId={setDeleteId}
						/>
					</AccordianWrapper>
					<div className="mt-2">
						<ArrowLinkButton
							label="Create new group"
							modalID={SiteData.modalIDs[modalID]}
							className="ps-0"
						/>
					</div>
				</div>
			</CardBody>
		</Card>
	)
}

export default CollapsibleGroupWrapper
