import React, { useEffect, useState } from 'react'
import { objectData} from './ObjectData'
import { Button, ListGroup } from 'react-bootstrap'
import { TemplateToRenderQuestion } from './TemplateRenderQuestion'
import { TemplateToRenderAnswer } from './TemplateToRenderAnswer'
import { Counting } from './Counting'

export const TemplateToRenderData = ({startValue}) => {

    startValue = 0

    const [countIndex, setCountIndex] = useState(0)

    const Skip = ()  =>{
        setCountIndex(countIndex + 1)
        console.log(countIndex)
    }

    const Reset = () =>{
        setCountIndex(startValue)
        console.log(startValue)
    }

    // console.log(Reset())


    return (
        <>
       {/* Primer div para establecer la fila de las preguntas de formar separada */}

            <div className='row'>
                <TemplateToRenderQuestion onClick={()=> function(){
                    console.log('Clicked')
                }} />
            </div>
            <div id='divider' />
            {/* div para establecer el espacio donde las opciones van a ser renderizadas */}
            <div className='row'>
                {/*map() funcion para renderizar todos los elementos existentes en el array donde estamos pasando dos parametros, choice y value, una vez renderizados, sera hecho 
                en una linea debiso a la estructura que se le esta dando a cada resultado */}
                {objectData[countIndex] && objectData[countIndex].map(({question, choice}) => {
                    return (

                        <ListGroup.Item>
                            <h1>{question}</h1>
                            <h2 className='m-auto bg-secundary'
                                style={{ color: 'black', borderButton: '1px solid black', height: '45px', font: 'message-box', fontSize: '40px' }}
                                >
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
                <Button className='m-auto bg-success col' style={{ height: '35px', display: '-ms-flexbox' }} onClick={ Skip } >SKIP</Button>
                <Button className='m-auto bg-danger col' style={{ height: '35px', display: '-ms-flexbox' }} onClick={Reset}>RESET</Button>
            </div>
        </>
    )
}