import React from "react";

export default function Checkbox({name, checked, setChecked}) {
    return (
        <>
            <input name ={name}  checked={checked} onChange={setChecked} type="checkbox"/>
            <label>{name}</label>
        </>
    )
}