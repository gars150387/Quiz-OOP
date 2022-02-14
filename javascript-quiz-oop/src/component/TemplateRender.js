import React from 'react'
import { ObjectData } from './ObjectData'

export const TemplateToRenderData = ()=>{
return (
    <>
    {ObjectData.question}
    {ObjectData.map((item)=>{
        return <li>{item.choice}</li>
    })}
    </>
)
}