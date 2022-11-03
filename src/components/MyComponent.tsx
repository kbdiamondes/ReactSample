
type MyCompType = {
    name: string;
    description: string;
    numericvar?: number;
}

export default function MyComp(props:MyCompType) {
    return (
        <div style={{border: "solid 1px #f00", margin:'1rem', padding: '1rem'}}>
            <h2>Hi</h2>
            <p>{Math.random() * 100}</p>
            <p>{props.name}</p>
            <p>{props.description}</p>
        </div>
    )
}