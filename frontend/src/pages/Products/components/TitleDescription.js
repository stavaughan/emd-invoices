import { Global } from 'globals/js'
import { TitleDescriptionCell, DescriptionAttribute } from 'components/Tables/components';

const TitleDescription = ({ item }) => {
	return (
		<TitleDescriptionCell title={item?.description}>
			{item?.title && (
				<DescriptionAttribute
					title="Category"
					value={Global.upperCaseFirst(item?.title)}
				/>
			)}
			{item?._sID && (
				<DescriptionAttribute
					title="ID"
					value={item._sID}
				/>
			)}
			{item?.priceType && (
				<DescriptionAttribute
					title="Price Type"
					value={item.priceType}
				/>
			)}
		</TitleDescriptionCell>
	)
}

export default TitleDescription
