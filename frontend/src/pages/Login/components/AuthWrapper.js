import { FullPageGradient } from 'components/Wrappers';
import { CenteredCard } from 'components/Card';
import { Row, Col } from 'components/HTML'
import { Loader } from 'components/Loader';
import { useMobile } from 'hooks';

const AuthWrapper = ({
	cardTitle,
	isLoading,
	footerContent,
	cardDescription,
	showLogo,
	children
}) => {

	const { isXSmall } = useMobile();

	if (isLoading) {
		return <Loader />
	}

	return (
		<>
			<FullPageGradient>
				<div {...!isXSmall && { className: "container-fluid" }}>
					<Row>
						<Col
							cols="sm-9 md-8 lg-6 xl-4"
							className={!isXSmall && 'mx-auto py-3'}
						>
							<CenteredCard
								cardTitle={cardTitle}
								cardDescription={cardDescription}
								footerContent={footerContent}
								showLogo={showLogo}
								children={children}
							/>
						</Col>
					</Row>
				</div>
			</FullPageGradient>
		</>
	)
}

export default AuthWrapper
