import React from 'react'
import { ObjectData } from './ObjectData'
import { Button, ListGroup } from 'react-bootstrap'
import { TemplateToRenderQuestion } from './TemplateRenderQuestion'
import { TemplateToRenderAnswer } from './TemplateToRenderAnswer'

export const TemplateToRenderData = () => {
    let index = null

    function Clicked() {
        index++
        console.log('clicked', index)
    }


    return (
        <>
            <div className='row'>
                <TemplateToRenderQuestion />
            </div>
            <div className='row'>
                {console.log(TemplateToRenderQuestion)}
                {ObjectData.map((choice, value) => {
                    return (

                        <ListGroup.Item>
                            <h2 style={{ color: 'black' }} index={value} key={choice}>
                                {choice.choice}
                            </h2>
                        </ListGroup.Item>
                    )

                })}
            </div>
            <div className='row'>
                <TemplateToRenderAnswer />
            </div>

            <div className='row'>
                <Button className='m-auto bg-success col-4' style={{ height: '35px', display: '-ms-flexbox' }} onClick={Clicked} >SKIP</Button><Button className='m-auto bg-success col-4' style={{ height: '35px' }}></Button>
            </div>
        </>
    )
}