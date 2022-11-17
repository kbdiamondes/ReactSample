import './App.css'; //import external css files this way
import TheCard, { CardDetails } from './components/TheCard';
import MyComp from './components/MyComponent';
import CompTwo from './components/ComponentTwo';
import CompThree from './components/ComponentThree';
import SessionThree from './components/SessionThree';
import TheCardList from './components/TheCardList';
import TheCardSumary from './components/TheCardSummary';
import { useState } from 'react';
import CardListProvider from './components/TheCardsContext';



  /*"handlerClick"can be implemented outside or inside the function
  implemented as custom component*/

  /* */

  //line 42 is an example of a component within a component
  //assign custom component on CompThree

  /*Line 49 demonstrates Click listener */

  /*handlerChange displays null because it is a generic ChangeEvent*/
  /*Now handlerchange will show value on the console */
function App() {



  const handlerClick = (event:React.MouseEvent, num:number) => {
    console.log(num)
    
  }

  const handlerChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
  }

  const handlerClickTwo = () => {
    console.log("1"); 
  }

  return (
    <div className="App">
      <CardListProvider>
        <TheCardSumary />
        <TheCardList />  
      </CardListProvider>  
    </div>
  );

}


export default App;


       /*
        <CompThree> 
          <CompTwo daysoftheweek='Tuesday' clickEvent={handlerClickTwo}>Hello World! </CompTwo>
          <CompTwo daysoftheweek='Sunday' clickEvent={handlerClickTwo}>What is Up!! </CompTwo>
      
        </CompThree>


        <Button onClick = {
          (event) => {handlerClick(event,120)}}
           variant = 'contained'>Submit
        </Button>

        <Input onChange={handlerChange}/>

          
        <MyComp name="Comp 1" description='Something something'/>
        <TheCard title="Lizard" description='Lizard Seems Unhappy' image='/images/contemplative-reptile.jpg'/>
        <TheCard title="Iguana Lagi" description='Iguana Alawi Seems Unhappy' image='/images/contemplative-reptile.jpg'/>
        { Cards.map((item,i)=>
            <TheCard key={i} title={item.title} image={item.image} description={item.description}/>
        )}
        <Button variant='contained'>Test</Button>*/