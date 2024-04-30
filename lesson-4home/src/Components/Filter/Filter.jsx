import React from 'react';
import {FILTERALL, FILTER_COMPLETED, FILTER_NON_COMPLETED} from './../ConstantVar/ConstantVar';

function Filter({setFilterSelect,filterSelect}) {

    console.log(filterSelect)

    const valueOption = (e)=>{

        // console.log(e.target.value);

        setFilterSelect(e.target.value)

    }


    return (
        <select onChange={valueOption} defaultValue={filterSelect}>
            <option value={FILTERALL} >All</option>
            <option value={FILTER_COMPLETED} >Complited ii</option>
            <option value={FILTER_NON_COMPLETED} >non Complited ii</option>
        </select>
   
    );
}

export default Filter;