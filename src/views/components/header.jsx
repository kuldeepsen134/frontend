import React from "react";
import { Button, } from "react-bootstrap";

const AppHeader = () => {
  return (
    <>
      <div className="py-4" style={{ background: '#ffffff', }}>

        <div className="avtar" style={{
          display: 'flex',
          justifyContent: 'end',
        }}>
          <img src="https://i.pravatar.cc/50" alt="" style={{ borderRadius: '25px' }} />
          <span style={{position:'relative', top:"60px" ,right:'46px'}}>Demo</span>
          <Button type="" className='left-box-mange-active'>Create Group</Button>
          <Button type="" className='createGroup left-box-mange-active' style={{ marginLeft: "-9px" }} >Create Campian</Button>
        </div>
      </div>

    </>
  )
}
export default AppHeader