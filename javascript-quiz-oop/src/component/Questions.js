import React, { useState } from 'react'
import {QuestionsOptions } from './Data'
import { Card } from 'react-bootstrap'

export const QuestionsRender = () => {
    let index = 0

    return (
        <>
            {QuestionsOptions && QuestionsOptions.map((question) => {
                return (
                    <>
                        <Card>
                            <Card.Body key={question.index} >{QuestionsOptions[index]}</Card.Body>
                        </Card>
                    </>
                )
            })}

        </>
    )
}