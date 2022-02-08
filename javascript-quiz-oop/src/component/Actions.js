import {useState} from "react";

const state = [{
    data: {
        index: 0
    },
    actions:{
        Add(){
            const [index, setIndex] =useState(index);
            
            return (
                setIndex(index++),
                console.log('setIndex', setIndex)
            )

        },
        Reset(){
            console [reset, setReset] = useState(index)

            return(
                setReset({
                    index: 0,
                }),
                console.log('reset', setReset)

            )

        }


    }
}]

export const Cliked = () =>{

    const [index, setIndex] = useState(0);

    return setIndex(index++)
}