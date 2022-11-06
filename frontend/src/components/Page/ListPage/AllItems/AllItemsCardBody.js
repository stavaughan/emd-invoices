import { CardBody } from 'components/Card';
import { TableLayout } from 'components/Tables';
import { AllItemsFilterSearch } from '.';

const AllItemsCardBody = (props) => {

	const {
		id,
		sticky,
		searchData,
		searchKey,
		setSearchID,
		//setSelID,
		HeadContent,
		BodyActions,
		FooterContent,
		pageCountInfo,
		BottomAlert
	} = props;

	return (
		<CardBody>
			<AllItemsFilterSearch
				BodyActions={BodyActions}
				searchData={searchData}
				searchKey={searchKey}
				setSelID={setSearchID}
				id={id}
			/>
			<TableLayout
				tableClass="table-hover border-bottom"
				sticky={sticky}
				HeadContent={HeadContent}
				FooterContent={FooterContent}
			>
				{props.children}
			</TableLayout>
			{pageCountInfo || null}
			{BottomAlert && (
				<>
					<hr className="mt-0 text-slate-200" />
					{BottomAlert && <BottomAlert />}
				</>
			)}
		</CardBody>
	);
};

export default AllItemsCardBody
