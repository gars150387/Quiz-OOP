import React from 'react'
import { ObjectData } from './ObjectData'
import { ListGroup } from 'react-bootstrap'
import { TemplateToRenderQuestion } from './TemplateRenderQuestion'
import { TemplateToRenderAnswer } from './TemplateToRenderAnswer'

export const TemplateToRenderData = () => {
    let index = 0
    console.log('index', index)

    return (
        <>
        <TemplateToRenderQuestion />
        {console.log(TemplateToRenderQuestion)}
            {ObjectData.map((choice) => {
                return (
                    
                    <ListGroup.Item>
                        <h2 style={{ color: 'black' }} index={index} key={choice}>
                            {choice.choice}
                        </h2>
                    </ListGroup.Item>
                )

            })}
            <TemplateToRenderAnswer/>
        </>
    )
}