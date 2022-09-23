import styles from "./card.module.css";
import { FaWifi } from "react-icons/fa";
// import {FcSimCardChip} from 'react-icons/all'
import User from "./user";
import { useDispatch, useSelector } from "react-redux";
import { deleteCard } from "../redux/redux/cardSlice";

const Card = ({ number, type, date, ccs, id }) => {
  const dispatch = useDispatch();
  const deleteBtn = (id) => {
    console.log(id);
    dispatch(deleteCard(id));
  };
  //   let styledCardNumber = cardNumber.split('').map((number, index) => {
  //     if (index === 3 || index === 7 || index === 11) {
  //         return number + ' '
  //     } else {
  //         return number
  //     }
  // }).join('')

  return (
    <div>
      <div className={styles.cardlayout}>
        <div className={styles.cardOver}>
          <h3>Nordea</h3>
          <h2>{type}</h2>
        </div>
        <div className={styles.cardMiddle}>
          <div className={styles.icons}>
            {/* <FcSimCardChip size={50}/> */}
            <FaWifi size={50} />
          </div>
          <h3>{number}</h3>
          <p>Valid Thru{date}</p>
        </div>
        <div className={styles.cardUnder}>
          <User />
        </div>
      </div>

      <button className={styles.deleteBtn} onClick={() => deleteBtn(id)}>Delete</button>
    </div>
  );
};
export default Card;
