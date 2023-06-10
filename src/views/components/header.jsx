import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

import * as Yup from 'yup'
import { useFormik } from "formik";

import { useDispatch } from "react-redux";
import { register } from "redux/slice/session/session.slice";
import { path } from "utlis/endpoint";
import { useNavigate } from "react-router-dom";


const AppHeader = () => {

  const dispatch = useDispatch()
  const nevigate = useNavigate()

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)

  };



  const [initialData] = useState({
    title: '',
    description: "",
    member: [],
  })
  const formik = useFormik({
    initialValues: initialData,
    enableReinitialize: true,

    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      description: Yup.string().required('Last Name required'),
      member: Yup.string().required('Atleast two member is required'),
    }),

    onSubmit: (values) => {
      dispatch(register(values)).unwrap().then((data) => {
        data.error === false && nevigate(path.logIn)
      })

    }
  })



  return (
    <>
      <div className="header position-fixed py-4" style={{ background: '#ffffff', }}>

        <div className="avtar" style={{
          display: 'flex',
          justifyContent: 'start',
          marginLeft: '30px'
        }}>
          <img src="https://i.pravatar.cc/50" alt="" style={{ borderRadius: '25px' }} />
          <span style={{ position: 'relative', top: "60px", right: '46px' }}>Demo</span>


          <Button type="" onClick={handleShow} className='left-box-mange-active'>Create Group</Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Create Group</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={formik.handleSubmit} className="space-y-6">
                <div className="">
                  <input className="w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                    type="text"
                    placeholder="Ttitle"
                    name="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                  />
                  {
                    formik.errors.title && formik.touched.title ?
                      <span className="text-red-500">{formik.errors.title}</span> : ''
                  }
                </div>
                <div className="">
                  <input className="w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                    type="text"
                    placeholder="Description..."
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                  />
                  {
                    formik.errors.description && formik.touched.description ?
                      <span className="text-red-500">{formik.errors.description}</span> : ''
                  }
                </div>
                <div className="">
                  <input className="w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                    type="text"
                    placeholder="Members"
                    name="memnber"
                    value={formik.values.member}
                    onChange={formik.handleChange}
                  />
                  {
                    formik.errors.member && formik.touched.member ?
                      <span className="text-red-500">{formik.errors.member}</span> : ''
                  }
                </div>
                <div>
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Submit
              </Button>
            </Modal.Footer>
          </Modal>

        </div>
      </div>

    </>
  )
}
export default AppHeader