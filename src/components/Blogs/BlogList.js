import React from 'react'

import { BlogData } from './BlogData'
import BlogItem from './BlogItem'
const BlogList = () => {
  return (
    <div className='blogList-wrap'>
       {BlogData.map(blog => (
           <BlogItem key={blog.id} imgSrc={blog.imgSrc} link={blog.link} desc={blog.desc} title={blog.title}/>
       ))}
    </div>
  )
}

export default BlogList