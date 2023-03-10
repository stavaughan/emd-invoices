import { MessageGroup } from '.';

const Warning = ({ className, children }) => {

    return (
        <MessageGroup
            icon="exclamation-triangle"
            color="text-warning text-center"
			className={className}
			children={children}
		/>
    );
};

export default Warning;
