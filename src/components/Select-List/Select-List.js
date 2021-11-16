import React from "react";
import Select from "../Select/Select";
import './Select-List.css';
import CustomBtn from "../Custom-Btn/Custom-Btn";

const SelectList = () => {
    return (
        <div className='select-list'>
            <div className='select-container'>
                <form onSubmit={() => console.log('Submit filter')}>
                    <div className='form-set'>
                        <Select list={['Croos-Country', 'Single Speed', 'Roads bikes']}></Select>
                        <Select list={['Treck', 'Santa Cruz', 'Ghost']}></Select>
                        <Select list={[300, 500, 700]}></Select>
                    </div>
                    <CustomBtn>Apply</CustomBtn>
                </form>
            </div>
        </div>
    )
}

export default SelectList;