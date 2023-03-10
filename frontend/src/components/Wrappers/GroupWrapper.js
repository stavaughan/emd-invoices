import { AddTextButton } from 'components/Buttons/Type';
import { GroupInputRow } from 'components/Forms/components';

const GroupWrapper = ({
	title,
	itemName,
	count,
	handleAddNew,
	labelClass,
	rowClass,
	children
}) => {

    return (
		<GroupInputRow
			label={title}
			labelClass={labelClass}
			rowClass={rowClass}
		>
            {children}
            <AddTextButton
                handleOnClick={handleAddNew}
                label={`Add ${count ? 'another ' : ''}${itemName}`}
				hasData={count}
            />
		</GroupInputRow>
    );
};

export default GroupWrapper
