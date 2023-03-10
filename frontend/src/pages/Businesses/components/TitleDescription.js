import { Global } from 'globals/js'
import { TitleDescriptionCell, DescriptionAttribute } from 'components/Tables/components';
import { AddressBlock } from 'pages/Invoice/components';
import { PhoneLink, EmailLink, WebSiteLink } from 'components/links';
import { useMobile } from 'hooks';

const TitleDescription = ({ item }) => {

	const { isXSmall } = useMobile();

	return (
		<TitleDescriptionCell title={item?.businessName?.long}>
			{item?.address && (
				<AddressBlock address={item?.address} className="mt-1 leading-4" />
			)}
			{item?.busPfx && (
				<DescriptionAttribute
					title="Business Prefix"
					valueClass="mark"
					value={item?.busPfx}
				/>
			)}
			{item?.website && (
				<DescriptionAttribute
					title="Website"
					value={(
                        <WebSiteLink
                            url={`https://${item.website}`}
                            className="link-hover py-1 ps-0 text-start text-xs"
							shortLabel="Click for website"
							length={isXSmall ? 40 : 100}
                        />
					)}
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
