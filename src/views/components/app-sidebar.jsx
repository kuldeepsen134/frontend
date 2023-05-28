import React from "react";
import { Link, useLocation, } from "react-router-dom";

import { BsChatRightText, BsClockHistory, BsFillHouseDoorFill, BsGear, BsPatchQuestionFill, BsShieldCheck } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { logOut } from "redux/slice/session/session.slice";

const AppSidebar = () => {
  const params = useLocation()

  const dispatch = useDispatch()

  const menu = [{
    name: 'Home',
    svg: <BsFillHouseDoorFill />,
    path: '/app/dashboard'
  }, {
    name: 'History',
    svg: <BsClockHistory />,
    path: '/app/history'

  }, {
    name: 'Blance',
    svg: <BsChatRightText />,
    path: '#'

  },
  ]
  const menuBottom = [{
    name: 'Setting',
    svg: <BsGear />,
    path: '/app/setting'
  }, {
    name: 'Help',
    svg: <BsPatchQuestionFill />,
    path: '/app/help'

  }, {
    name: 'Privacy',
    svg: <BsShieldCheck />,
    path: '/app/privacy'

  },
  ]



  return (
    <>

      <div className="left-image">
        <div className="image-box my-3">
          <h2>Start Cli</h2>
        </div>

        {
          menu.map((item, i) => {
            return (
              <div key={i} className="left-menu">
                <div className={`d-flex justify-content-start ${item?.path === params.pathname ? 'left-box-mange-active' : 'left-box-mange'}`}>
                  <span className="mt-1">
                    {item.svg}
                  </span>
                  <Link to={item.path} className="mx-3 text-white "> {item.name}</Link>
                </div>
              </div>
            )
          })
        }
        <hr className="text-dark my-3 border-dark" />
        <div className="left-menu">
          <div className="logout">
            {
              menuBottom.map((item, i) => {
                return (
                  <div key={i} className="left-menu">
                    <div className={`d-flex justify-content-start ${item?.path === params.pathname ? 'left-box-mange-active mt-1' : 'left-box-mange mt-1'}`}>
                      <span className="mt-1">
                        {item.svg}
                      </span>
                      <Link to={item.path} className="mx-3 text-white "> {item.name}</Link>

                    </div>
                  </div>
                )
              })
            }

            <div className={`d-flex justify-content-start left-box-mange-logout`}>
              <FiLogOut className="mt-1" />
              <a href="/login" className="mx-3" onClick={() => dispatch(logOut())}>Logout</a>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}
export default AppSidebar