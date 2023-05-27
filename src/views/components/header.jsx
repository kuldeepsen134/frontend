import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "redux/slice/session/session.slice";

const AppHeader = () => {
  const disptch = useDispatch()
  return (
    <>
      <div className="wapper">
        <div className="inside-warraper">
          <input type="text" placeholder="dnjknjn" />
          <img src="" alt="bell" />
          <img src="" alt="img" />

          <button onClick={()=>disptch(logOut())}>Logout</button>
          <hr className="" />

        </div>
      </div>
    </>
  )
}
export default AppHeader