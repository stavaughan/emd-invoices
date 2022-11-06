import { Button } from '..';
import { controlProps } from 'globals/js';

const CollapseButton = ({ collapseID, children }) => {

    return (
        <Button
            className="accordion-button collapsed border-0"
            type="button"
            rest={controlProps.collapse(collapseID)}
			children={children}
        />
    );
};

export default CollapseButton;
