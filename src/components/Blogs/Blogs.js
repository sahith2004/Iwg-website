import React from 'react'
import BlogsSearch from './BlogsSearch'
import './Blogs.css'
import BlogList from './BlogList'
const Blogs = () => {
  return (
    <>
   
    <h1 className="mt-5 text-center main-heading">Our Blogs</h1>
            
    <div className='bloglist'><BlogList /></div>
    
    </>
    
  )
}

export default Blogs
