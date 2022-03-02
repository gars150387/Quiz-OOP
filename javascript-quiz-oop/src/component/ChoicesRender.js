import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { QuestionsOptions } from "./QuestionsData";
import { objectData } from "./ObjectData";
import { answersOptions } from "./Choices";

export const Options = ({value = 0}) => {

    const [counter, setCounter] = useState( 0 )

    let index = counter

    function increaseIndex(){
        setCounter(counter + 1)
    }

    function decreaseIndex(){
        setCounter(counter - 1)
    }

    function resetIndex (){
        setCounter(value)
    }

    return (
        <>

            <Card.Footer key={QuestionsOptions[index][index]} style={{ color: 'black' }}>{QuestionsOptions[index]}</Card.Footer>
            {/* <Card.Footer key={QuestionsOptions[index][index]} style={{ color: 'black' }}>{objectData.question[index]}</Card.Footer> */}
            {/* comment component  */}
            {/* <QuestionsRender index={index} /> */}


            {answersOptions && answersOptions.map(item =>{
                console.log('answers',answersOptions[index])
                return (
                    <li key={item.index}>
                        {item.choice}
                    </li>
                )
            })}
            {objectData.choice && objectData.choice.ma( item =>{
                console.log('choices',objectData.choice)
                return (
                    <li key={item.choice}>
                        {item.choice}
                    </li>
                )
            })}


            {/* {AnswersOptions[index] && AnswersOptions[index].map((answer) => {
                return (
                    <li key={AnswersOptions[index+2]} index={index}>
                    {answer[index]}
                </li>                 
                )
            }
            )
            } */}
            <Button className="bg-danger m-auto" style={{height: '50px', color: 'white', width: '75%'}} onClick={ increaseIndex }>SKIP</Button>
            <Button className="bg-success m-auto" style={{height: '50px', color: 'black', width: '75%'}} onClick={ resetIndex }>RESET</Button>

            <Card.Footer key={index} className="text-muted">Question{` ${index + 1} of ${QuestionsOptions.length}`}</Card.Footer>
            {/* <FooterCounter /> */}
        </>
    )
}

// Options.propType={
//     value: PropType.number.isRequired 
// }