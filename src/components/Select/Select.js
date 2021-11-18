import React from "react";
import './Select.css';

const Select = ({list , name , listenChanges})=>{
    const options = list.map( elem => <option value={elem}>{elem}</option>);
    return(
    <select onChange={(e)=> listenChanges(e)} className='select' name={name}>
        {options}
    </select>
    )
}

export default Select;