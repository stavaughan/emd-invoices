import { ChangeContactAvatar } from 'components/Avatars';
import { TitleBlock, ExtraContent } from '.';
import { Card, CardBody } from '..';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Row, Col } from 'components/HTML';

const HeaderCard = ({ headerData, accountOwner, editProfile, editData }) => {

    const { isError, message } = useSelector(state => state.owner);

    return (
        <Card className="bg-primary">
            <CardBody>
                {isError && (
                    toast.error(message, {
                        toastId: 'uploadowneravatarerror',
                        position: 'top-center'
                    })
                )}
                <Row>
                    <Col cols="sm-8">
                        <Row className="align-items-center">
                            <Col cols="sm-4 md-3 lg-2" className="d-print-none">
                                <form>
                                    <ChangeContactAvatar
										contactID={accountOwner?._id || ''}
										avatarID={accountOwner?.avatarID || ''}
                                        btnColor="btn-light-primary-reverse"
                                        collection="owner"
                                    />
                                </form>
                            </Col>
                            <Col>
                                <TitleBlock
                                    name={accountOwner.name.fullName}
                                    title="Beneficiary Name"
                                />
                                {headerData && headerData[0] && (
                                    <ExtraContent extraData={headerData} editData={editData} />
                                )}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

export default HeaderCard;
