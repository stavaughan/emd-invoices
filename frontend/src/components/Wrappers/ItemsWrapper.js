import clsx from 'clsx';
import { Warning } from 'components/labels';
import { useContext } from 'react';
import { SettingsContext } from 'contexts';

const ItemsWrapper = ({ length, className, message, children }) => {

	const { screen, fontSize } = useContext(SettingsContext);
	const{ isXSmall } = screen;
	const { smallText } = fontSize;

    return (
        <div {...className && { className }}>
            <div className={clsx(
				smallText,
				'list-group list-group-flush my-n3 gap-2 py-3',
				!isXSmall && 'list-group-activity'
			)}>
                {children}
                {!length && <Warning>{message}</Warning>}
            </div>
        </div>
    )
}

export default ItemsWrapper
