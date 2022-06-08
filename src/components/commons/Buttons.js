
const Button = (props) => {
    return(
        <button className={`type-1-sim ${props.idName}`} onClick={props.accion}> {props.label} </button>
    );
}

export default Button;