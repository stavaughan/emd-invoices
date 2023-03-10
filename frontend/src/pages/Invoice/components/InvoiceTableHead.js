import '../styles/invoice.css';

const InvoiceTableHead = (props) => {

    return (
        <thead>
            <tr className="small fw-bolder">
                <th className="text-center py-2">
                    ITEM
                </th>
                <th className="text-start py-2 ps-3" colSpan="2">
                    DESCRIPTION
                </th>
                <th className="text-end py-2 px-3">
                    {props?.priceType === 'hourly' ? 'PRICE / HOUR' : 'UNIT PRICE'}
                </th>
                <th className="text-center p-2">
                    {props?.priceType === 'hourly' ? 'HOURS' : 'QTY'}
                </th>
                <th className="head-total text-end pe-3 py-2">
                    TOTAL
                </th>
            </tr>
        </thead>
    );
};

export default InvoiceTableHead;
