import { ProductImageCol, usePriceRowLogic } from '.';

import '../styles/invoice.css';

const PriceRows = (props) => {

	const res = usePriceRowLogic(props?.service);

    return (
        <tr>
            <ProductImageCol
                hasImage={props?.hasImage}
                imagePath={res?.detail?.pid}
				color={props?.color}
                idx={props?.idx}
            />
            <td className="td-desc text-start ps-3" colSpan="2">
                {res?.detail?.title && (
					<div className="text-sm font-semibold text-dark">
						{res?.detail.title}
					</div>
				)}
                <div className="text-muted">{res?.description}</div>
            </td>
            <td className="unit text-end pe-3" style={{ width: '4em' }}>
                {res?.unitPrice}
            </td>
            <td className="qty text-center" style={{ width: '4em' }}>
                {props?.service?.units}
            </td>
            <td
                className="total text-end pe-3"
                style={{ width: '9em' }}
            >
                {res?.totalPrice}
            </td>
        </tr>
    );
};

export default PriceRows;
