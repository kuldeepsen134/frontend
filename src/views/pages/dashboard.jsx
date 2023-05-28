import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

import './dashboard.css'
// import { userList } from "redux/slice/session/user.slice";
import { OverView, TableList } from "views/components";

const Dashboard = () => {
  // const dispatch = useDispatch()
  // const { userListData } = useSelector((state) => state.user)

  // console.log('userListData', userListData);
  useEffect(() => {
    // dispatch(userList()) 
  }, [])

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
      <TableList />
    </>
  )
}
export default Dashboard