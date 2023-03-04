import React from 'react'
import './Blogs.css'
const BlogItem = (props) => {
  return (
    <div className='card'>
        <div className='card-body'>
          <img src={props.imgSrc} className='card-image'></img>
          <h2 className='card-title'>{props.title}</h2>
          <p className='card-description'>{props.desc}</p>
          <a href={props.link} target='_blank'><button className='card-btn'>Read Article</button></a>
        </div>
    </div>
  )
}

export default BlogItem