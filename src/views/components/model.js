import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "redux/slice/session/session.slice";
import { path } from "utlis/endpoint";
import {useNavigate } from "react-router-dom";


import * as Yup from 'yup'
import { useFormik } from "formik";

import { Button, Modal } from "react-bootstrap";
import { svgEyes } from "utlis/svg";

const Promt = () => {
  const nevigate = useNavigate()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch()


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
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!


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
                <button type="submit" className="w-full flex justify-center bg-purple-800  hover:bg-purple-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500">
                  Sign in
                </button>
              </div>

              <div className="flex items-center justify-center space-x-2 my-3">
                <span className="h-px w-16 bg-gray-100"></span>
                <span className="text-gray-300 font-normal">or</span>
                <span className="h-px w-16 bg-gray-100"></span>
              </div>

            </form>




        </Modal.Body>
        <Modal.Footer>
          <Button className="closeBtn" variant="secondary"  onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  className="saveChanges" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default Promt