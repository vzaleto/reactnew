import React, { useEffect } from 'react';
import TodoList from './../TodoList';
import Form from './../Form/Form';
import { useState } from 'react';
import ColorPicer from '../ColorPicker/ColorPicer';
import Filter from '../Filter/Filter';
import {FILTERALL,FILTER_COMPLETED,FILTER_NON_COMPLETED} from '../ConstantVar/ConstantVar';
import useLockalStorageI from '../../hooks/useLockalStorage';

function TodoGeneral(props) {

const [lifting, setLifting] = useState([]);

const [textColor, setTextColor] = useLockalStorageI( 'textColor', '#000' )

const [filterSelect, setFilterSelect] = useLockalStorageI( 'filterName', FILTERALL )


    return (
        <>
        <Form  setLifting={setLifting}/>
        <Filter setFilterSelect={setFilterSelect} filterSelect={filterSelect}/>
        <TodoList lifting={lifting} textColor={textColor} filterSelect={filterSelect} setFilterSelect={setFilterSelect}/>
        <ColorPicer setTextColor={setTextColor} textColor={textColor} />
       </>
    );
}

export default TodoGeneral;