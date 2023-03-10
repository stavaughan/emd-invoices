import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const Spinner = ({ label, wait }) => (
	<>
		{label ? (
			<>
				<FAIcon icon="circle-notch" spin={true} className="me-2" />
				{wait && 'please wait...'}
			</>
		) : <FAIcon icon="circle-notch" spin={true} />}
	</>
);

const ButtonLabel = ({ icon, label }) => (
	<>
		{icon ? (
			<>
				<FAIcon
					icon={icon}
					{...label && { className: "me-2" }}
				/>
				{label}
			</>
		) : label}
	</>
);

const LoadingIcon = ({ loading, label, icon, wait }) => (
	<>
		{loading ? (
			<Spinner label={label} wait={wait} />
		) : (
			<ButtonLabel icon={icon} label={label} />
		)}
	</>
);

export default LoadingIcon
