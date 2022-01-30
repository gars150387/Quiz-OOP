import { QuestionsOptions } from "./Data"
import { Card } from "react-bootstrap"


export const FooterCounter = () =>{
    let index = 0

    return (
        <>
        {QuestionsOptions && QuestionsOptions.map(question =>{
            return(
                <Card.Footer className="text-muted">Question{` ${index + 1} of ${QuestionsOptions.length}`}</Card.Footer>
            )
        })}
        </>
    )
}