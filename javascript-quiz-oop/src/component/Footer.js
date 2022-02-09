import { QuestionsOptions } from "./QuestionsData"
import { Card } from "react-bootstrap"
import { Counting } from "./Counting"


export const FooterCounter = () => {
    let index = 0

    return (
        <>
            {<Card.Footer className="text-muted">Question{` ${index + 1} of ${QuestionsOptions.length}`}</Card.Footer>
            }
        </>
    )
}