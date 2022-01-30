import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, ListGroup } from 'react-bootstrap'
import { Options } from './Options';
import { QuestionsRender } from './Questions';
import { FooterCounter } from './Footer';


export const CardTemplate = () => {

    const [plus, setPlus] = useState(0)

    let index = 0;

    return (
        <>
            <Card id="card" className="text-center" style={{ width: '35rem' }}>
                <Card.Header style={{color: 'black'}} >Quiz</Card.Header>
                <Card.Body>
                    <Card.Title style={{color: 'black'}}><QuestionsRender/></Card.Title>
                    <Card >
                        <ListGroup variant="flush">
                        <Options />
                        </ListGroup>
                    </Card>
                    <Button onClick={ element => setPlus(
                        function(index){
                            index = 0;
                            console.log('index',index)
                        }
                    )} variant="primary">Reset</Button>
                    <Button onClick={ element => setPlus(
                        console.log(index++)
                    )} variant="primary">Skip</Button>
                </Card.Body>
                <FooterCounter />
            </Card>

        </>
    )
}


