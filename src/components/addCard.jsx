import Style from "./addCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCard } from "../redux/redux/cardSlice";
import Card from "./card";
import { useState } from "react";

const AddnewCard = () => {
  const { latestId } = useSelector((state) => state.cardSlice);
  const { first, last } = useSelector((state) => {
    return state.userSlice.user;
  });


  const dispatch = useDispatch();

  const addCardBtn = () => {
    let cardNum = document.querySelector("#number").value;
    let cardDate = document.querySelector("#date").value;
    let cardCcs = document.querySelector("#ccs").value;
    let cardType = document.querySelector("#type").value;
    dispatch(
      addCard({
        number: cardNum,
        date: cardDate,
        ccs: cardCcs,
        typ: cardType,
        id: latestId + 1,
      })
    );
    alert("Du har lagt till ett kort");
    
  };

    const [numInput, setnumInput] = useState();
    const [dateInput, setdateInput] = useState();
    const [cssInput, setccsInput] = useState();
    const [typeInput, settypeInput] = useState();



  return (
    <div>
      <button className={Style.backBtn}>
        <Link className="linkStyle" to="/">
          Back
        </Link>
      </button>
      <Card number={numInput} date={dateInput} css={cssInput} type={typeInput} />
      <div className={Style.addCardLayout}>
        <label htmlFor="number">Card number</label>
        <input type="number" id="number" onChange={e => setnumInput(e.target.value)}/>

        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={first} />
        <label htmlFor="lastName">Lastname</label>
        <input type="text" id="lastName" value={last} />

        <div className={Style.sidenumber}>
          <div className={Style.ontop}>
            <label htmlFor="date">Valid Thru</label>
            <input type="date" id="date" onChange={e => setdateInput(e.target.value)}/>
          </div>
          <div className={Style.ontop}>
            <label htmlFor="ccs">CCS</label>
            <input type="number" id="ccs" onChange={e => setccsInput(e.target.value)}/>
          </div>
        </div>
        <label htmlFor="type">Card</label>
        <select id="type" onChange={e => settypeInput(e.target.value)}>
          <option value="Mastercard">Mastercard</option>
          <option value="Visa">Visa</option>
          <option value="AmericanExpress">American Express</option>
        </select>

        <button className={Style.addBtn} onClick={addCardBtn}>
          <Link className="linkStyle" to="/">
            Add
          </Link>
        </button>
      </div>
    </div>
  );
};
export default AddnewCard;
