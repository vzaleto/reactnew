import React, { useCallback } from 'react';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function useTodoList(lifting,filterSelect) {

    const[todoList, setTodoList] = useState([]);
    const[sortTodo, setSortTodo] = useState([]);

useEffect(()=>{
    
    switch (filterSelect) {

        case 'FILTER_COMPLETED':

             setSortTodo (todoList.filter(elem=> elem.completed));

             console.log(sortTodo)
             break;

        case 'FILTER_NON_COMPLETED':

             setSortTodo (todoList.filter(elem=> !elem.completed));

             console.log(sortTodo)
            
            break;

        default :
        setSortTodo (todoList)
            break;
    }
},[filterSelect,todoList])


useMemo(()=>{
    todoList.sort((a,b)=> b.completed - a.completed )
},[todoList])

useEffect(()=>{
    ( async () =>{

        let response = await fetch(`https://jsonplaceholder.typicode.com/todos` )

            let getResponse = await response.json();

            let allResponse = getResponse;

    setTodoList(allResponse.splice(0,10) )
    })()
},[])

useEffect(()=>{

    if(Object.keys(lifting).length){
        console.log('empty')

        setTodoList((prevState)=> [...prevState, lifting] )

    }
    console.log(lifting)
},[lifting])

    const buttonHendler = async (idLiItem)=>{

        try{
                await fetch(`https://jsonplaceholder.typicode.com/todos/${idLiItem}`,{method:'DELETE'})

            setTodoList((prevState) => {

            return  prevState.filter((elem)=> elem.id !== idLiItem)
        })

        }catch(err){

        }
    }
    const checkHendle = async (item) =>{

        try{
            let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${item.id}`,{
            method:"PATCH",
            body:JSON.stringify({completed:!item.completed}),
            headers:{'Content-Type': 'application/json'},

        })

        let getResponse = await response.json();

        setTodoList((prevState)=> prevState.map((elem)=>{

                if(elem.id == getResponse.id){

                 elem = getResponse
                }
                return elem
            })
        )
        }catch(err){
            console.log(err)
        }
    }

            const countCompleted = useCallback( ()=>{
            return todoList.filter((elem)=>{
                return elem.completed
                }).length

            },[todoList])
    
    return [countCompleted, checkHendle, buttonHendler,sortTodo]
}

export default useTodoList;