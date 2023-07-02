import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <header className=" absolute top-0 left-0 bottom-0 leading-5 h-full w-full overflow-hidden"style={{background:'#1f2937'}}>
        <div className='container'>
          <nav className="flex items-center justify-between flex-wrap p-4">
            <div className="flex items-center flex-shrink-0 text-white mr-6">

              <img src="/assets/images/logo.png" className="w-12" />
              <span className="font-semibold text-xl ml-4 tracking-tight">Star Shield</span>
            </div>
            <div className="block lg:hidden">
              <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
              </button>
            </div>
        
              <div>
                <Link to="/login" className="inline-block text-sm px-4 py-2  text-white mt-4 lg:mt-0">Login</Link>
                <Link to="/register" className="inline-block text-sm px-4 py-2 leading-none text-white lg:mt-0">SignUp</Link>
            </div>
          </nav>
        </div>
      </header>
          
      
    </>
  )
}
export default Home