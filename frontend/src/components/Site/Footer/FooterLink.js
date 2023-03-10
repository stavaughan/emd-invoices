import { Link } from 'react-router-dom';
import { controlProps } from 'globals/js';

const FooterLink = ({ link, userID }) => {

    return (
        <div key={link.label} className="px-4 py-2">
            {link?.path ? (
                <Link
                    to={link?.user ? `/${userID}/${link.path}` : `/${link.path}`}
                    className="text-sm text-gray-300-hover"
                >
                    {link.label}
                </Link>
            ) : (
                <span
                    className="text-sm text-gray-300-hover p-0"
					role="button"
                    {...link?.modalID ? controlProps.modalOpen(link.modalID) : {}}
                >
                    {link.label}
                </span>
            )}
        </div>
    )
}

export default FooterLink
