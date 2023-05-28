import React, { useEffect, useState } from "react";

import './dashboard.css'
import { OverView, TableList } from "views/components";
import { useDispatch, useSelector } from "react-redux";
import { userList } from "redux/slice/session/user.slice";

const Dashboard = () => {
  const dispatch = useDispatch()
  const { userListData } = useSelector((state) => state.user)
  const [userData,setUserData]= useState({})


  useEffect(() => {
    dispatch(userList()).unwrap().then((res)=>{
      setUserData(res)
    })
  }, [userListData])

  const data = [{
    name: 'Account',
    amount: '1111111'
  },
  {
    name: 'Account',
    amount: '1111111'
  },
  {
    name: 'Account',
    amount: '1111111'
  }]

  return (
    <>
      <OverView data={data} />
      <TableList userListData={userData.data} />
    </>
  )
}
export default Dashboard