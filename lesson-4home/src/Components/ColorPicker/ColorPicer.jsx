import React from 'react';
import { memo } from 'react';

function ColorPicer({textColor,setTextColor}) {
    console.log(textColor)
    const heandlerColor = (e)=>{
        setTextColor(e.target.value)
    }

    return (
        <input type='color' defaultValue={textColor} onChange={heandlerColor} />
    );
}

export default memo (ColorPicer);