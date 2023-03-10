import { Col, Row } from "components/HTML"
import { useContext } from "react"
import { SettingsContext } from "contexts"
import clsx from "clsx";

const DataItem = ({ dataKey, dataCallback, aid, type, children }) => {

	const { smallText } = useContext(SettingsContext).fontSize;

    return (
        <Row className="g-1 mb-2">
            <Col cols="12" className="d-flex align-items-center">
				<div className="text-xs font-semibold text-capitalize text-secondary text-nowrap pe-2">
					{dataKey || type}:
				</div>
            </Col>
            <Col cols="12">
				<div className={clsx(
					smallText,
					'font-normal text-secondary pt-0 pb-2'
				)}>
					{dataCallback && dataCallback(aid)}
					{children}
				</div>
            </Col>
        </Row>
    )
}

export default DataItem
