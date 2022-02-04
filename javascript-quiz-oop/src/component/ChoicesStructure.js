import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { AnswersOptions } from "./Choices";

export const Options = () => {
    const [clicked, setClicked] = useState(false)

    let index = 2

    return (
        <>
        {AnswersOptions[index] && AnswersOptions[index].map((answer) =>{
            return (
                <ListGroup.Item onClick={e => setClicked(
                    console.log("cliked"),[]
                )} key={index[index]} >{answer}</ListGroup.Item>
            )
        })
    }

    {}
        </>
    )
}