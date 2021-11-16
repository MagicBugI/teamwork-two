import React from 'react';

import './Custom-Btn.css';

const CustomBtn = ({children , inverce, ...otherProps})=>{
    return(
        <button className={`${inverce ? 'inverce' : ''}
        custom-btn`}  {...otherProps}>
            {children}
        </button>
    )
}

export default CustomBtn;