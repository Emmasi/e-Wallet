import { useSelector } from "react-redux";
import { useState } from "react";

const SelectUser = () => {
  const { title, first, last } = useSelector((state) => {
    return state.userSlice.user;
  });
  return (
    <div>
      <p style={{ textTransform: "uppercase" }}>
        {title} {first} {last}
      </p>
    </div>
  );
};
export default SelectUser;
