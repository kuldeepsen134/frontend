import React from "react";


import './dashboard.css'
import { Link } from "react-router-dom";
import { AppHeader } from "views/components";
const Dashboard = () => {
  return (
    <>
      <div className=" wrapper" style={{ background: '' }}>
        <div className="left-menu ">
          <div className="left-dashboard">
            <img src="" alt="dd" />
            <Link className="content" to=''>User</Link>
          </div>
          <div className="left-dashboard">
            <img src="" alt="dd" />
            <Link className="content" to=''>User</Link>
          </div>
          <div className="left-dashboard">
            <img src="" alt="dd" />
            <Link className="content" to=''>User</Link>
          </div>
        </div>
        <div className="right-menu">
          <div className="right-header">

            <AppHeader />
          </div>
          <div className="wrapper" style={{ display: 'flex ' }}>
            <img src="" alt="dd" />
            <div className="">
              <p>Good  morning</p>

            </div>
          </div>

        </div>
        {/* <div>03</div> */}
      </div>
    </>
  )
}
export default Dashboard