import { useCallback, useMemo, useContext } from 'react';
import { ProductImageCol } from '.';
import { InvoicesContext } from 'contexts';
import { amountUSD } from 'globals/js';

import '../styles/invoice.css';

const PriceRows = ({ color, service, hasImage, idx }) => {

	const { descriptionText, svcDetail } = useContext(InvoicesContext);

    const detail = useMemo(() => svcDetail(service), [service, svcDetail])

    const formatAmount = useCallback((val) => amountUSD({ num: val, dec: 2 }), []);
	
    const description = useMemo(() => descriptionText(service, detail), [service, detail, descriptionText]);

    const unitPrice = useMemo(() => {
        return detail?.unit_price && formatAmount(detail.unit_price)
    }, [formatAmount, detail.unit_price])

    const totalPrice = useMemo(() => {
        return detail?.unit_price && formatAmount(detail.unit_price * service.units)
    }, [formatAmount, detail.unit_price, service.units])

    return (
        <tr>
            <ProductImageCol
                hasImage={hasImage}
                imagePath={detail?.pid}
				color={color}
                idx={idx}
            />
            <td className="td-desc text-start ps-3" colSpan="2">
                {detail?.title && (
					<div className="text-sm font-semibold text-dark">
						{detail.title}
					</div>
				)}
                <div className="text-muted">{description}</div>
            </td>
            <td className="unit text-end pe-3" style={{ width: '4em' }}>
                {unitPrice}
            </td>
            <td className="qty text-center" style={{ width: '4em' }}>
                {service?.units}
            </td>
            <td
                className="total text-end pe-3"
                style={{ width: '9em' }}
            >
                {totalPrice}
            </td>
        </tr>
    );
};

export default PriceRows;
