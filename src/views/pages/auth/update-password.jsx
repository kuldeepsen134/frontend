import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation,  } from "react-router-dom";

import * as Yup from 'yup'
import { useFormik } from "formik";

import { svgEyes, svgGoogle } from "utlis/svg";
import { resetPassword } from "redux/slice/session/session.slice";

const UpdatePassword = () => {
  const location = useLocation()
  
  const query = new URLSearchParams(location.search)
  
  const token = query.get('token')
  
  const [show, setShow] = useState(false)

  const [initialData] = useState({
    new_password: '',
    confirm_password: '',
    token: ''
  })

  const dispatch = useDispatch()


  const formik = useFormik({
    initialValues: initialData,
    enableReinitialize: true,

    validationSchema: Yup.object({
      new_password: Yup.string().required('Password is reqired')
        .matches(
          /^(?=.*)(?=.{6,})/,
          'Password length min 6'
        ),
      confirm_password: Yup.string().required('Password is reqired')
        .oneOf([Yup.ref('new_password'), null], 'Please fill correct password')
    }),


    onSubmit: (values) => {
      console.log('values', values);
      values.token = token
      dispatch(resetPassword(values)).unwrap().then((res) => {
        console.log('res',res);
        // !res.error && nevigate(path.logIn)
      })
    }

  })
  return (
    <>
      <div
        className="bg-purple-900 absolute top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 bottom-0 leading-5 h-full w-full overflow-hidden">

      </div>
      <div
        className="relative   min-h-screen  sm:flex sm:flex-row  justify-center bg-transparent rounded-3xl shadow-xl">

        <div className="flex-col flex  self-center lg:px-14 sm:max-w-4xl xl:max-w-md  z-10">
          <div className="self-start hidden lg:flex flex-col  text-gray-300">

            <h1 className="my-3 font-semibold text-4xl">Welcome back</h1>
            <p className="pr-3 text-sm opacity-75">Lorem ipsum is placeholder text commonly used in the graphic, print,
              and publishing industries for previewing layouts and visual mockups</p>
          </div>
        </div>

        <div className="flex justify-center self-center  z-10">

          <div className="p-12 bg-white mx-auto rounded-3xl w-96 ">
            <div className="mb-7">
              <h3 className="font-semibold text-2xl text-gray-800">Recover Password? </h3>
              <p className="text-gray-400">Don thave an account? <Link to="/login"
                className="text-sm text-purple-700 hover:text-purple-700">Login</Link></p>
            </div>

            <form onSubmit={formik.handleSubmit}>

              <div className="space-y-6">
                <div className="relative">
                  <input
                    placeholder="Password"
                    name="new_password"
                    type={show ? "text" : 'password'}
                    onChange={formik.handleChange}
                    value={formik.values.new_password}
                    className="text-sm  px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-purple-400"
                  />
                  <div className="flex items-center absolute inset-y-0 right-0 mr-3  text-sm leading-5">
                  <p onClick={() => setShow(show ? false : true)}>
                      {svgEyes()}
                    </p>
                  </div>
                  {
                    formik.errors.new_password && formik.touched.new_password ?
                      <span className="text-red-500">{formik.errors.new_password}</span> : ''
                  }
                </div>

                <div className="relative"
                //  x-data="{ show: true }"
                >
                  <input
                    name="confirm_password"
                    placeholder="Confirm Password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.confirm_password}
                    className="text-sm  px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-purple-400"
                  />
                  {
                    formik.errors.confirm_password && formik.touched.confirm_password ?
                      <span className="text-red-500">{formik.errors.confirm_password}</span> : ''
                  }
                  <div className="flex items-center absolute inset-y-0 right-0 mr-3  text-sm leading-5">
                    {svgEyes()}
                  </div>
                </div>

                {/* <div className="flex items-center justify-between">
                  <div className="text-sm ml-auto">
                    <Link to="/account-recovery/initiate" className="text-purple-700 hover:text-purple-600">
                      Forgot your password?
                    </Link>
                  </div>
                </div> */}

                <div>
                  <button type="submit" className="w-full flex justify-center bg-purple-800  hover:bg-purple-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500">
                    Sign in
                  </button>
                </div>

                <div className="flex items-center justify-center space-x-2 my-5">
                  <span className="h-px w-16 bg-gray-100"></span>
                  <span className="text-gray-300 font-normal">or</span>
                  <span className="h-px w-16 bg-gray-100"></span>
                </div>

                <div className="flex justify-center gap-5 w-full ">
                  <button type="submit" className="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-gray-900 hover:bg-gray-900 text-sm text-gray-500 p-3  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-500">
                    {svgGoogle()}
                    <span>Google</span>
                  </button>
                </div>

                <div className="mt-7 text-center text-gray-300 text-xs">
                  <span>
                    Copyright © {new Date().getFullYear()}
                  </span>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}
export default UpdatePassword