import React from 'react'
import { objectData } from './ObjectData'

export const GetChoice = ({ choice }) =>{
    return (
        <ol>
            <li>
                {choice}
            </li>
        </ol>
    )
}