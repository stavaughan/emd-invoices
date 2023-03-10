import { useMobile } from "hooks";

const GroupTitle = ({ type, title }) => {

	const { isXSmall } = useMobile();

	return (
		<span>
			{!isXSmall && (
				<span className="me-2 text-slate-400 fs-6">
					{type?.toUpperCase()} GROUP
				</span>
			)}
			{title}
		</span>
	)
};

export default GroupTitle
