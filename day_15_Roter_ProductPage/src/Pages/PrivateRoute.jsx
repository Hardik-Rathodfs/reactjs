import React from 'react'
import { Navigate } from 'react-router-dom'

function PrivateRoute({children}) {
    let val = true
  return (
     val == true ? children : <Navigate to={"/"} />
  )
}

export default PrivateRoute