import styles  from './card.module.css'
import {FaWifi} from 'react-icons/fa'
// import {FcSimCardChip} from 'react-icons/all'
import User from './user'



const Card =({number,typ})=>{
    return(
        <div className= {styles.cardlayout}>
          <div className={styles.cardOver}><h3>Nordea</h3><h2>{typ}</h2></div>
          <div className={styles.cardMiddle}><div className={styles.icons}>
            {/* <FcSimCardChip size={50}/> */}
            <FaWifi size={50}/></div> <h3>{number}</h3><p>Valid Thru 03/23</p></div>
          <div className={styles.cardUnder}><User/></div>
        </div>
      )
}
export default Card