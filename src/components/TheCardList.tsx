import { ClientRequest } from "http";
import { useContext } from "react";
import TheCard, { CardDetails } from "./TheCard"
import { CardListContext } from "./TheCardsContext";

type TheCardListProps = {
    Cards: CardDetails[]
}

export default function TheCardList(){
    const cards = useContext(CardListContext);
    return(
        <div>
            <>     
            <h2 style={{color:'blue'}}>{cards?.cards.length}</h2>
            <button onClick={()=>{
                cards?.addCard( {title:'Patuti', description:'Jatdig', image:'/images/contemplative-reptile.jpg'});
            }}>Click to Add Me</button>

            { cards?.cards.map((item,i)=>
                <TheCard key={i} title={item.title} image={item.image} description={item.description}/>
            )}
            </>
        </div>

    );
}