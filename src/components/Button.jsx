import React from "react";
import "../styles/Button.css"

function Button(props){
return(
    <div>
        <button autofocus>{props.action}</button>
    </div>
)
}

export default Button;