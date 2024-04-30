import React, { useEffect, useState } from 'react';


function useLockalStorageI(name, defaultNmae) {

 const [velueStorage, setValueStorage] = useState(
    localStorage.getItem(name) ? JSON.parse(localStorage.getItem(name)) :
    defaultNmae
 )

 useEffect(()=>{
    localStorage.setItem(name, JSON.stringify(velueStorage))

 },[velueStorage])

    return [velueStorage, setValueStorage]
}

export default useLockalStorageI;