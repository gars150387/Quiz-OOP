import React from 'react';
import { objectData } from './ObjectData';

export const GetQuestion = ({ index }) =>{
    const { question } = objectData[index];

    return (
        <>
        { question }
        </>
    )

}