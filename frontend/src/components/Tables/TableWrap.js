import clsx from "clsx";

const TableWrap = ({ sticky, className, children }) => {

    return (
        <table
            className={clsx('table table-sm table-hover my-2', className)}
            style={{ ...sticky ? { position: "relative" } : {} }}
        >
            {children}
        </table>
    );
};

export default TableWrap;
