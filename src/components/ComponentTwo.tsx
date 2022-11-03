//you can have a dedicated css file on this typescript file

import { Button } from "@mui/material";

//go for inline type of css which is on line 11
type CompTwoProps = {
    daysoftheweek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday"; //purpose of this is for warning purposes
    children: string;
    clickEvent: () => void; 
}

//div can have onClick syntax, 
//this function is called on line 43 of App.tsx

const clickHandler = () => 
{
    alert(1)
}

export default function CompTwo(props: CompTwoProps) {
    return (
        <div style={{display:'inline-block', 
            minWidth: '200px', 
            maxWidth: '200px', 
            border: "solid 1px #f00",
            margin: '1rem',
            padding: '1rem'
        }}>
            <h2>{props.daysoftheweek}</h2>
            <h3>{props.children}</h3>
            <Button variant="contained" onClick={props.clickEvent}>Click Me</Button>
        </div>
    )
}