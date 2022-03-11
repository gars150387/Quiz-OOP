import React from 'react';
import { objectData } from './ObjectData';

export const Footer = ({ index }) =>{
    return (
        <div>{`Question ${index + 1} de ${objectData.length}`}</div>
    )
}