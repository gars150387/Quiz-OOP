import React from 'react'
import { ObjectData } from './ObjectData'
import { ListGroup } from 'react-bootstrap'

export const TemplateToRenderAnswer = () => {

    return (
        <>
           {ObjectData.map((answer, index) => {
               index= 0
                return (
                    
                    <ListGroup.Item>
                        <h2 style={{ color: 'black' }} index={index} key={answer}>
                            {answer.answer}
                        </h2>
                    </ListGroup.Item>
                )

            })}
        </>
    )
}