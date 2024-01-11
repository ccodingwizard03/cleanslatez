import React from "react";
import classes from './Input.module.css';


function Input (props) {



    return (
        <div className={classes.control}   style={{width: props.width, maxWidth: props.maxWidth}}>
            {props.label && <label htmlFor={props.input.id} style={{color: props.color}} >{props.label}
                <span className={classes.redOne}>
                {props.red}</span></label>}
            <div className={classes.inputDiv}>
                <input
                    ref={props.ref}
                    style={{width: props.width, maxWidth: props.maxWidth}}
                    className={`${props.hasError || props.error? classes.invalid: ""}`}
                    {...props.input}
                />
                {props.placeholder}
                <img src={props.image} onClick={props.onClick}/>
            </div>
            {props.hasError && <div className={classes.textDanger}>{props.errorText}</div>}
        </div>

    )
}

export default Input;