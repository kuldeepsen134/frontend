import React from "react";
import { useState } from "react";
import { Button, Col, Container, Modal, Row, Table } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";


import * as Yup from 'yup'
import { useFormik } from "formik";

import { svgEyes } from "utlis/svg";
import { useDispatch } from "react-redux";
import { register } from "redux/slice/session/session.slice";
import { path } from "utlis/endpoint";

const TableList = (userData) => {
  const [show, setShow] = useState(false);
  console.log(userData);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)

  };



  const dispatch = useDispatch()
  const nevigate = useNavigate()




  const [initialData] = useState({
    first_name: '',
    last_name: "",
    email: '',
    password: ''
  })
  const formik = useFormik({
    initialValues: initialData,
    enableReinitialize: true,

    validationSchema: Yup.object({
      first_name: Yup.string().required('First Name required'),
      last_name: Yup.string().required('Last Name required'),
      email: Yup.string().email('string.emailFormat').required('Email required'),
      password: Yup.string().required('Password required').matches(
        /^(?=.*)(?=.{6,})/,
        'string.passwordLength'
      ),
    }),

    onSubmit: (values) => {
      dispatch(register(values)).unwrap().then((data) => {
        data.error === false && nevigate(path.logIn)
      })
   
    }
  })




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
                          <Link to='/app/dashboard' className="d-inline-block mx-2">
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
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={formik.handleSubmit} className="space-y-6">
              <div className="">
                <input className="w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                  type="text"
                  placeholder="First Name"
                  name="first_name"
                  value={formik.values.first_name}
                  onChange={formik.handleChange}
                />
                {
                  formik.errors.first_name && formik.touched.first_name ?
                    <span className="text-red-500">{formik.errors.first_name}</span> : ''
                }
              </div>
              <div className="">
                <input className="w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                  type="text"
                  placeholder="Last Name"
                  name="last_name"
                  value={formik.values.last_name}
                  onChange={formik.handleChange}
                />
                {
                  formik.errors.last_name && formik.touched.last_name ?
                    <span className="text-red-500">{formik.errors.last_name}</span> : ''
                }
              </div>
              <div className="">
                <input className="w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {
                  formik.errors.email && formik.touched.email ?
                    <span className="text-red-500">{formik.errors.email}</span> : ''
                }
              </div>

              <div className="relative"
              //  x-data="{ show: true }"
              >
                <input
                  name="password"
                  placeholder="Password"
                  type={show ? "text" : 'password'}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  className="text-sm px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-purple-400"
                />
                <div className="flex items-center absolute inset-y-0 right-0 mr-3  text-sm leading-5">
                  <p onClick={() => setShow(show ? false : true)}>
                    {svgEyes()}
                  </p>
                </div>
                {
                  formik.errors.password && formik.touched.password ?
                    <span className="text-red-500">{formik.errors.password}</span> : ''
                }
              </div>
              <div>
              </div>
            </form>


        </Modal.Body>
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