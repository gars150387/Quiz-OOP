import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { AnswersOptions } from "./Choices";
import { FooterCounter } from "./Footer";
import { QuestionsRender } from './Questions'
import { Button } from "react-bootstrap";

export const Options = () => {
    const [clicked, setClicked] = useState(false)
    const [plus, setPlus] = useState(0)

    let index = 0

    return (
        <>
            <QuestionsRender index={index} />
            {AnswersOptions[index] && AnswersOptions[index].map((answer) => {
                return (
                    <ListGroup.Item onClick={e => setClicked(
                        console.log("cliked"), []
                    )} key={answer[index]} >{answer}</ListGroup.Item>
                )
            })
            }
            <Button onClick={element => setPlus(
                function (index) {
                    index = 0;
                    console.log('index', index)
                }
            )} variant="primary" className="mr-3">Reset</Button>
            <Button onClick={element => setPlus(

                console.log(index++)
            )} variant="primary">Skip</Button>

            <FooterCounter />
        </>
    )
}