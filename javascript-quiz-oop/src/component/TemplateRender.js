import React from 'react'
import { ObjectData } from './ObjectData'
import { Button, ListGroup } from 'react-bootstrap'
import { TemplateToRenderQuestion } from './TemplateRenderQuestion'
import { TemplateToRenderAnswer } from './TemplateToRenderAnswer'

export const TemplateToRenderData = () => {
    let index = null

    function Clicked(){
        let index = index + 1;
        console.log('clicked', index)
    }


    return (
        <>
        <TemplateToRenderQuestion />
        {console.log(TemplateToRenderQuestion)}
            {ObjectData.map((choice,value) => {
                return (
                    
                    <ListGroup.Item>
                        <h2 style={{ color: 'black' }} index={value} key={choice}>
                            {choice.choice}
                        </h2>
                    </ListGroup.Item>
                )

            })}
            <TemplateToRenderAnswer/>
            <div className='row'>
            <Button className='m-auto bg-success col-4' style={{height: '35px', display: '-ms-flexbox'}} onClick={Clicked} >SKIP</Button><Button className='m-auto bg-success col-4' style={{height: '35px'}}></Button>
            </div> 
        </>
    )
}