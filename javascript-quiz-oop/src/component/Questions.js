import React from 'react'
import { Card } from 'react-bootstrap'
import { QuestionsOptions } from './Data'

export const QuestionsRender = () => {

    /**
     * variable index defined to move from one element of the array to another one moving forward or back
     */
    let index = 2

    return (
        <>
            {    /**
                 * the map function was removed because there is not need to render all elements in array at the same time
                 * bringing component to render elements in array
                 */

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