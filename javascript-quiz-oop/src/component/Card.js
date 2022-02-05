import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap'
import {Options} from './ChoicesRender'


export const CardTemplate = () => {

    const [plus, setPlus] = useState(0)

    let index = 0;

    return (
        <>
            <Card id="card" className="text-center" style={{ width: '85rem' }}>
                <Options />
            </Card>

        </>
    )
}


