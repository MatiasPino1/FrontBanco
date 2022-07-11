import React from 'react'
import { Link, Outlet } from "react-router-dom"
const AdminSite = () => {

  return (
    <div style={{display:"flex"}}>
      <h1>Admin Site</h1>
      <nav>
        <Link to={"usersinfo"} style={{color:"black"}}>Users Info</Link>
        <Link to={"postsinfo"} style={{color:"black"}}>Post Info</Link>
        <Link to={"balanceinfo"} style={{color:"black"}}>Balance info</Link>
        </nav>
        <Outlet></Outlet>
    </div>
    
  )
}

export default AdminSite