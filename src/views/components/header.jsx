import React, { useEffect, useState } from "react";
import { useDispatch, } from "react-redux";
import { me } from "redux/slice/session/user.slice";


const AppHeader = () => {
  const [user, setUset] = useState({})
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(me()).unwrap().then((data) => {
      setUset(data && data?.data)
    })
  }, [])

  return (
    <>
      <div className="header position-fixed py-4" style={{ background: '#ffffff', }}>
        <div className="avtar" style={{
          display: 'flex',
          justifyContent: 'start',
          marginLeft: '30px'
        }}>
          <img src="https://i.pravatar.cc/50" alt="" style={{ borderRadius: '25px' }} />
          <span style={{ position: 'relative', top: "50px", right: '46px' }}>{user?.first_name}</span>

        </div>
        <span style={{ position: 'absolute', top: "15px", right: '20px' }}>{user?.email}</span>
        {/* <span style={{ position: 'absolute', top: "35px", right: '20px' }}>Contact:- {userlistData && userlistData?.data?.contact}</span> */}

      </div>

    </>
  )
}
export default AppHeader