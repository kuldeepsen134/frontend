import React from 'react'
import { Outlet } from 'react-router-dom'

// import { AppFooter, AppHeader } from 'views/components'

const PrivateLayout = () => {
  return (
    <>
      {/* <AppHeader /> */}
      <Outlet />
      {/* <AppFooter /> */}
    </>
  )
}
export default PrivateLayout
