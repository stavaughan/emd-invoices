import { Global } from 'globals/js'
import { TitleDescriptionCell, DescriptionAttribute } from 'components/Tables/components';
import { AddressBlock } from 'pages/Invoice/components';
import { PhoneLink, EmailLink } from 'components/links';
import { useMobile } from 'hooks';

const TitleDescription = ({ item, customerBusName }) => {

	const { isXSmall } = useMobile();

	return (
		<TitleDescriptionCell title={customerBusName(item)}>
			{(item?.address && !!item?.address?.physical?.street1) && (
				<AddressBlock address={item?.address?.physical} className="mt-1 leading-4" />
			)}
			{item?.busPfx && (
				<DescriptionAttribute
					title="Customer Prefix"
					valueClass="mark"
					value={item?.busPfx}
				/>
			)}
			{item?.email && (
				<DescriptionAttribute
					title="Email"
					value={(
						<EmailLink
							email={item.email}
							size={isXSmall ? 'text-xxs' : 'text-xs'}
						/>
					)}
				/>
			)}
			{item?.phone && (
				<DescriptionAttribute
					title="Phone"
					value={(
						<PhoneLink
							phone={item.phone}
							formatted={Global.formatPhone(item.phone)}
							className="link-hover"
						/>
					)}
				/>
			)}
			{item?._id && (
				<div className="text-xxs text-slate-500 my-2 user-select-all">
					{item?._id}
				</div>
			)}
		</TitleDescriptionCell>
	)
}

export default TitleDescription
