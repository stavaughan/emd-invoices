import { Card, CardBody } from '.'

const ContentCard = ({ cardClass, children }) => {

    return (
        <Card className={cardClass}>
            <CardBody>
                {children}
            </CardBody>
        </Card>
    )
}

export default ContentCard
