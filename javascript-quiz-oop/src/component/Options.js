import React from "react";
import { ListGroup } from "react-bootstrap";
import { AnswersOptions } from "./Answers";

export const Options = () => {

    let index = 2

    return (
        <>
        {AnswersOptions[index] && AnswersOptions[index].map((answer) =>{
            return (
                <ListGroup.Item key={index[index]} >{answer}</ListGroup.Item>
            )
        })
    }
        </>
    )
}