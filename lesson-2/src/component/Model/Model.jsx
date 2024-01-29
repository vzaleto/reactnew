import React from 'react';
import Collection from '../Collection/Collection';

function Model({key, Modelis}) {


    // key.map((elem)=> console.log(elem) )

    Modelis.map((elemi,index)=> console.log("elemi.name",elemi.name ) ) 


    
    return (
       
          
           
               Modelis.map((elemi,index)=>
                <tr key={index}>
                     <td> {elemi.name} </td> 
                     <td> <Collection Collec={elemi.collection}  />  </td>
                 </tr> 
                 
                 ) 
           
                
               
       
    );

    }
export default Model;