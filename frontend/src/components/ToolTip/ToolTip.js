import { useMobile } from 'hooks';
import { usePopperTooltip } from 'react-popper-tooltip';
import 'react-popper-tooltip/dist/styles.css';

const ToolTip = ({ tip, span, children }) => {

	const { isXSmall } = useMobile();

	const {
		getArrowProps,
		getTooltipProps,
		setTooltipRef,
		setTriggerRef,
		visible,
	} = usePopperTooltip({
		placement: 'top',
		closeOnTriggerHidden: true,
		delayHide: 70,
		zIndex: 1100
	});

	const toolTipStyle = {
		zIndex: 1100,
		'--tooltipBackground': 'var(--slate-800)',
		backgroundColor: "var(--tooltipBackground)",
		opacity: "0.9",
		borderRadius: "5px",
		border: '1px solid var(--tooltipBackground)',
		fontSize: '.775rem',
		color: "var(--slate-50)",
		padding: '0.53rem',
		boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.18)'
	}

	if (isXSmall) {
		return <>{children}</>
	}

	return (
		<>
			{span
				? <span ref={setTriggerRef}>{children}</span>
				: <div ref={setTriggerRef}>{children}</div>}
			{visible && (
				<div
					ref={setTooltipRef}
					{...getTooltipProps({
						className: 'tooltip-container',
						style: toolTipStyle
					})}
				>
					{tip}
					<div {...getArrowProps({
						className: 'tooltip-arrow',
						'data-popper-arrow': true
					})} />
				</div>
			)}
		</>
	)
}

export default ToolTip
