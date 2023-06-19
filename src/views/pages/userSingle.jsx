import React, { useEffect, useState,  } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { joiFollower } from 'redux/slice/session/follower.slice'
import { userListById } from 'redux/slice/session/user.slice'

const userSingle = () => {
  const dispatch = useDispatch()
  const params = useParams()

  const [follow, setFollow] = useState('')
  const { userlistData } = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(userListById(`${params.id}`))
  }, [])



  const member_IDs = []
  member_IDs.push(params.id)

  const handleSubmit = () => {
    dispatch(joiFollower({ member_IDs })).then((data) => {
      setFollow(data?.payload?.admin_Id)
    })
  }

  return (
    <div className="min-h-screen bg-gray-100 " style={{ marginTop: "150px" }}>
      <div className="bg-white shadow mt-5">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold">User Profile</div>

            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              onClick={handleSubmit}
            >
             {follow ? 'Followed':'Join'} 
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center">
                <img
                  src="https://i.pravatar.cc/50"
                  alt=""
                  style={{ borderRadius: "25px" }}
                />
                <div>
                  <div className="font-bold text-lg ml-2">{userlistData?.data?.first_name + ' ' + userlistData?.data?.last_name}</div>
                  {/* <div className="text-gray-600">@johndoe</div> */}
                </div>
              </div>
              <div className="mt-4">

                <div className="text-gray-600"> <p className='font-bold'>User ID :  {userlistData?.data?._id}</p></div>

                <div className="text-gray-600">Bio:</div>

                <div className="mt-2">
                  Software Engineer | OpenAI | Passionate about AI and NLP
                </div>
              </div>
              <div className="mt-4">
                <div className="text-gray-600">Location:</div>
                <div className="mt-2">San Francisco, CA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default userSingle