import { Link } from "react-router-dom"
import Card from "./card"
import Style from "./cards.module.css"
import { useSelector } from "react-redux"




const Cards =()=>{
  const {cardList}=useSelector((state)=>state.cardSlice)
  console.log(cardList)

  return(
    <div>
      <h1>THE ACTIVE CARD</h1>
      <button className={Style.newBtn}><Link className='linkStyle' to="/addcard">Add new card</Link></button>
    <div className={Style.cardpos}>
      {cardList.map((card,i)=><Card number={card.number} type={card.type} date={card.date} ccs={card.ccs} id={card.id} key={i}></Card>)}
    </div>
    </div>
  )

}
export default Cards