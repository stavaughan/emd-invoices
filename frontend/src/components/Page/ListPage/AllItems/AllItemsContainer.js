import { Card } from 'components/Card';
import { Col } from 'components/HTML';

const AllItemsContainer = ({ visible, printRef, children }) => {

	return (
		<Col
			cols="xl-8"
			className={visible}
		>
			<Card
				className="sticky-lg-top"
				printRef={printRef}
			>
				{children}
			</Card>
		</Col>
	)
}

export default AllItemsContainer
