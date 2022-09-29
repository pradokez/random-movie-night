import React from "react";
import "../styles/Button.css"

const Button = (props) => {
return(
    <div>
        <button onClick={props.action}>{props.name}</button>
    </div>
)
}

export default Button;