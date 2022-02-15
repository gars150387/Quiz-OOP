import React from 'react'
import { ObjectData } from './ObjectData'
import { ListGroup } from 'react-bootstrap'

export const TemplateToRenderQuestion = () => {

    return (
        <>
           {ObjectData.map((question, index) => {
               index= 0
                return (
                    
                    <ListGroup.Item>
                        <h2 style={{ color: 'black' }} index={index} key={question}>
                            {question.question}
                        </h2>
                    </ListGroup.Item>
                )

            })}
        </>
    )
}