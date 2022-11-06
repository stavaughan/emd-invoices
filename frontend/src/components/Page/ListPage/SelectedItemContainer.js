import { Button } from 'components/Buttons';
import { Card, CardBody, CardTitleActionsHeader } from 'components/Card';
import { Global } from 'globals/js';
import { themeClasses } from 'theme';
import { ExpandArrows } from 'globals/img';
import clsx from 'clsx';

const SelectedItemContainer = ({
	printRef,
	unitLabel,
	HeaderActions,
	visible,
	visibleFN,
	btnCount,
	children
}) => {

	const onShowAllHandler = () => visible === "hide-small"
		? visibleFN("show")
		: document.documentElement.scrollTop = 0;

	const onShowVisible1Handler = () => {
		if (visible === "show") {
			visibleFN("hide-small");
		}
	};

	return (
		<Card
			printRef={printRef}
			className="sticky-top"
		>
			<CardTitleActionsHeader
				title={`Selected ${Global.upperCaseFirst(unitLabel)}`}
				btnCount={btnCount}
				section
			>
				<div className="d-print-none">
					<Button
						className={clsx(
							themeClasses.button.icon.light,
							'd-xl-none me-2'
						)}
						rest={{ onClick: onShowAllHandler }}
					>
						View All
					</Button>
					<Button
						className={clsx('d-xl-none', visible)}
						rest={{ onClick: onShowVisible1Handler }}
					>
						<ExpandArrows />
					</Button>
					{HeaderActions && HeaderActions()}
				</div>
			</CardTitleActionsHeader>
			<CardBody classBody="px-3">
				{children}
			</CardBody>
		</Card>
	)
}

export default SelectedItemContainer
