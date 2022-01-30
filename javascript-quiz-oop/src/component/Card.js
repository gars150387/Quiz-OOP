import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, ListGroup } from 'react-bootstrap'


export const CardTemplate = () => {
    return (
        <>
            <Card id="card" className="text-center">
                <Card.Header style={{color: 'black'}} >Quiz</Card.Header>
                <Card.Body>
                    <Card.Title style={{color: 'black'}}>Questions</Card.Title>
                    <Card style={{ width: '18rem' }}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>option 1</ListGroup.Item>
                            <ListGroup.Item>option 2</ListGroup.Item>
                            <ListGroup.Item>option 3</ListGroup.Item>
                            <ListGroup.Item>option 4</ListGroup.Item>
                        </ListGroup>
                    </Card>
                    <Button variant="primary">Reset</Button>
                    <Button variant="primary">Skip</Button>
                </Card.Body>
                <Card.Footer className="text-muted">Question x of y</Card.Footer>
            </Card>

        </>
    )
}


