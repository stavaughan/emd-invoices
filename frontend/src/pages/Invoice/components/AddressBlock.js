import { useMemo } from 'react';

const AddressBlock = ({ address, wrapClass }) => {

    const addressStreet = useMemo(() => {
        const street1 = address?.street1 || '';
        const street2 = address?.street2 ? `, ${address?.street2}` : '';
        return `${street1} ${street2}`
    }, [address?.street1, address?.street2])

    return (
        <span className={wrapClass}>
            {address?.city && <div className="mb-1">{addressStreet}</div>}
            {address?.city && (
                <div className="mb-1">
                    {`${address?.city}, ${address?.state} ${address?.zip_code}`}
                </div>
            )}
        </span>
    );
};

export default AddressBlock;
