import React from 'react';
import { SiteData } from 'data';
import { AlertBanner } from '.';

const StatementAlert = ({ mx, hr }) => {
    const AlertContent = () => (
        <>
            {hr && <hr />}
			<AlertBanner
                color="warning"
                icon="info-circle"
                iconClass="text-warning"
            >
				{SiteData.disclosures.statement}
			</AlertBanner>
        </>
    );
    return <>{mx ? <span className="mx-3 pb-3"><AlertContent /></span> : <AlertContent />}</>;
};

export default StatementAlert;
