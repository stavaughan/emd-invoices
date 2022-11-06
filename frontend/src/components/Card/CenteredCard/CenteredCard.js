import { CenteredBrand } from "components/Blocks/Brand";
import { useMobile } from "hooks";
import clsx from "clsx";

import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome";

import Classes from "./CenteredCard.module.css";
import AuthModalBtn from "./AuthModalBtn";

const CenteredCard = ({
	cardTitle,
	footerContent,
	cardDescription,
	showLogo,
	children,
}) => {

	const { isXSmall } = useMobile();

	return (
		<>
			<div
				className={clsx(
					Classes["centered-card--signin"],
					"mt-md-6 mt-4",
					"position-relative"
				)}
			>
				<div className={Classes["centered-card--body"]}>
					<div className="mt-3">
						{showLogo && <CenteredBrand />}
					</div>
					<h1 className={clsx(Classes["centered-card--title"], 'leading-5')}>
						{cardTitle}
					</h1>
					{cardDescription && (
						<div className="text-center text-muted">
							{cardDescription}
						</div>
					)}
					{children}
				</div>
				{footerContent}
			</div>
			<div className="d-flex justify-content-center mt-2">
				<div className="d-flex justify-content-start align-items-center text-blue-200 text-sm">
					{!isXSmall && (
						<FAIcon icon="lock" className="pb-1" />
					)}
					<div className="d-flex justify-content-center align-items-center">
						<AuthModalBtn modalID="loginSecurity" label={'Privacy Policy'} />
						<div className="vr bg-white my-2" />
						<AuthModalBtn modalID="loginTerms" label={'Terms of Service'} />
					</div>
				</div>
			</div>
		</>
	);
};

export default CenteredCard;
