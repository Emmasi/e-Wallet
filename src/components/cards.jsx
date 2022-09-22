import { Link } from "react-router-dom"
import Card from "./card"
import Style from "./cards.module.css"
import {cardList} from '../redux/redux/cardSlice'



const cards =()=>{
  const dumdata=[
    {name:'Elsa',
    lastname:'Andersson',
    number:1233021032510412,
    typ:'master'},
    {name:'Elsa',
    lastname:'Andersson',
    number:7000111122223333,
    typ:'Visa'}
    ]
  return(
    <div>
      <h1>THE ACTIVE CARD</h1>
      <button className={Style.newBtn}><Link className='linkStyle' to="/addcard">Add new card</Link></button>
    <div className={Style.cardpos}>
      {dumdata.map((card,i)=><Card number={card.number} typ={card.typ} key={i}></Card>)}
    </div>
    </div>
  )

}
export default cards