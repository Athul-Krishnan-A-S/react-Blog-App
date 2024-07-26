function Button(props) {
    return (
        <button
            className="AddButton" onClick={props.onClick}>
            {props.value}
        </button>
    )
}
export default Button;