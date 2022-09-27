import Style from "./addCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCard } from "../redux/redux/cardSlice";
import { useState } from "react";
import User from "./user";
import { FaWifi } from "react-icons/fa";
import { FcSimCardChip } from "react-icons/fc";

const AddnewCard = () => {
  const { latestId } = useSelector((state) => state.cardSlice);
  const { first, last } = useSelector((state) => {
    return state.userSlice.user;
  });

  const dispatch = useDispatch();
  const [numInput, setnumInput] = useState(" ");
  const [dateInput, setdateInput] = useState();
  const [cssInput, setccsInput] = useState();
  const [typeInput, settypeInput] = useState();
  const splitCardNum = numInput
    .split("")
    .map((num, index) => {
      if (index === 3 || index === 7 || index === 11) {
        return num + " ";
      } else {
        return num;
      }
    })
    .join("");

  const addCardBtn = () => {
    let cardNum = document.querySelector("#number").value;
    let cardDate = document.querySelector("#date").value;
    let cardCcs = document.querySelector("#ccs").value;
    let cardType = document.querySelector("#type").value;
    console.log(numInput)
    if (numInput.length != 16) {
      alert('Kortnumret måste vara 16 siffror')
    }else {
      alert("Du har lagt till ett kort");
    dispatch(
      addCard({
        number: cardNum,
        date: cardDate,
        ccs: cardCcs,
        typ: cardType,
        active:false,
        id: latestId + 1,
      })
    );}
  };

  return (
    <div className={Style.createCard}>
      <button className={Style.backBtn}>
        <Link className="linkStyle" to="/">
          Back
        </Link>
      </button>
      <div className={Style.cardlayout}>
        <div className={Style.cardOver}>
          <FaWifi size={30} />
          <h2>{typeInput}</h2>
        </div>
        <div className={Style.cardMiddle}>
          <FcSimCardChip size={50} />
          <h3 className={Style.grow}>{splitCardNum}</h3>
        </div>
        <div className={Style.cardMiddle}>
          <p>Valid Thru{dateInput}</p>
          <p>{cssInput}</p>
        </div>
        <div className={Style.cardUnder}>
          <p className={Style.minitext}>Användarens namn</p>
          <User />
        </div>
      </div>
      <div className={Style.addCardLayout}>
        <label htmlFor="number">Card number</label>
        <input
          type="number"
          id="number"
          onChange={(e) => setnumInput(e.target.value)}
        />

        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={first} />
        <label htmlFor="lastName">Lastname</label>
        <input type="text" id="lastName" value={last} />

        <div className={Style.sidenumber}>
          <div className={Style.ontop}>
            <label htmlFor="date">Valid Thru</label>
            <input
              type="date"
              id="date"
              onChange={(e) => setdateInput(e.target.value)}
            />
          </div>
          <div className={Style.ontop}>
            <label htmlFor="ccs">CCS</label>
            <input
              type="number"
              id="ccs"
              onChange={(e) => setccsInput(e.target.value)}
            />
          </div>
        </div>
        <label htmlFor="type">Card</label>
        <select id="type" onChange={(e) => settypeInput(e.target.value)}>
          <option value="none" selected disabled hidden>
            Select an Option
          </option>
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
