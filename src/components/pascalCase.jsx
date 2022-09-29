import styles from "./activeCard.module.css";
import { FaWifi } from "react-icons/fa";
import { FcSimCardChip } from "react-icons/fc";
import User from "./user";

const activeCard = ({ number, type, date, ccv, activeCard }) => {
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
      </div>
    </div>
  );
};
export default activeCard;
