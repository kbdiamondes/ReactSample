import { useContext } from "react"
import { CardDetails } from "./TheCard"
import { CardListContext } from "./TheCardsContext"

type TheCardSummaryProps = {
    Cards: CardDetails[]
}

export default function TheCardSumary(){
    const cards = useContext(CardListContext)
    
    return(
        <div>
            <h2>Total number of Card: {cards?.cards.length} </h2>
            <button onClick={()=>{
                cards?.addCard( {title:'Patutoy', description:'Hatdog', image:'/images/contemplative-reptile.jpg'});
            }}>Click to Add</button>
        </div>
    )
}