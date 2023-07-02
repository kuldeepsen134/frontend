import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, } from "react-redux";
import { me, userUpdate } from "redux/slice/session/user.slice";

const SettingPage = () => {

  const dispatch = useDispatch()

  // const { userlistData } = useSelector((state) => state.user)

  const [getUser, setUser] = useState({})

  // console.log('vvvvvvvvvvvvvv',getUser.data.first_name);

  const initialData = {
    first_name: getUser?.first_name,
    last_name: getUser?.last_name,
    password: '',
    contact: getUser?.contact
  }


  const formik = useFormik({
    initialValues: getUser,
    enableReinitialize: true,
    onSubmit: (values) => {
      dispatch(userUpdate(values, )).unwrap().then(() => {
      })
    }
  })
  useEffect(() => {
    setUser(initialData)
    dispatch(me()).unwrap().then((result) => {
      setUser(result && result?.data)
    })
  }, [])



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
            className="text-white py-2 px-2 rounded bg-emerald-400 hover:bg-emerald-400 transition duration-300"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
export default SettingPage