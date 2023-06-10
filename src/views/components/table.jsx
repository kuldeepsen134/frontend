import React, { useEffect } from "react";
import { useState } from "react";
import { useFormik } from "formik";
import { FiCalendar, FiImage, FiMessageSquare, FiSmile } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { createPost, postList } from "redux/slice/session/post.slice";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { createComment } from "redux/slice/session/comment.slice";
import { AiOutlineSend } from "react-icons/ai";

const TableList = () => {

  const dispatch = useDispatch()
  const nevigate = useNavigate()
  const { userlistData } = useSelector((state) => state.post)



  const [visibility, setVisibility] = useState({});

  const showHideButton = (id) => {

    console.log('id>>>>>>>', id);


    setVisibility((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };


  const [files, setFiles] = useState([])

  console.log('visibility,', visibility);


  const onFileUpload = (event) => {
    setFiles(event.target.files)
  }

  const [initialData] = useState({
    message: "",
    files: [],
  });

  const formik = useFormik({
    initialValues: initialData,


    onSubmit: (values) => {


      const formData = new FormData()

      formData.append('message', values.message);

      for (let i = 0; i < files.length; i++) {
        formData.append(`file[${i}]`, files[0]);
      }

      dispatch(createPost(formData)).unwrap().then((data) => {
        console.log('data', data);
        dispatch(postList('posts'))
      })
    }
  });


  //***********Comment on post formik */

  const [initialComment] = useState({
    message: '',
    post_id: '',
  });

  const formik1 = useFormik({
    initialValues: initialComment,

    onSubmit: (values) => {

      dispatch(createPost(values)).unwrap().then((data) => {
        console.log('data', data);
        dispatch(createComment('comments'))
      })
    }
  });




  useEffect(() => {
    dispatch(postList('posts'))
  }, [])

  return (
    <>
      <div className="container mx-auto ">
        <form className="py-4	" onSubmit={formik.handleSubmit}>
          <div className="flex flex-col bg-white w-4/5	 border border-gray-200 rounded p-4">
            <textarea
              className="w-full resize-none border-none focus:outline-none focus:ring-1 focus:ring-blue-500 p-2 rounded"
              rows={3}
              placeholder="What's happening?"
              name="message"
              onChange={formik.handleChange}
              value={formik.values.message}
            >
            </textarea>

            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center space-x-2">

                <label htmlFor="image-upload" className="cursor-pointer">
                  <FiImage className="text-blue-500 w-5 h-5" />
                </label>

                <input
                  id="image-upload"
                  type="file"
                  name="files"
                  className="hidden"
                  multiple
                  value={formik.values.files}
                  onChange={onFileUpload}
                />
                <FiSmile className="text-blue-500 w-5 h-5" />
                <FiCalendar className="text-blue-500 w-5 h-5" />
              </div>

              <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                Post
              </button>
            </div>
          </div>
        </form>

        {userlistData && userlistData.data?.map((item) => {
          return (
            <>

              <div className="bg-white w-4/5	 p-4 mb-4 shadow-md rounded">
                <div className="flex items-start space-x-4">
                  <img
                    src="https://i.pravatar.cc/50"
                    alt=""
                    style={{ borderRadius: "25px" }}
                  />

                  <div className="flex-grow">
                    <div className="flex items-center">
                      {/* {console.log(item.creater_Id)} */}
                      <span className="font-bold text-lg" onClick={() => nevigate(`/app/users-single/${item.creater_Id}`)}  >{item.userName}</span>
                      {/* <span className="text-gray-500 ml-2">@johndoe</span> */}
                      <span className="text-gray-500 mx-2">•</span>
                      <span className="text-gray-500">{moment(item.createdAt).fromNow()
                      }</span>
                    </div>

                    <p className="mt-1">{item?.message}</p>
                    <div className="flex items-center mt-3">
                      <div className="flex items-center space-x-4 text-gray-500">

                        <FiMessageSquare

                          onClick={() => showHideButton(item._id)}
                          className="w-5 h-5" />
                        <span>10</span>

                        {
                          visibility[item._id] ?
                            <>
                              <textarea
                                className="w-full h-11 p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring focus:border-blue-500"
                                placeholder="Write a comment..."
                                name="message"
                                onChange={formik1.handleChange}
                                value={formik1.values.message}
                              >
                              </textarea>

                              <button style={{borderRadius:'30px'}}><AiOutlineSend/></button>
                            </>
                            : ""}
                      </div>
                    </div>

                  </div>
                </div >
              </div>

            </>)
        })}
      </div >
    </>
  );
};

export default TableList;
