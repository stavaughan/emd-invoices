import { CenteredBrand } from "components/Blocks/Brand";
import { Link } from 'react-router-dom';
import clsx from "clsx";

import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome";

import Classes from "./CenteredCard.module.css";

const CenteredCard = ({
	cardTitle,
	footerContent,
	cardDescription,
	showLogo,
	children,
}) => {

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
					{showLogo && (
						<CenteredBrand />
					)}
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
				<div className="d-flex justify-content-center align-items-center text-blue-200 text-sm">
					<FAIcon icon="lock" className="fs-6" />
					<Link
						to="/legal/privacy-policy"
						className="btn btn-sm dark:btn-link-blue"
						style={{ backgroundImage: "none" }}
					>
						Privacy Policy
					</Link>
					<div className="vr bg-white my-auto" />
					<Link
						to="/legal/terms-of-use"
						className="btn btn-sm dark:btn-link-blue"
						style={{ backgroundImage: "none" }}
					>
						Terms of Use
					</Link>
				</div>
			</div>
		</>
	);
};

export default CenteredCard;
