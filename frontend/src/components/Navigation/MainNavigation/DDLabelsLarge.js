import React from 'react';
import { DropdownLinkLarge, PageSelectorDDLinks } from '.';
import { SiteData } from 'data';

const ddLabels = SiteData.dropDownLabels.siteDDLabels;

const DDLabelsLarge = ({ loading }) => {
    return (
        <>
            {ddLabels.map((option, idx) => (
                <DropdownLinkLarge
                    key={`${option._id}_lg`}
                    id="navbarDropdownLg"
                    label={option.label}
					last={idx === ddLabels.length - 1}
					loading={loading}
                >
                    <PageSelectorDDLinks option={option} />
                </DropdownLinkLarge>
            ))}
        </>
    );
};

export default DDLabelsLarge;
