import { Button, TextField, TextFieldProps } from "@mui/material";
import React, { useRef, useState } from "react";

export default function SessionThree(){

    const tfRef = useRef<TextFieldProps>(null); 
    const divRef = useRef<HTMLDivElement>(null);
    let elemVal = "Default P" 
    let collectionOne:string[] = ["Item 1"]; 

    const [value, setValue] = useState("Default Two Amazing")
    const [collectionTwo, setCollectionTwo] = useState(["Default Twelve"]);
    
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        //console.log(event.target.value); 
        elemVal = event.target.value;
        //console.log(elemVal);
        //console.log(collectionOne);
        setValue(event.target.value+""); 
    }

    const handleClick = () => {
            divRef!.current!.innerText = tfRef.current?.value + ""; 
            collectionOne.push(tfRef.current?.value+"");        
            let d = [...collectionTwo]; 
            d.push(tfRef.current?.value+"")
            console.log(d); 
            setCollectionTwo(d); 
            //console.log(collectionOne); 
    }

    const clicker = () => {
        alert(1); 
    }

    return (
        <>
            <div style={{padding:'1rem', margin:'1rem'}}>
                <TextField onChange={handleChange}></TextField><br/>
                <TextField inputRef={tfRef}></TextField>
            </div>
            <div style={{color:"#f00"}} ref={divRef}>Default Text</div>
            <p style={{color:"#f00"}}>{elemVal}</p>
            <p style={{color:"#f00"}}>{value}</p>
            <Button onClick={handleClick} variant="outlined">Set It</Button>
            {
                collectionOne.map((item, i)=>(
                    <p key={i} style={{color:"#f00", border:'solid 1px #0f0', padding: '1rem'}}>{item}</p>
                ))
            }

{
                collectionTwo.map((item, i)=>(
                    <p key={i} style={{color:"#00f", border:'solid 1px #0f0', padding: '1rem'}} onClick={clicker}>{item}</p>
                ))
            }

        </>
    );
}