import { CardFooter } from '.';

const FooterChartWrapper = ({ title, children }) => {

	return (
		<CardFooter className="border-top-0 mb-3">
			<div className="text-center py-2 text-blue-700 font-medium">
				{title?.toUpperCase()}
			</div>
			<div className="d-flex flex-wrap justify-content-center align-items-center">
				{children}
			</div>
		</CardFooter>
	);
};

export default FooterChartWrapper;
