import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import { AppHeader, AppSidebar } from 'views/components'

// import { AppFooter, AppHeader } from 'views/components'

const PrivateLayout = () => {
  return (
    <>
      {/* <Container fluid> */}
      <Row>
        <Col xs={2} >
          <AppSidebar />
        </Col>
        <Col style={{ background: '#e9ecef' }}>
          <AppHeader />
          <Outlet />
        </Col>
      </Row>
      {/* </Container> */}
      {/* <AppFooter /> */}
    </>
  )
}
export default PrivateLayout
