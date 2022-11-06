import { useCallback } from 'react';
import { ListItem } from '.';
import { FetchedImage } from 'components/Gallery';
import { amountUSD } from 'globals/js';
import clsx from 'clsx';

const InvoiceItems = ({ invoice, services }) => {

	const invoiceService = useCallback((sID) => {
		const invSvc = services?.find(s => s._sID === sID) || null;
		return invSvc;
	}, [services]);

	return (
		<div className="list-group list-group-flush">
			{invoice?.rendered_services?.length ? invoice.rendered_services.map((item, idx) => {

				const {
					description = '',
					unit_price = 0,
					pid = ''
				} = invoiceService(item.sID);

				return (
					<div
						key={`${item.sID}_${idx}`}
						className={clsx('list-group-item', idx ? 'py-3' : 'pb-3')}
					>
						<div className="text-dark leading-6 pb-2">
							{description}
						</div>
						{pid && (
							<div className="mb-2">
								<FetchedImage pid={pid} width='75' />
							</div>
						)}
						<ListItem label="unit price:" value={amountUSD({ num: unit_price, dec: 2 })} />
						<ListItem label="units:" value={item.units} />
						<ListItem label="total:" value={amountUSD({ num: item.amount * item.units, dec: 2 })} />
					</div>
				);
			}) : null}
		</div>
	);
};

export default InvoiceItems;
