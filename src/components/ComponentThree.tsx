//you can have a dedicated css file on this typescript file
//this function is called on line 20 of App.tsx
type CompThreeProps = {
    children: React.ReactNode; //used to call and accept node 
}

export default function CompThree(props:CompThreeProps){
    return (
        <div >
            {props.children}
        </div>
    )
}