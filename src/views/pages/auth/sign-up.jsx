import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import * as Yup from 'yup'
import { useFormik } from "formik";

import { path } from "utlis/endpoint";
import { svgEyes, svgGoogle } from "utlis/svg";

import { register } from "redux/slice/session/session.slice";
// import instance from "redux/axios/axios";
// import { googleSigIn } from "redux/slice/session/user.slice";

const SignUp = () => {
  const nevigate = useNavigate()

  const dispatch = useDispatch()

  const [show, setShow] = useState(false)

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


  // const handleClick = (() => {
  //   instance.get('/google').then(data=>{
  //     console.log('ddddddd',data);
  //   })

  // })


  const googleAuth = () => {
		window.open(
			// eslint-disable-next-line no-undef
			`${process.env.REACT_APP_BASE_ENDPOINT}/google`,
			"_self"
		);
	};

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

          <div className="p-4 bg-white mx-auto rounded-3xl w-96 ">
            <div className="mb-7">
              <h3 className="font-semibold text-2xl text-gray-800">Sign Up </h3>
              <p className="text-gray-400">You have an account? <Link to="/login"
                className="text-sm text-purple-700 hover:text-purple-700">Login</Link></p>
            </div>


            {/* <div className=""> */}
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
                 Register
                </button>
              </div>

              <div className="flex items-center justify-center space-x-2 my-3">
                <span className="h-px w-16 bg-gray-100"></span>
                <span className="text-gray-300 font-normal">or</span>
                <span className="h-px w-16 bg-gray-100"></span>
              </div>

            </form>
            <div className="flex justify-center gap-5 w-full ">
              <button
                type="button"
                onClick={googleAuth}
                className="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-gray-900 hover:bg-gray-900 text-sm text-gray-500 p-3  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-500">
                {svgGoogle()}
                <span>Google</span>
              </button>
            </div>

            <div className="mt-7 text-center text-gray-300 text-xs">
              <span>
                Copyright © {new Date().getFullYear()}
              </span>
              {/* </div> */}
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
export default SignUp