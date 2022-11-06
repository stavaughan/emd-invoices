import { controlProps } from 'globals/js';
import { LinkHoverBtn } from '..';

const LinkTextButton = ({ colID, handleClick, children }) => {

	const onClickHandler = (e) => {
		e.preventDefault();
		handleClick && handleClick();
	};

	return (
		<LinkHoverBtn rest={{
			onClick: onClickHandler,
			...colID ? controlProps.collapse(colID) : {}
		}}>
			{children}
		</LinkHoverBtn>
	)
}

export default LinkTextButton
