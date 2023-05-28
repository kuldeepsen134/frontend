import React from "react";
import { useState } from "react";
import { Button, Col, Container, Modal, Row, Table } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const TableList = (userData) => {
  const [show, setShow] = useState(false);
  console.log(userData);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)

  };
  return (
    <>
      <Container>
        <Row>
          <h5 className="my-2 fw-bold mx-2">Recent activity</h5>
          <Col>
            <Table style={{ background: '#fff', borderRadius: '10px' }} responsive>
              <thead style={{ background: 'aliceblue' }}>
                <tr>
                  {/* <th>#</th> */}
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Create At</th>
                  <th>Update At</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>

                {userData?.userListData?.map((item, i) => {
                    console.log(item);
                    return (
                      <tr key={i}>
                        {/* <td>{item._id}</td> */}
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.email}</td>
                        <td>{item.createdAt}</td>
                        <td>{item.updatedAt}</td>


                        <td className="text-center">
                          <Link to='/' className="d-inline-block mx-2">
                            <AiFillEye />
                          </Link>
                          <BsFillTrashFill onClick={handleShow} className="d-inline-block text-danger mx-2" >

                          </BsFillTrashFill>

                        </td>
                      </tr>
                    )
                  })}
              </tbody>
            </Table>

          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default TableList