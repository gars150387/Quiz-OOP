import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { AnswersOptions } from "./Choices";
// import { FooterCounter } from "./Footer";
// import { QuestionsRender } from './Questions'
import { Button, Card } from "react-bootstrap";
// import { state } from './Actions'
import { QuestionsOptions } from "./QuestionsData";

export const Options = () => {

    const [setClicked] = useState('')
    const [increase, setIncrease] = useState(0)
    const [reset, setReset] = useState(false)

    let index = increase
    console.log('index', increase)

    


    return (
        <>

            <Card.Footer key={QuestionsOptions[index][index]} style={{ color: 'black' }}>{QuestionsOptions[index]}</Card.Footer>
            {/* comment component  */}
            {/* <QuestionsRender index={index} /> */}
            {AnswersOptions[index].map((answer) => {
                return (
                    <ListGroup.Item onClick={e => setClicked(
                        console.log("cliked"), []
                    )} key={answer[index]} >{answer}</ListGroup.Item>
                )
            }
            )
            }
            <Button className="bg-danger m-auto" style={{height: '50px', color: 'white', width: '75%'}} onClick={()=> setIncrease(index + 1)}>SKIP</Button>
            <Button className="bg-success m-auto" style={{height: '50px', color: 'black', width: '75%'}} value={reset}>RESET</Button>

            <Card.Footer key={index} className="text-muted">Question{` ${index + 1} of ${QuestionsOptions.length}`}</Card.Footer>
            {/* <FooterCounter /> */}
        </>
    )
}