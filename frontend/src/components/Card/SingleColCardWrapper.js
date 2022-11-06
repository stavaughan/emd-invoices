import { InputCardRow } from '.';
import { Col } from 'components/HTML';
import clsx from 'clsx';

const SingleColCardWrapper = ({ cols, exClass, children }) => {

    return (
        <InputCardRow cardClass="shadow-none">
            <Col
				cols={clsx('12', cols)}
				{...exClass && { className: exClass }}
                children={children}
            />
        </InputCardRow>
    );
};

export default SingleColCardWrapper;
