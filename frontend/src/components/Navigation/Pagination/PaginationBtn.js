import { Button } from "components/Buttons";
import { Chevron } from 'components/SVGs';
import clsx from "clsx";

const PaginationBtn = ({
	color,
	indexFn,
	handlers,
	disabled,
	dir
}) => {

	const colorOutline = `btn-outline-${color}`;

	return (
		<Button
			className={clsx("btn-sm", colorOutline)}
			rest={{
				onClick: () => handlers[indexFn](),
				disabled
			}}
		>
			<Chevron dir={dir} className="w-4 h-4" />
		</Button>
	)
}

export default PaginationBtn
