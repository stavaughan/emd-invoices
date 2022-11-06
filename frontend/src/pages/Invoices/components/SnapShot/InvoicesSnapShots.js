import { useState, useCallback } from 'react';
import { setSelectInvoiceID, resetInvoiceFilters } from 'features/invoices/invoiceDataSlice';
import { InvoicesSnapShot, useSnapShot } from '.';
import { LinkTextButton } from 'components/Buttons/Type';
import { Row, Col } from 'components/HTML';
import { useDispatch } from 'react-redux';

const InvoicesSnapShots = ({ filterProps }) => {

    const { initTitle, setTableTitle, invoices } = filterProps;

    const dispatch = useDispatch();

	const { currentYearData } = useSnapShot();

    const getSelID = useCallback((id) => dispatch(setSelectInvoiceID(id)), [dispatch])

    const [viewText, setViewText] = useState('view snapshot');

    const resetOnClose = useCallback(() => {
        setTableTitle(initTitle);
        setViewText('view snapshot')
        dispatch(resetInvoiceFilters())
    }, [dispatch, setTableTitle, initTitle])

    const handleCollapse = () => {
        viewText === 'view snapshot'
            ? setViewText('close snapshot')
            : resetOnClose()
    };

    const filteredData = useCallback(() => {
        return currentYearData({
            setTitle: setTableTitle,
            setData: () => {},
            invoices,
            selFn: getSelID
        }).filter(_ => _.amount);
    }, [currentYearData, setTableTitle, invoices, getSelID]);

    return (
        <div className="d-print-none">
            <Row>
                <Col className="text-center mb-3">
                    <LinkTextButton
                        handleClick={handleCollapse}
                        toggle={true}
                        colID="snapshotCollapse"
                    >
                        {viewText}
                    </LinkTextButton>
                </Col>
            </Row>
            <Row
                className="collapse ease-in"
                rowProps={{ id: "snapshotCollapse" }}
            >
                {filteredData().map(snapShot => (
                    <Col
                        cols="12 sm-6 md-4 lg-3 xl-2"
                        key={snapShot._id}
                    >
                        <InvoicesSnapShot
                            title={snapShot.title}
                            subTitle={snapShot?.subTitle}
                            sub1={snapShot.year}
                            quantity={snapShot.quantity}
                            amount={{
                                type: 'dollars',
                                number: snapShot.amount
                            }}
                            button={{
                                id: `btn${snapShot._id}`,
                                label: snapShot.btnLabel,
                                handleClick: snapShot.btnClick
                            }}
                            change={snapShot?.change}
                            changeLabel={snapShot?.changeLabel}
                            change2={snapShot?.change2}
                            changeLabel2={snapShot?.changeLabel2}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default InvoicesSnapShots
