import React from 'react'
import { Card } from 'react-bootstrap'
import { QuestionsOptions } from './Data'
// import { QuestionsAndAnswer } from './DataObject'

export const QuestionsRender = () => {


    let index = 0

    return (
        <>
            {

                <Card.Body>
                    <Card.Title >{QuestionsOptions[index]}</Card.Title>

                </Card.Body>
                /**
                 *    
                 * //mapping an object using Object.keys
                    // Object.keys(QuestionsAndAnswer).map((choice, index)=>{
                    //     return (
                    //         <ListGroup.Item key={index} >{QuestionsAndAnswer[choice]}</ListGroup.Item>
                    //     )
                    // })

                    Did not work
                 */

            }
        </>
    )
}