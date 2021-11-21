import React, { useState } from "react";
import Select from "../Select/Select";
import './Select-List.css';
import CustomBtn from "../Custom-Btn/Custom-Btn";


const SelectList = ({handleSubmit}) => {
    
    return (
        <div className='select-list'>
            <div className='select-container'>
                <form onSubmit={(e)=> handleSubmit(e)}>
                    <div className='form-set'>
                        <Select   name='type' list={['All', 'Croos-Country', 'Single Speed', 'Roads bikes']}></Select>
                        <Select  name='mark' list={['All', 'Treck', 'Santa Cruz', 'Ghost']}></Select>
                        <Select   name='price' list={['All',400,500,600,700,1000]}></Select>
                    </div>
                    <CustomBtn>Apply</CustomBtn>
                </form>
            </div>
        </div>
    )
}

export default SelectList;