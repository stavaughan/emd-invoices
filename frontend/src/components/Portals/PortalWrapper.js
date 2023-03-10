import React from 'react';
import ReactDOM from 'react-dom';

const PortalWrapper = (props) => {

    const { rootName } = props;

    return (
        <>
            {ReactDOM.createPortal(
                <>{props.children}</>,
                document.getElementById(rootName)
            )}
        </>
    )
}

export default PortalWrapper;