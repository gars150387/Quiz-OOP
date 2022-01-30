import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { AnswersOptions } from "./Answers";

export const Options = () => {
    const [index, setIndex] = useState(0)
    return (
        <>
        {AnswersOptions && AnswersOptions.map((answer, index)=>{
            return (
                <ListGroup.Item key={index} >{answer[0]}</ListGroup.Item>
            )
        })}
        </>
    )
}