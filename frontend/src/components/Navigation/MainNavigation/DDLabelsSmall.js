import React from 'react';
import { DropdownLinkSmall, PageSelectorDDLinks } from '.';
import { SiteData } from 'data';

const DDLabelsSmall = () => {

    return (
        <>
            {SiteData.siteDDLabels.map(option => (
                <DropdownLinkSmall
                    key={option._id}
                    id={option._id}
                    label={option.label}
                >
                    <PageSelectorDDLinks option={option} small={true} />
                </DropdownLinkSmall>
            ))}
        </>
    );
};

export default DDLabelsSmall;
