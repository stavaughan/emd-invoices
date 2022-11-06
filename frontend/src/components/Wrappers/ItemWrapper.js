import { Row } from 'components/HTML';

const ItemWrapper = (props) => {
    return (
        <div className="list-group-item py-3">
            <Row>
                {props.children}
            </Row>
        </div>
    )
}

export default ItemWrapper
