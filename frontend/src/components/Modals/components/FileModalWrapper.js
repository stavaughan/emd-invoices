import React from 'react';
import { ModalFormWrapper } from '..';

const FileModalWrapper = ({ modalID, fetchData, dialogClass, fileName, children }) => {

    return (
        <ModalFormWrapper
            labelID={`${modalID}Label`}
            modalID={modalID}
            classes={{
                dialogClass: `${dialogClass ? dialogClass + ' ' : ''}bg-transparent`
            }}
            modalTitle={fileName || ''}
        >
            <div className="text-center">
                {(fetchData && fetchData?.loading) && 'fetching data, please wait...'}
                {(fetchData && fetchData?.error) && <span>{fetchData.error}</span>}
                {children}
            </div>
        </ModalFormWrapper>
    )
}

export default FileModalWrapper
