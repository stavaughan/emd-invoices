import { useContext } from 'react';
import { SettingsContext } from 'contexts';
import { Card, CardBody } from 'components/Card';
import clsx from 'clsx';

const CardIconBackground = ({ className, style, children }) => {

	const { isLarge } = useContext(SettingsContext).screen;

    return (
        <Card
            className={clsx('text-start', isLarge && 'py-auto', className)}
            style={style}
        >
            <CardBody>{children}</CardBody>
        </Card>
    )
}

export default CardIconBackground
