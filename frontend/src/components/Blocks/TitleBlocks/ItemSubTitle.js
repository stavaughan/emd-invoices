import React from 'react';
import clsx from "clsx";

const ItemSubTitle = ({ title, sclass }) => {
    return (
        <>
            {sclass
                ? (
                    <span className={clsx(sclass, 'my-2 text-muted')}>
                        {title}
                    </span>
                ) : (
                    <div className="my-2 text-muted">
                        {title}
                    </div>
                )}
        </>

    );
};

export default ItemSubTitle;
