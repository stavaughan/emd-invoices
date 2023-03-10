import { InfoAlert } from '.';

const LabelAlert = ({ label, message }) => (
    <>
        <span className="me-2">
            {label}
        </span>
        <InfoAlert
            message={message}
            minWidth="12rem"
            marginLeft="-6.35em"
            question={true}
        />
    </>
)

export default LabelAlert
