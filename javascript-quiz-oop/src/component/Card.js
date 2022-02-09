import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap'
import {Options} from './ChoicesRender'
// import { Template } from './Testing';


export const CardTemplate = () => {

    return (
        <>
            <Card id="card" className="text-center" style={{ width: '85rem' }}>
                <Options />
                {/* <Template/> */}
            </Card>

        </>
    )
}


