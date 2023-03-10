const ListItem = ({ label, value, width, className }) => {
	
    return (
        <div
			className="d-flex justify-content-between align-items-center"
			style={{
				width: `${width || '10'}rem`
			}}
		>
            <span className="text-xs text-dark font-medium">
                {label}
            </span>
            <span {...className && { className }}>
				{value}
			</span>
        </div>
    )
}

export default ListItem
