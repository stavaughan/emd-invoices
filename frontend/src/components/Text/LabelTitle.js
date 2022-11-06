const LabelTitle = ({ label, value }) => {
    return (
        <>
            <span className="text-muted">
                {label}:
            </span>
            <span className="ms-2 text-dark">
                {value}
            </span>
        </>
    )
}

export default LabelTitle
