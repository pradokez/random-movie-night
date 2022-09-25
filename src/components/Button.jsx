import React from "react";
import "../styles/Button.css"

const Button = (props) => {
return(
    <div>
        <button onClick={props.function}>{props.action}</button>
    </div>
)
}

export default Button;