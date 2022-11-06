import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const alertProps = {
    success: {
        colors: {
            bgColor: '#d1e7dd',
            color: '#198754'
        },
        icon: 'check-circle'
    },
    danger: {
        colors: {
            bgColor: '#f7c0ca',
            color: '#e63757'
        },
        icon: 'exclamation-circle'
    },
    warning: {
        colors: {
            bgColor: '#fcebc1',
            color: '#f6c343'
        },
        icon: 'exclamation-triangle'
    },
    info: {
        colors: {
            bgColor: '#c2e7f1',
            color: '#39afd1'
        },
        icon: 'info-circle'
    }
}

const AlertCard = ({ message, type = 'info' }) => {

	const { colors, icon } = alertProps[type];
	const { color, bgColor } = colors;

    return (
        <div
            className="rounded p-3 align-items-center shadow"
            style={{
                backgroundColor: bgColor,
                borderLeft: `8px solid ${color}`
            }}
        >
            <div className="d-flex">
                <FAIcon icon={icon} className="fa-lg me-2 my-auto" style={{ color }} />
                <div className="px-2">
                    {message}
                </div>
            </div>
        </div>
    )
}

export default AlertCard
