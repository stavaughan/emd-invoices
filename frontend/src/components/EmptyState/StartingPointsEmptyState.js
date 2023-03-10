import { AccordianWrapper } from 'components/Accordian';
import { TitleDescription } from 'components/Blocks';
import { IconContentList } from 'components/Lists';
import { useMobile } from 'hooks';
import { useMemo, useState } from 'react';

const StartingPointsEmptyState = ({
	id,
	title,
	description,
	buttonLink,
	buttonLabel,
	steps
}) => {

	const { isXSmall } = useMobile();

	const [selected, setSelected] = useState(steps[0]._id);

	const stepsData = useMemo(() => {
		return steps.map(step => ({
			...step,
			style: {
				height: '4rem',
				width: isXSmall ? '5.5rem' : '4.5rem'
			},
		}));
	}, [steps, isXSmall]);

	return (
		<div className="py-4">
			<div className="max-w-4xl px-3">
				<AccordianWrapper
					id={id}
					heading={<TitleDescription
						title={title}
						description={description}
					/>}
					className="mt-4"
					open={true}
				>
					<IconContentList
						stepsID={id}
						data={stepsData}
						selectedTest={selected}
						setSelelectedID={setSelected}
						desField="description"
					/>
				</AccordianWrapper>
				<div className="mt-4 flex">
					<a href={buttonLink} className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
						{buttonLabel}<span aria-hidden="true"> &rarr;</span>
					</a>
				</div>
			</div>
		</div>
	)
}

export default StartingPointsEmptyState
