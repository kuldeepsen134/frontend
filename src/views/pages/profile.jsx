import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, } from "react-redux";
import { me, userUpdate } from "redux/slice/session/user.slice";

const Profile = () => {

  const dispatch = useDispatch()

  // const { userlistData } = useSelector((state) => state.user)

  const [getUser, setUser] = useState({})


  const initialData = {
    gender: '',
    city: '',
    State: '',
    alternate_contact: '',
    country:'',
    dob:'',
    zip:'',
    employed:'',
    yearly_salary:'',
    graduation:''
  }


  const formik = useFormik({
    initialValues: getUser,
    enableReinitialize: true,
    onSubmit: (values) => {
      dispatch(userUpdate(values,)).unwrap().then(() => {
      })
    }
  })
  useEffect(() => {
    setUser(initialData)
    dispatch(me()).unwrap().then((result) => {
      setUser(result && result?.data)
    })
  }, [])


  return (<>
    <div className="container mx-auto " style={{ marginTop: "130px" }}>
      <h1 className="text-4xl font-bold ">Profile</h1>
      <div className="max-w-md mx-auto bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold ">User Profile</h2>
        <form className="py-4	" onSubmit={formik.handleSubmit}>

          <div className="mb-2">
            <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">
              Gender
            </label>
            <input
              id="gender"
              name="gender"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
              placeholder="Enter your name"
              value={formik.values.gender}
              onChange={formik.handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="city" className="block text-gray-700 font-bold mb-2">
              City
            </label>
            <input
              id="city"
              name="city"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
              placeholder="Enter your city"
              value={formik.values.city}
              onChange={formik.handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="State" className="block text-gray-700 font-bold mb-2">
              State
            </label>
            <input
              id="State"
              type="State"
              name="State"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
              placeholder="Enter your State"
              value={formik.values.State}
              onChange={formik.handleChange}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="alternate_contact" className="block text-gray-700 font-bold mb-2">
              Alternate Contact
            </label>

            <input
              id="alternate_contact"
              name="alternate_contact"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
              placeholder="alternate_Contact"
              value={formik.values.alternate_contact}
              onChange={formik.handleChange}
            />
          </div>


          <div className="mb-6">
            <label htmlFor="country" className="block text-gray-700 font-bold mb-2">
              country
            </label>

            <input
              id="country"
              name="country"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
              placeholder="county"
              value={formik.values.country}
              onChange={formik.handleChange}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="zip" className="block text-gray-700 font-bold mb-2">
              Zip
            </label>

            <input
              id="zip"
              name="zip"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
              placeholder="zip"
              value={formik.values.zip}
              onChange={formik.handleChange}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="dob" className="block text-gray-700 font-bold mb-2">
              Date of birth
            </label>

            <input
              id="dob"
              name="dob"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
              placeholder="dob"
              value={formik.values.dob}
              onChange={formik.handleChange}
            />
          </div>


          <div className="mb-6">
            <label htmlFor="yearly_salary" className="block text-gray-700 font-bold mb-2">
              Yearly salary
            </label>
            <input
              id="yearly_salary"
              name="yearly_salary"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
              placeholder="yearly_salary"
              value={formik.values.yearly_salary}
              onChange={formik.handleChange}
            />
          </div>


          <div className="mb-6">
            <label htmlFor="graduation" className="block text-gray-700 font-bold mb-2">
              Graduation
            </label>
            <input
              id="graduation"
              name="graduation"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
              placeholder="graduation"
              value={formik.values.graduation}
              onChange={formik.handleChange}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="employed" className="block text-gray-700 font-bold mb-2">
              Employed
            </label>
            <input
              id="employed"
              name="employed"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
              placeholder="employed"
              value={formik.values.employed}
              onChange={formik.handleChange}
            />
          </div>





          <button
            type="submit"
            className="bg-purple-500 text-white py-2 px-2 rounded hover:bg-purple-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </>
  )
}
export default Profile