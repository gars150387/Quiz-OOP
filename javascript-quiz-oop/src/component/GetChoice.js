import React, { useState } from 'react'
import { objectData } from './ObjectData'

export const GetChoice = ({ index }) => {
    
    const [value, setValue] = useState('');

    const { choice } = objectData[index];

    const handleSelect = (e) =>{
        setValue(e);
        console.log('value',value)
        console.log('e',e)
    }

    return (
        <div>
            {choice.map(item => {
                return (
                    <ol key={ item }>
                       <button onSelect={ handleSelect }> {item} </button>
                    </ol>
                )
            })}

        </div>

    )

}