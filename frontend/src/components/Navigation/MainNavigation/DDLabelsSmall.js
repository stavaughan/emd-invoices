import React from 'react';
import { DropdownLinkSmall, PageSelectorDDLinks } from '.';
import { SiteData } from 'data';

const ddLabels = SiteData.dropDownLabels.siteDDLabels;

const DDLabelsSmall = () => {

    return (
        <>
            {ddLabels.map(option => (
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
