import React, { useEffect } from 'react'
import { ObjectData } from './ObjectData'
import { Button, ListGroup } from 'react-bootstrap'
import { TemplateToRenderQuestion } from './TemplateRenderQuestion'
import { TemplateToRenderAnswer } from './TemplateToRenderAnswer'

export const TemplateToRenderData = () => {
    let index = null

    function Clicked() {
        index++
        if (index > ObjectData.length) {
            return index = ObjectData.length - 1;
        }
        console.log('cliked', index)
    }

    function Reset() {
        index = 0;
        console.log('reset', index)
    }


    return (
        <>
       {/* Primer div para establecer la fila de las preguntas de formar separada */}

            <div className='row'>
                <TemplateToRenderQuestion />
            </div>
            <div id='divider' />
            {/* div para establecer el espacio donde las opciones van a ser renderizadas */}
            <div className='row'>
                {/*map() funcion para renderizar todos los elementos existentes en el array donde estamos pasando dos parametros, choice y value, una vez renderizados, sera hecho 
                en una linea debiso a la estructura que se le esta dando a cada resultado */}
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
            <div id='divider' />
            <div className='row'>
                <Button className='m-auto bg-success col' style={{ height: '35px', display: '-ms-flexbox' }} onClick={Clicked} >SKIP</Button>
                <Button className='m-auto bg-danger col' style={{ height: '35px', display: '-ms-flexbox' }} onClick={Reset}>RESET</Button>
            </div>
        </>
    )
}