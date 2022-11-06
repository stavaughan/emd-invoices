import { LinkIcons } from 'components/SVGs';

const PageLinkCardStyle = ({ icon, color, height }) => {

    const iconUrl = LinkIcons(icon, color);

    return {
        backgroundImage: `url("${iconUrl}")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: "95% 5%",
        backgroundSize: '37%',
        backgroundOrigin: 'border-box',
        borderColor: 'transparent',
        height
    }
};

export default PageLinkCardStyle;