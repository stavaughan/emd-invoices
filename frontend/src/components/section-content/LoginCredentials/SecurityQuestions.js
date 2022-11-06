import { Global } from 'globals/js';
import { FlexListItem } from 'components/Lists';
import { RoundIconBtn } from 'components/Icons';
import clsx from 'clsx';

const SecurityQuestions = ({
	questions,
	selector,
	itemID,
	updateSlice,
	setMask,
	mask
}) => {

	const { listKey } = Global;

	const bground = 'bg-slate-100 py-1 px-2 rounded-circle';
	const faqClass = `me-2 text-gray-400 text-xs text-uppercase font-bold ${bground}`;

	return (
		<div className="ps-2 g-3">
			{questions?.length ? questions.map((faq, idx) => {
				const last = questions.length - 1;
				return (
					<div
						key={listKey(faq.question + idx)}
						className={clsx(
							"d-flex justify-content-between align-items-center py-2 mt-2",
							idx !== last && "border-bottom border-gray-200"
						)}
					>
						<div>
							<FlexListItem
								label={<abbr className={faqClass}>Q</abbr>}
								className="user-select-all py-1"
								justify="start"
							>
								{faq.question}
							</FlexListItem>
							<FlexListItem
								label={<abbr className={faqClass}>A</abbr>}
								className="user-select-all py-1 mb-2"
								justify="start"
							>
								{faq.answer}
							</FlexListItem>
						</div>
						<RoundIconBtn
							icon="pencil-alt"
							color="text-xs"
							onClick={() => { }}
							xSmall
							alt
						/>
					</div>
				)
			}) : null}
		</div>
	);
};

export default SecurityQuestions;
