import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { me, userUpdate } from "redux/slice/session/user.slice";

const SettingPage = () => {

  const dispatch = useDispatch()

  const { userlistData } = useSelector((state) => state.user)


  const [initialData] = useState({
    first_name: userlistData && userlistData?.data?.first_name,
    last_name: userlistData && userlistData?.data?.last_name,
    password: '',
    contact: userlistData && userlistData?.data?.contact
  })

  useEffect(() => {
    dispatch(me()).unwrap().then(() => {
    })
  }, [])


  const formik = useFormik({
    initialValues: initialData,
    enableReinitialize: true,
    onSubmit: (values) => {
      dispatch(userUpdate(values)).unwrap().then(() => {

      })
    }
  })

  return (
    <div className="container mx-auto " style={{ marginTop: "130px" }}>
      <h1 className="text-4xl font-bold ">Settings</h1>
      <div className="max-w-md mx-auto bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold ">Account Settings</h2>
        <form className="py-4	" onSubmit={formik.handleSubmit}>

          <div className="mb-2">
            <label htmlFor="first_name" className="block text-gray-700 font-bold mb-2">
              First name
            </label>
            <input
              id="first_name"
              name="first_name"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
              placeholder="Enter your name"
              value={formik.values.first_name}
              onChange={formik.handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="last_name" className="block text-gray-700 font-bold mb-2">
              Last name
            </label>
            <input
              id="last_name"
              name="last_name"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
              placeholder="Enter your last name"
              value={formik.values.last_name}
              onChange={formik.handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
              placeholder="Enter your password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="contact" className="block text-gray-700 font-bold mb-2">
              Contact
            </label>

            <input
              id="contact"
              name="contact"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
              placeholder="Contact"
              value={formik.values.contact}
              onChange={formik.handleChange}
            />

          </div>

          <button
            type="submit"
            className="bg-purple-500 text-white py-2 px-2 rounded hover:bg-purple-700 transition duration-300"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
export default SettingPage