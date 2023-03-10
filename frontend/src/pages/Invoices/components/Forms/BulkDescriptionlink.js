import clsx from 'clsx';
import { AlertCardDismissable } from "components/Alerts";
import { Button } from 'components/Buttons';
import { FormattingDescription } from "components/Documentation/components";
import { SiteData } from "data";
import { useMemo, useState } from 'react';

const transitionStyle = { opacity: 1, transition: 'opacity 1.2s ease-in-out' };
const removeStyle = { opacity: 0, transition: 'opacity 1s ease-out' };

const LearnMoreBtn = ({ isXSmall, onClickHandler, label }) => {

	const btnFont = isXSmall ? "text-xxs" : "text-xs";

	return (
		<Button
			className={clsx(
				btnFont,
				'badge rounded-pill bg-info-soft pt-0 leading-6'
			)}
			rest={{ onClick: onClickHandler }}
		>
			{label}
		</Button>
	)
}

const BulkDescriptionlink = ({ isXSmall }) => {

	const text = SiteData.documentation.invoices.forms.bulkInvoices;

	const [showDescription, setShowDescription] = useState(false);

	const onClickHandler = () => {
		setShowDescription(_ => !showDescription);
	};

	const describeMessage = useMemo(() => (
		<FormattingDescription
			isXSmall={isXSmall}
			text={text}
		/>
	), [isXSmall, text]);

	const textFont = isXSmall ? "text-xs" : "text-sm";

	return (
		<div className="d-flex flex-column gap3">
			<div className={textFont}>
				<span className="leading-6 me-2 text-wrap">{text.description}</span>
				<LearnMoreBtn
					isXSmall={isXSmall}
					onClickHandler={onClickHandler}
					label={text.infoButton}
				/>
			</div>
			<div style={{ ...showDescription ? transitionStyle : removeStyle }}
			>
				{showDescription && (
					<div className="my-2">
						<AlertCardDismissable
							message={describeMessage}
							{...showDescription && { style: transitionStyle }}
							onClick={onClickHandler}
							textColor="text-secondary"
							setCloseTop
							noIcon
						/>
					</div>
				)}
			</div>
		</div>
	)
};

export default BulkDescriptionlink
