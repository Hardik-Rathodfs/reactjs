import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home  from '../Pages/Home'
import Blogs from '../Pages/Blogs'
import SingleBlog from '../Pages/SingleBlog'
// import Contactus from '../Pages/Contactus'

const MainRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/blogs' element={<Blogs/>}/>
            <Route path='/blogs/edit/:id' element={<SingleBlog/>}/>
            {/* <Route path='/contact' element={<Contactus/>}/> */}

        </Routes>
    </div>
  )
}

export default MainRouter