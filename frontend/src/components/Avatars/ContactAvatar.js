import { StackRoundIcon } from 'components/Icons';

const ContactAvatar = ({ icon, size, className }) => {

    return (
        <StackRoundIcon
            icon={icon}
            color1="text-blue-100"
            color2="text-blue-500"
            className={className}
            size={size || "7"}
        />
    );
};

export default ContactAvatar;
