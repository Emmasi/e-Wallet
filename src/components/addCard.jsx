import Style from './addCard.module.css'
import { Link } from 'react-router-dom'
const addCard =()=>{
    const addCardBtn=()=>{

    }
    return(
        <div>
            <button><Link to="/">Back</Link></button>
        <div className={Style.addCardLayout}>
            <label>Card number</label>
            <input type="number"/>
            <label>Name</label>
            <input type="text" />
            <label>Lastname</label>
            <input type="text" />
            <div className={Style.sidenumber}>
                <div className={Style.ontop}>
                <label>Valid Thru</label>
                <input type="date" />
                </div>
                <div className={Style.ontop}>
                <label>CCS</label>
                <input type="number" />
                </div>
            </div>
            <label>Card</label>
            <select>
                <option>Mastercard</option>
                <option>Visa</option>
                <option>American Express</option>
            </select>

            <button className={Style.addBtn}onClick={addCardBtn}>Add</button>
        </div>
        </div>
    )

}
export default addCard