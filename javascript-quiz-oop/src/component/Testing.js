import { Card } from "react-bootstrap";
import { ObjectData } from "./ObjectData";

export const Template = (index)=>{
    return(
        <>
        <Card.Title>{ObjectData.question[index]}</Card.Title>
        <Card.Body>{ObjectData.choice[index]}</Card.Body>
        <Card.Footer>{ObjectData.answer[index]}</Card.Footer>
        </>
    )
}