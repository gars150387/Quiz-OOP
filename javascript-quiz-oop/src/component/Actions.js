import {useState} from "react";

let Store = [{
    data: {
        index: 0
    },
    actions:{
        Add(){
            

        },
        Reset(){

        }


    }
}]

export const Cliked = () =>{

    const [index, setIndex] = useState(0);

    return setIndex(index++)
}