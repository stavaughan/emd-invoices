import React from 'react';
import { DropdownLinkLarge, PageSelectorDDLinks } from '.';
import { SiteData } from 'data';

const DDLabelsLarge = ({ loading }) => {
    return (
        <>
            {SiteData.siteDDLabels.map((option, idx) => (
                <DropdownLinkLarge
                    key={`${option._id}_lg`}
                    id="navbarDropdownLg"
                    label={option.label}
					last={idx === SiteData.siteDDLabels.length - 1}
					loading={loading}
                >
                    <PageSelectorDDLinks option={option} />
                </DropdownLinkLarge>
            ))}
        </>
    );
};

export default DDLabelsLarge;
