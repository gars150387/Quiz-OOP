import React, { useState } from 'react';
import { GetQuestion } from './GetQuestion';
import { GetChoice } from './GetChoice';
import { Footer } from './Footer';
import { objectData } from './ObjectData';
// import { PropType } from 'prop-types'

export const TemplateRender = () => {

    const value = 0
    const [index, setIndex] = useState( value );
    const handleSkip = () => {
        setIndex(index + 1)
        console.log('index', index)
    }
    const handleReset = () => {
        setIndex(value);
        console.log('index Reseted', index)
        
        if( index > objectData.length){
            return value
        }
    }
  
    return (
        <>
            <div>
                <h2 style={{ color: 'black' }}>This is a questionary</h2>
            </div>
            <br className='borderBottom' />
            <div>
                <h1><GetQuestion index={ index }/></h1>
                <h2><GetChoice index={ index }/></h2>
            </div>
            <div style={{ marginLeft: '45%' }} className='d-flex'>
                <button onClick={handleSkip}>Skip</button>
                <button onClick={handleReset}>Reset</button>
            </div>
            <div><Footer index={ index } /></div>
        </>
    )
}