import { useSelector } from "react-redux";


const SelectUser =()=>{
    const {title, first,last}=useSelector((state)=>{
        return state.userSlice.user})

    return(
        <div><p>{title} {first} {last}</p></div>
    )

}
export default SelectUser