import { useMobile } from 'hooks';
import { Card, CardBody, CardFooter } from 'components/Card';
import clsx from 'clsx';

const SectionContainer = ({ title, subTitle, footerContent, children }) => {

	const { isXSmall } = useMobile();

	return (
		<Card>
			<div className="sidebar-content-header">
				<h4 className="font-medium text-dark mb-1">
					{title}
				</h4>
				<div className={clsx(
					isXSmall && 'text-sm',
					"font-medium text-secondary"
				)}>
					{subTitle}
				</div>
			</div>
			<CardBody>
				{children}
			</CardBody>
			{footerContent && (
				<CardFooter>
					{footerContent}
				</CardFooter>
			)}
		</Card>
	)
}

export default SectionContainer
