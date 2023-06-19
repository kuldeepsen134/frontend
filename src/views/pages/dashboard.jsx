import React, { useEffect, useState } from "react";

import './dashboard.css'
import { OverView, TableList } from "views/components";
import { useDispatch, useSelector } from "react-redux";
import { userList } from "redux/slice/session/user.slice";
import { getFollowerList } from "redux/slice/session/follower.slice";

const Dashboard = () => {
  const dispatch = useDispatch()
  const { userListData } = useSelector((state) => state.user)
  const [userData,setUserData]= useState({})

  const [followerData,setFollowerData]= useState({})

  useEffect(() => {
    dispatch(userList()).unwrap().then((res)=>{
      setUserData(res)
    })

    dispatch(getFollowerList()).unwrap().then((res)=>{
      setFollowerData(res)
    })
  }, [userListData])


  const data = [{
    name: 'Followers',
    amount: followerData?.totalCount
  },
  {
    name: 'Pending',
    amount: '110'
  },
  {
    name: 'Total',
    amount: '50'
  }]

  return (
    <>
      <OverView data={data} />
      <TableList userListData={userData.data} />
    </>
  )
}
export default Dashboard