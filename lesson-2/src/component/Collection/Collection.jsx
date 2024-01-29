import React from 'react';

function Collection({Collec}) {
    return (
     
            Collec.map((elem,index) =>
            <ul key={index}>
                <li >version : {elem.version} </li>
                <li >year: {elem.year} </li>
                <li>horsepower: {elem.horsepower} </li>
                <li >engine: {elem.engine} </li>

           </ul>
           ) 

       
    );
}

export default Collection;