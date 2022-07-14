import React from 'react'
import Head from '../public/img/Home.png'
import Hands from '../public/img/Hands.png'
import Phone from '../public/img/Phone.png'
import CCards from '../public/img/CCards.png'
const Home = () => {
  let token = sessionStorage.getItem("token");
  return (
    <>
    {token ? (
      <div>
    <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1">
              Border hero with cropped image and shadows
            </h1>
            <p className="lead text-white">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
          </div>
          <div className="col-lg-4 m-">
            <img
              className="img-fluid"
              src={Head}
              alt=""
              width="414"
            />
          </div>
        </div>
      </div>
      


      <div className="container">
        <div class="  text-center row">
          <div class="col-lg-4">
            <img src={CCards} width="200" />

            <h2 class="fw-normal">Heading</h2>
            <p>
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
            </p>
            <p>
              <a class="btn btn-secondary" href="#">
                View details &raquo;
              </a>
            </p>
          </div>
          <div class="col-lg-4">
            <img src={Hands} width="200" />
            <h2 class="fw-normal">Heading</h2>
            <p>
              Another exciting bit of representative placeholder content. This
              time, we've moved on to the second column.
            </p>
            <p>
              <a class="btn btn-secondary" href="#">
                View details &raquo;
              </a>
            </p>
          </div>
          <div class="col-lg-4">
            <img src={Phone} width="155" />

            <h2 class="fw-normal">Heading</h2>
            <p>
              And lastly this, the third column of representative placeholder
              content.
            </p>
            <p>
              <a class="btn btn-secondary" href="#">
                View details &raquo;
              </a>
            </p>
          </div>
        </div>
      </div>
      </div>
      ):
      //Home sin token
      (
        <div>
    <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1">
              Border hero with cropped image and shadows
            </h1>
            <p className="lead text-white">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button
                type="button"
                className="noselect button btn-home"
              >
                Primary
              </button>
            </div>
          </div>
          <div className="col-lg-4 m-">
            <img
              className="img-fluid"
              src={Head}
              alt=""
              width="414"
            />
          </div>
        </div>
      </div>
      


      <div className="container">
        <div class="  text-center row">
          <div class="col-lg-4">
            <img src={CCards} width="200" />

            <h2 class="fw-normal">Heading</h2>
            <p>
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
            </p>
            <p>
              <a class="btn btn-secondary" href="#">
                View details &raquo;
              </a>
            </p>
          </div>
          <div class="col-lg-4">
            <img src={Hands} width="200" />
            <h2 class="fw-normal">Heading</h2>
            <p>
              Another exciting bit of representative placeholder content. This
              time, we've moved on to the second column.
            </p>
            <p>
              <a class="btn btn-secondary" href="#">
                View details &raquo;
              </a>
            </p>
          </div>
          <div class="col-lg-4">
            <img src={Phone} width="155" />

            <h2 class="fw-normal">Heading</h2>
            <p>
              And lastly this, the third column of representative placeholder
              content.
            </p>
            <p>
              <a class="btn btn-secondary" href="#">
                View details &raquo;
              </a>
            </p>
          </div>
        </div>
      </div>
      </div>
      )}
   </>
  )
}

export default Home