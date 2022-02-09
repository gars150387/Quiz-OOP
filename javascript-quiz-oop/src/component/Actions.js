import {useState} from "react";

export const state = [{
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
            const [reset, setReset] = useState()

            return(
                setReset({
                    index: 0,
                }),
                console.log('reset', setReset)

            )

        }


    }
}]