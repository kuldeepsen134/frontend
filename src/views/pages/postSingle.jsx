/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import { useDispatch, } from 'react-redux'
import { useParams } from 'react-router-dom'
import { postListById } from 'redux/slice/session/post.slice'
import { FaRegCommentAlt } from "react-icons/fa";
import { AiOutlineSend } from 'react-icons/ai';
import { createComment, getCommentByPostID } from 'redux/slice/session/comment.slice';
import { useFormik } from 'formik';
import moment from 'moment';

const PostSingle = () => {

  const dispatch = useDispatch()
  const params = useParams()

  const [post, setPost] = useState({})

  const [initialData] = useState({
    message: '',
    post_id: params.id,
  })

  const formik = useFormik({
    initialValues: initialData,
    enableReinitialize: true,

    onSubmit: (values, { resetForm }) => {
      dispatch(createComment(values)).unwrap().then(() => {
        dispatch(getCommentByPostID(`${params.id}`)).unwrap().then((comment) => {
          resetForm()
          setComment(comment.data)
        })
      })
    }
  })
  const [comment, setComment] = useState()

  useEffect(() => {
    dispatch(postListById(`${params.id}`)).unwrap().then((data) => {
      setPost(data && data?.data)
      dispatch(getCommentByPostID(`${params.id}`)).unwrap().then((comment) => {
        setComment(comment.data)
      })

    })
  }, [])

  return (
    <div className=" container mx-auto bg-white rounded-lg mt-28 shadow-md p-6">
      <p className="text-gray-800 mb-8">
        {post && post?.message}
      </p>

      {post && post?.files?.map((file) => {
        return (
          <>
            <img
              className="mb-4"
              src={`${process.env.REACT_APP_BASE_ENDPOINT}${file?.filePath}`}
              alt="Product Image"
            />
          </>
        )
      })}

      {comment?.map((item) => {
        return (<>
          <div className='comment flex'>
            <img
              src="https://i.pravatar.cc/50"
              alt=""
              style={{ borderRadius: "25px" }}
            />
            <span className='ml-4 mt-2 font-bold'>{item?.user_name}</span>
            <span className='mt-2 ml-2'>{moment(item?.createdAt).fromNow()}</span>
          </div>
          <p className='ml-3 mt-2 my-1 w-3/12'>{item?.message}</p>
        </>)
      })}

      <div className="flex justify-between items-center">
        <div className="flex items-center">
          < FaRegCommentAlt />
          <span className="text-gray-600 mx-4 my-4">   15 Likes</span>
        </div>
      </div>

      <form onSubmit={formik.handleSubmit} >
        <div className='flex'>

          <input
            className="w-8/12 h-11 p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Write a comment..."
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
          >
          </input>
          <button type='submit'><AiOutlineSend className='w-12 h-8' /></button>
        </div>
      </form>
    </div>
  );
}


export default PostSingle