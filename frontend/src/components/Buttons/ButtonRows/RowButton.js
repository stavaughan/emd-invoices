import React, { useMemo } from 'react';
import { DataSortButton, SortButton } from 'components/Buttons/Type';
import { RecordBulkPayment } from 'pages/Invoices/components/AllItems';
import { IconDropDown } from 'components/DropDowns';
import { IconButton } from 'components/Buttons/Type';
import { ToolTip } from 'components/ToolTip';
import { PrintComponent } from 'services';
import { themeClasses } from 'theme';
import { SiteData } from 'data';

const RowButton = ({ btn, test, margin }) => {

    const today = new Date();
    const dateStr = today.getTime();

    const Buttons = useMemo(() => ([
        {
            type: 'modal',
            toolTip: btn?.toolTip,
            Elem: () => (
                <IconButton
                    icon={btn?.icon}
                    mode="light"
                    modalID={SiteData.modalIDs[btn?.modalID]}
					{...btn?.modalClick && {
						modalClick: btn.modalClick
					}}
					margin={margin}
                />
            )
        },
        {
            type: 'print',
            toolTip: `Print ${btn?.toolTip}`,
			noDisplay: !test,
            Elem: () => (
                <PrintComponent
                    className={themeClasses.button.icon.light}
                    componentRef={btn?.printRef}
                    documentTitle={`${btn?.toolTip}_${dateStr}`}
					margin={margin}
                />
            )
        },
        {
            type: 'click',
            toolTip: btn?.toolTip,
			noDisplay: !test,
            Elem: () => (
                <IconButton
                    icon={btn?.icon}
                    mode="light"
                    onClick={btn?.onClick}
					color={btn?.color}
					loading={btn?.loading}
					margin={margin}
                />
            )
        },
        {
            type: 'bulkPayments',
            toolTip: "Record bulk payments",
			noDisplay: !test,
            Elem: () => (
				<RecordBulkPayment
					itemsData={btn?.invoicesData}
					margin={margin}
				/>
			)
        },
        {
            type: 'dropdown',
            toolTip: btn?.toolTip,
			noDisplay: !test,
            Elem: () => (
                <IconDropDown
                    buttonClass={themeClasses.button.icon.light}
                    setOption={btn?.setDDOption}
                    options={btn?.ddOptions}
					margin={margin}
                    icon={btn?.icon}
                />
            )
        },
        {
            type: 'rsort',
			noDisplay: !test,
            toolTip: `Sort ${btn?.toolTip} ${btn?.sortBy === 'asc' ? 'ascending' : 'descending'}`,
            Elem: () => (
				<SortButton
					setSortBy={btn?.setSortBy}
					sortBy={btn?.sortBy}
					margin={margin}
				/>
			)
        },
        {
            type: 'sort',
			noDisplay: !test,
            toolTip: `Sort ${btn.toolTip}`,
            Elem: () => (
				<DataSortButton
					handleSort={btn?.handleSort}
					margin={margin}
				/>
			)
        }
    ]), [
        btn?.color,
        btn?.ddOptions,
        btn?.handleSort,
        btn?.icon,
        btn?.modalClick,
        btn?.modalID,
        btn?.onClick,
        btn?.printRef,
        btn?.setDDOption,
		btn?.invoicesData,
        btn?.setSortBy,
        btn?.sortBy,
        btn.toolTip,
		btn?.loading,
		margin,
		test,
        dateStr
    ]);

    const BtnObj = useMemo(() => Buttons.find(_ => _.type === btn.type), [Buttons, btn.type]);

	if(BtnObj?.noDisplay) {
		return <></>
	}

    return (
        <ToolTip tip={BtnObj.toolTip} span>
            <BtnObj.Elem />
        </ToolTip>
    )
}

export default RowButton
