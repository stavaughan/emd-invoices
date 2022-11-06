import React from 'react';
import { Row, Col } from 'components/HTML';

const CenteredBlock = (props) => {
    return (
        <Row className="justify-content-center">
            <Col cols={props?.cols || "5 sm-4 md-3"}>
                {props.children}
            </Col>
        </Row>
    )
}

export default CenteredBlock
