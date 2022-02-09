import { Card } from "react-bootstrap";
import { ObjectData } from "./ObjectData";

export const Template = () => {
    return (
        <>
            {ObjectData && ObjectData.map((question, choice, answer, index) => {
                return (
                    <>
                        <Card.Title>{question[index]}</Card.Title>
                        <Card.Body>{choice[index]}</Card.Body>
                        <Card.Footer>{answer}</Card.Footer>
                    </>
                )
            })}
        </>
    )
}