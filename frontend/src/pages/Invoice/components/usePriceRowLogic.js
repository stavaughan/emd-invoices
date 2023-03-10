import { useCallback, useMemo, useContext } from 'react';
import { InvoicesContext } from 'contexts';
import { amountUSD } from 'globals/js';

const usePriceRowLogic = (service) => {

	const { descriptionText, svcDetail } = useContext(InvoicesContext);

    const detail = useMemo(() => svcDetail(service), [service, svcDetail])

    const formatAmount = useCallback((val) => amountUSD({ num: val, dec: 2 }), []);

    const description = useMemo(() => descriptionText(service, detail), [service, detail, descriptionText]);

    const unitPrice = useMemo(() => {
		if(!detail?.unit_price) return null;
        return detail?.unit_price && formatAmount(detail.unit_price)
    }, [formatAmount, detail?.unit_price])

    const totalPrice = useMemo(() => {
        return detail?.unit_price && formatAmount(detail.unit_price * service?.units)
    }, [formatAmount, detail?.unit_price, service?.units])

	return {
		detail,
		description,
		unitPrice,
		totalPrice
	}
}

export default usePriceRowLogic
