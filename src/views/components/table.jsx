/* eslint-disable no-undef */
import React, { useEffect, } from "react";
import { useState } from "react";
import { useFormik } from "formik";
import { FiCalendar, FiMessageSquare, FiSmile } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { createPost, postList } from "redux/slice/session/post.slice";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { createComment } from "redux/slice/session/comment.slice";
import { AiOutlineSend } from "react-icons/ai";
import ReadMoreReact from 'read-more-react'

const TableList = () => {

  const [visibility, setVisibility] = useState({});

  const dispatch = useDispatch()
  const nevigate = useNavigate()

  const { userlistData } = useSelector((state) => state.post)

  const showHideButton = (id) => {

    setVisibility((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };


  const [initialData] = useState({
    message: "",
    files: null,
  });

  const formik = useFormik({
    initialValues: initialData,

    onSubmit: (values, { resetForm }) => {

      function getFormData(object) {
        const formData = new FormData();
        Object.keys(object).forEach(key => formData.append(key, object[key]));
        return formData;
      }


      const data = getFormData(values)
      dispatch(createPost(data,)).unwrap().then((data) => {

        console.log('data', data);
        resetForm()
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
                  {/* <FiImage className="text-blue-500 w-5 h-5" /> */}
                </label>

                <input
                  onChange={v => formik.setFieldValue("files", v.target.files[0])}
                  id="files"
                  name="files"
                  type="file"
                  multiple />

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
                      <span className="font-bold text-lg" onClick={() => nevigate(`/app/users-single/${item.creater_Id}`)}>{item.userName}</span>
                      <span className="text-gray-500 mx-2">•</span>
                      <span className="text-gray-500">{moment(item.createdAt).fromNow()
                      }</span>
                    </div>

                   
                    <ReadMoreReact
                      text={item?.message}
                      min={80}
                      ideal={100}
                      max={200}
                      readMoreText="click here to read more"
                    />
                    {item?.files?.map((file) => {
                      return (<>

                        <img src={`${process.env.REACT_APP_BASE_ENDPOINT}${file && file.filePath}`} />
                      </>)
                    })}
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

                              <button style={{ borderRadius: '30px' }}><AiOutlineSend /></button>
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
