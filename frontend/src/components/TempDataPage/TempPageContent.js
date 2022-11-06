import { JsonCodeBlock } from "components/Blocks"
import { AlertCardDismissable } from "components/Alerts";

const TempDataPage = ({ data, collectionID, cid, loading }) => {

	const transitionStyle = {
		opacity: loading ? .7 : 1,
		transition: 'opacity 1.2s ease-in-out'
	};

	const alertMessage = `This is a temporary page for displaying ${cid} collection data until the actual page is built.`;

	return (
		<section>
			<div className="container">
				<div className="d-flex flex-column">
					<div className="d-flex justify-content-start align-items-center mt-2 mb-4">
						<AlertCardDismissable
							message={alertMessage}
							style={transitionStyle}
						/>
					</div>
					<JsonCodeBlock
						data={data}
						hasData={data?.length && !loading}
						titleKey={"Collection ID"}
						titleValue={loading ? 'Please wait...' : (collectionID || 'No collection data...')}
						style={transitionStyle}
					/>
				</div>
			</div>
		</section>
	)
}

export default TempDataPage
