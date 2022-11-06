const DataCell = ({ className, style, children }) => {

    return (
        <td
            {...className && { className }}
			style={{ ...style, cursor: 'pointer' }}
			children={children}
        />
    );
};

export default DataCell;
