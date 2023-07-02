import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userList, userTrush, } from "redux/slice/session/user.slice";

const AdminDashboard = () => {

  const [getUser, setUser] = useState([])
  const { userData } = useSelector((state) => state.user)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  useEffect(() => {

    if (userData?.data?.role === "user") {
      navigate('/home')
    }

    dispatch(userList()).unwrap().then((users) => {
      setUser(users?.data)
    })
  }, [userData])



  return (
    <>
      <div className="relative mt-36 ml-4">
        <table className="table">
          <thead>
            <tr className="">
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>contact</th>
              <th>Action</th>
            </tr>
          </thead>
          {getUser.map((user) => {
            return (<>
              <tbody>
                <tr className="">
                  <td>{user?.first_name}</td>
                  <td>{user?.last_name}</td>
                  <td>{user?.email}</td>
                  <td>{user?.contact}</td>
                  {/* <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm mt-2 py-1 px-1 m-1 text-center mr-2 mb-2">Edit</button> */}
                  <button type="button"
                    onClick={() => dispatch(userTrush((user?._id))).then(() => userList()).unwrap().then((user) => {
                      setUser(user?.data)
                    })}
                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-1 mt-2 py-1  m-1 text-center">Delete</button>
                </tr>
              </tbody>
            </>)
          })}

        </table>
      </div>
    </>
  )
}
export default AdminDashboard