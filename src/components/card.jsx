import styles from "./card.module.css";
import { FaWifi } from "react-icons/fa";
import { FcSimCardChip } from "react-icons/fc";
import User from "./user";
import { useDispatch } from "react-redux";
import { deleteCard, activeCard } from "../redux/redux/cardSlice";

const Card = ({ number, type, date, ccv, id }) => {
  const dispatch = useDispatch();
  const deleteBtn = (id) => {
    dispatch(deleteCard(id));
  };

  const makeActive = (id) => {
    dispatch(activeCard(id));
  };
  const splitCardNum = String(number)
    .split("")
    .map((num, index) => {
      if (index === 3 || index === 7 || index === 11) {
        return num + " ";
      } else {
        return num;
      }
    })
    .join("");

  return (
    <div>
      <div className={styles.cardlayout}>
        <button className={styles.noStyle} onClick={() => makeActive(id)}>
          <span className={styles.hovertext} data-hover="Active">
            <div className={styles.cardOver}>
              <FaWifi size={30} />
              <h2>{type}</h2>
            </div>
            <div className={styles.cardMiddle}>
              <FcSimCardChip size={50} />
              <h3 className={styles.grow}>{splitCardNum}</h3>
            </div>
            <div className={styles.cardMiddle}>
              <p>Valid Thru{date}</p>
              <p>{ccv}</p>
            </div>
            <div className={styles.cardUnder}>
              <p className={styles.minitext}>Användarens namn</p>
              <User />
            </div>
          </span>
        </button>
      </div>
      <button className={styles.deleteBtn} onClick={() => deleteBtn(id)}>
        Delete
      </button>
    </div>
  );
};
export default Card;
