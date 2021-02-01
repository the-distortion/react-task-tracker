const Form = ({ value, label, type, onChange }) => {
    return (
        <div className={`form-control ${type==="checkbox" ? "form-control-check" : ""}`}>
            <label>{label}</label>
            <input type={type} value={value} name={label} placeholder={`Add ${label}`} id={label} onChange={onChange} />
        </div>
    )
}

Form.defaultProps = {
    type: "text",
}

export default Form
