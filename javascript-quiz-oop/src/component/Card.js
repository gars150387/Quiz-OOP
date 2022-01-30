import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, ListGroup } from 'react-bootstrap'
import { Options } from './Options';
import { QuestionsRender } from './Questions';
import { FooterCounter } from './Footer';


export const CardTemplate = () => {
    return (
        <>
            <Card id="card" className="text-center">
                <Card.Header style={{color: 'black'}} >Quiz</Card.Header>
                <Card.Body>
                    <Card.Title style={{color: 'black'}}><QuestionsRender/></Card.Title>
                    <Card style={{ width: '18rem' }}>
                        <ListGroup variant="flush">
                        <Options />
                        </ListGroup>
                    </Card>
                    <Button variant="primary">Reset</Button>
                    <Button variant="primary">Skip</Button>
                </Card.Body>
                <FooterCounter />
            </Card>

        </>
    )
}


