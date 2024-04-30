import React, { useCallback } from 'react';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useTodoList from '../hooks/useTodoList';

function TodoList({lifting,textColor,filterSelect}) {

const [countCompleted, checkHendle, buttonHendler,sortTodo] = useTodoList(lifting,filterSelect)


    return  sortTodo.length ? (
        <>
        <p style={{margin:'0 0 0 50px'}} >{countCompleted()} </p>
    <ul style={{color:textColor}} >
        {
            sortTodo.map((elem,index)=>(

             <li key={index}> 
               {elem.id}   {elem.title}
                {/* {console.log("123",elem.completed)} */}
                <input type='checkbox' checked={elem.completed} onChange={()=> checkHendle(elem)} />
                <button type='btn' onClick={()=> buttonHendler(elem.id)}>delet</button>
              </li>
             )) 
        } 

    </ul>
    
    </>
    ) 
    : null;
}

export default TodoList;