import { useMemo } from 'react';
import { themeClasses } from 'theme';
import { Row } from 'components/HTML'
import { AspectRatio } from '.';

const SelectAspectRatio = ({
	ratioID,
	setRatioID,
	aspectRatios,
	base
}) => {

    const ratios = useMemo(() => aspectRatios({ base }), [base, aspectRatios])

    return (
        <div className="ps-3">
            <label className={themeClasses.forms.inputGroups.label.field}>
				Aspect Ratio
			</label>
            <Row className="g-2">
                {ratios.map(ratio => (
                    <AspectRatio
                        key={ratio._id}
                        ratio={ratio}
                        width={ratio.width}
                        height={ratio.height}
                        ratioID={ratioID}
                        setRatioID={setRatioID}
                    />
                ))}
            </Row>
        </div>
    )
}

export default SelectAspectRatio
