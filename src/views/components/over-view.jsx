
import React from "react";
import { Link } from "react-router-dom";

// import { AiFillWindows } from "react-icons/ai";
import { Card, Col, Container, Row } from "react-bootstrap";

const OverView = (data) => {
  
  return (
    <>
      <Container className="my-5">
        <Row >
          <Col className="my-5 " >
            <h5 className="my-4 fw-bold mt-4">Over All</h5>
            <div className="d-flex juctify-content-start">
              {data?.data?.map((item, i) => {
                return (
                  <Card key={i} className="w-100 mx-1" responsive>
                    <Card.Body>
                      <Row>
                        {/* <Col xs='2'>
                          <AiFillWindows className="over-view-svg" />
                        </Col> */}
                        <Col>
                          <p className="fw-lighter text-content-over">{item?.name}</p>
                          <p className="text-content-over-amount">{item.amount}</p>
                          <Link to={item.path || '#'} className="link-size" style={{ color: '#06505d' }}>View all</Link>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                )
              })}
            </div>
          </Col>
        </Row >
      </Container >
    </>
  )
}
export default OverView