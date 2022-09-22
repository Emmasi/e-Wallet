import Style from './addCard.module.css'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { addCard } from '../redux/redux/cardSlice'

const AddnewCard =()=>{
    const dispatch = useDispatch()
    const {latestId}=useSelector((state)=>state.activity)
    const addCardBtn=()=>{
        let cardNum = document.querySelector("#number").value;
        console.log(cardNum)
        let cardName = document.querySelector("#name").value;
        console.log(cardName)
        let cardDate = document.querySelector("#date").value;
        console.log(cardDate)
        let cardCcs = document.querySelector("#ccs").value;
        console.log(cardCcs)
        let cardType = document.querySelector("#type").value
        console.log(cardType)
        dispatch(
          addCard({
            number: cardNum,
            date: cardDate,
            ccs: cardCcs,
            typ: cardType,
            id: latestId + 1
          })
        );

    }
    return(
        <div>
            <button><Link to="/">Back</Link></button>
        <div className={Style.addCardLayout}>
            <label htmlFor="number">Card number</label>
            <input type="number" id="number"/>
            <label htmlFor="name">Name</label>
            <input type="text" id="name"/>
            <label htmlFor="lastName">Lastname</label>
            <input type="text" id="lastName"/>
            <div className={Style.sidenumber}>
                <div className={Style.ontop}>
                <label htmlFor="date">Valid Thru</label>
                <input type="date" id="date"/>
                </div>
                <div className={Style.ontop}>
                <label htmlFor="ccs">CCS</label>
                <input type="number" id="ccs"/>
                </div>
            </div>
            <label htmlFor='type'>Card</label>
            <select id="type">
                <option value="Mastercard">Mastercard</option>
                <option value="Visa">Visa</option>
                <option value="AmericanExpress">American Express</option>
            </select>

            <button className={Style.addBtn}onClick={addCardBtn}>Add</button>
        </div>
        </div>
    )

}
export default AddnewCard