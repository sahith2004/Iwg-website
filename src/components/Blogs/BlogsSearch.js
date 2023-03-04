import React from 'react'
import "./Blogs.css"
const BlogsSearch = ({value,handleSearchKey,clearSearch,formSubmit}) => {
  return (
    <div className='searchBar-wrap'>
          <form onSubmit={formSubmit}>
            <input type="text" onChange={handleSearchKey} placeholder="Search by Intrest" value={value}></input>
          </form>
          {value && <span onClick={clearSearch}>x</span>}
          <button>GO</button>
    </div>
  )
}

export default BlogsSearch