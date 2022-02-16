import React, { useEffect } from 'react'
import { ObjectData } from './ObjectData'
import { Button, ListGroup } from 'react-bootstrap'
import { TemplateToRenderQuestion } from './TemplateRenderQuestion'
import { TemplateToRenderAnswer } from './TemplateToRenderAnswer'

export const TemplateToRenderData = () => {
    let index = null

    function Clicked() {
        index++
        if(index > ObjectData.length){
            return index = ObjectData.length-1;
        }
        console.log('cliked', index)
    }

    function Reset() {
        index = 0;
        console.log('reset', index)
    }   


    return (
        <>
            <div className='row'>
                <TemplateToRenderQuestion />
            </div>
            <div className='row'>
                {ObjectData.map((choice, value) => {
                    return (

                        <ListGroup.Item>
                            <h2 className='m-auto bg-secundary' 
                            style={{ color: 'black', borderButton: '1px solid black', height: '45px', font: 'message-box', fontSize: '40px' }} 
                            index={value} key={choice}
                            hover>
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
                <Button className='m-auto bg-success col' style={{ height: '35px', display: '-ms-flexbox' }} onClick={Clicked} >SKIP</Button>
                <Button className='m-auto bg-danger col' style={{ height: '35px', display: '-ms-flexbox' }} onClick={Reset}>RESET</Button>
            </div>
        </>
    )
}