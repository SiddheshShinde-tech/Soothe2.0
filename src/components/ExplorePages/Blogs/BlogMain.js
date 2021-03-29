import React, { Component } from 'react'
import Navbar from '../Blogs/Navbar/Navbar'
import Blogpost from '../Blogs/Blogpost'
import Sidebar from '../Blogs/Blogpost/Sidebar'
import './blogmain.css'


const BlogMain = (props) => {
    console.log(props);
  
    return (
      <div>
        <Navbar />
      
      <div className="container1">
        
        <Blogpost {...props}></Blogpost>
        <Sidebar></Sidebar>
      </div>
      </div>
    );
  };


BlogMain.propTypes = {}
export default BlogMain