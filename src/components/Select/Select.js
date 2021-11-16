import React from "react";
import './Select.css';

const Select = ({list , name})=>{
    const options = list.map( elem => <option value={elem}>{elem}</option>);
    return(
    <select className='select' name={name}>
        {options}
    </select>
    )
}

export default Select;