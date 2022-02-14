import React from 'react'
import { ObjectData } from './ObjectData'
import { ListGroup } from 'react-bootstrap'

export const TemplateToRenderData = () => {

    return (
        <>
            {ObjectData.map((choice, index) => {
                return (
                    
                    <ListGroup.Item>
                        <h2 style={{ color: 'black' }} index={index} key={choice}>
                            {choice.choice}
                        </h2>
                    </ListGroup.Item>
                )

            })}
        </>
    )
}