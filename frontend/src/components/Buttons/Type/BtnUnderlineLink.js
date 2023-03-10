import { LinkHoverBtn } from 'components/Buttons';

const BtnUnderlineLink = ({ className, label, type, handleClick }) => {

    const onClickHandler = () => {
        if(handleClick) handleClick()
    }

    return (
        <LinkHoverBtn
            className={className}
            rest={{ onClick: onClickHandler }}
            {...type ? {type} : ''}
        >
            {label}
        </LinkHoverBtn>
    )
}

export default BtnUnderlineLink
