import React from 'react';
import { useState } from 'react';
import './style.css';

function Form({setLifting}) {

    const [formPost, setFormPost] = useState({
        title:'Default value',
        completed:false
    });

    const inputHandler = (e) =>{
        setFormPost((prevState)=>( {...prevState,value:e.target.value}) )
    }

    const checkBoxHandler = (e)=>{
         setFormPost((prevState)=>({ ...prevState, completed:e.target.checked } ))
    }

    const submitForm = async (e)=>{
        e.preventDefault();

        let response = await fetch(`https://jsonplaceholder.typicode.com/todos/`,{
            method:'POST',
            headers:{'Content-Type' : 'application/json'},
            body:JSON.stringify(formPost)
        })
        let getResponse = await response.json()

        console.log(getResponse)

        setLifting(getResponse)
    }

    return (
        <form onSubmit={submitForm} >
            <input type='text' defaultValue={formPost.title} onChange={inputHandler}/>
            <input type='checkbox' defaultChecked={formPost.completed} onChange={checkBoxHandler} />
            <button> submit </button>
        </form>
    );
}

export default Form;