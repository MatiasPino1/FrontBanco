import React from 'react'
import Head from '../public/img/Home.png'
import Hands from '../public/img/Hands.png'
import Phone from '../public/img/Phone.png'
import CCards from '../public/img/CCards.png'
import {Link} from "react-router-dom"
const Home = () => {
  let token = sessionStorage.getItem("token");
  return (
    <>
    {token ? (
      <>
      <div class="container  my-5">
        <div class="row p-4 pb-0 m-1 pe-lg-0 pt-lg-5 brdr align-items-center  rounded-3  shadow-lg">
          <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 class="display-4 fw-bold  bg lh-1  text-shadow">Try our</h1>
            <p class="lead">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
          </div>
          <div class="col-lg-4 m-">
            <img class="img-fluid" src={Head} alt="" width="414" />
          </div>
        </div>
      </div>

      <div className="  container">
      <div class="  text-center bg row">
        <div class="mt-5 my-5 col-lg-4">
          <img src={CCards} width="200" />

          <h2 class="mt-4 fw-normal">Heading</h2>
          <p className="mb-5">
            Some representative placeholder content for the three columns of
            text below the carousel. This is the first column.
          </p>
          <p>
            <a class="button-85 navbar-brand " href="#">
              View details &raquo;
            </a>
          </p>
        </div>
        <div class="mt-5 col-lg-4">
          <img src={Hands} width="200" />
          <h2 class="mt-4 fw-normal">Heading</h2>
          <p className="mb-5">
            Another exciting bit of representative placeholder content. This
            time, we've moved on to the second column.
          </p>
          <p>
            <a class="navbar-brand button-85 " href="#">
              View details &raquo;
            </a>
          </p>
        </div>
        <div class="mt-5 col-lg-4">
          <img src={Phone} width="155" />

          <h2 class="mt-4 fw-normal">Heading</h2>
          <p className="mb-5">
            And lastly this, the third column of representative placeholder
            content.
          </p>
          <p>
            <Link to={"/"} class="navbar-brand button-85 ">
              View details &raquo;
            </Link>
          </p>
        </div>
      </div>
    </div>
    </>
      ):
      //Home sin token
      (
        <>
     <div class="container  my-5">
        <div class="row p-4 pb-0 m-1 pe-lg-0 pt-lg-5 brdr align-items-center  rounded-3  shadow-lg">
          <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 class="display-4 fw-bold  bg lh-1  text-shadow">Try our</h1>
            <p class="lead">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button type="button" class="noselect button btn-home">
                Primary
              </button>
            </div>
          </div>
          <div class="col-lg-4 m-">
            <img class="img-fluid" src={Head} alt="" width="414" />
          </div>
        </div>
    </div>

     <div className="  container">
        <div class="  text-center bg row">
          <div class="mt-5 my-5 col-lg-4">
            <img src={CCards} width="200" />

            <h2 class="mt-4 fw-normal">Heading</h2>
            <p className="mb-5">
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
            </p>
            <p>
              <a class="button-85 navbar-brand " href="#">
                View details &raquo;
              </a>
            </p>
          </div>
          <div class="mt-5 col-lg-4">
            <img src={Hands} width="200" />
            <h2 class="mt-4 fw-normal">Heading</h2>
            <p className="mb-5">
              Another exciting bit of representative placeholder content. This
              time, we've moved on to the second column.
            </p>
            <p>
              <a class="navbar-brand button-85 " href="#">
                View details &raquo;
              </a>
            </p>
          </div>
          <div class="mt-5 col-lg-4">
            <img src={Phone} width="155" />

            <h2 class="mt-4 fw-normal">Heading</h2>
            <p className="mb-5">
              And lastly this, the third column of representative placeholder
              content.
            </p>
            <p>
              <Link to={"/"} class="navbar-brand button-85 ">
                View details &raquo;
              </Link>
            </p>
          </div>
        </div>
    </div>
      </>
      )}
   </>
  )
}

export default Home