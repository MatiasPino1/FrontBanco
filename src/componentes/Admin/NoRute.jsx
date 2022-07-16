import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Robot from '../../public/img/robot.png'
import { Link } from 'react-router-dom'
const NoRute = () => {
  return (
    <>
    <Navbar/>
      <div class="b-example-divider"></div>
<div class="container col-xxl-8 px-4">
  <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div class="col-10 col-sm-8 col-lg-6">
      <img src={Robot} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="300" height="300" loading="lazy"/>
    </div>
    <div class="col-lg-6">
      <h1 class="display-5 fw-bold lh-1 mb-3 bg">Error 404 x_x</h1>
      <p class="lead lh-lg text-center mt-5">
        You might be trying to enter a private section or this URL doesn´t exists.
        <Link to="/" className='navbar-brand bg fw-bold'>Contact Us</Link> if you need more help.
      </p>
    </div>
  </div>
</div>
<Footer/>
    </>
  )
}

export default NoRute