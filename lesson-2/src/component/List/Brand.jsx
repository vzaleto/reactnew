import React from 'react';
import Model from '../Model/Model';

function Brand({list}) {

    return(
         list.map((elem,index) => 
        <>
            <tr key={index}>
                <td> {elem.brand} </td>
                
            </tr>
            <Model  Modelis={elem.models}/>
             
        </>
        )
    )
    
}

export default Brand;
