import React from 'react'
import Bank from "../public/img/Bank.webp"
import Vault from "../public/img/vault.png"
const LogIn = () => {
  return (
    <section class="vh-100">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-6 d-flex align-items-center text-white">
              <div className="px-5 mt-5  ms-xl-4 ">
                <img src={Vault} width="100" height="100" />
                {/* <span class="h1 fw-bold mb-0 text-white">Logo</span> */}
                <div class="d-flex text-white align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5"></div>

                <form className="login-form">
                  <h3 class="fw-normal mb-3 pb-3">Log in</h3>

                  <div class="form-outline mb-4">
                    <input
                      type="email"
                      id="form2Example18"
                      class="form-control form-control-lg"
                    />
                    <label class="form-label" htmlFor="form2Example18">
                      Email address
                    </label>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      id="form2Example28"
                      class="form-control form-control-lg"
                    />
                    <label class="form-label" htmlFor="form2Example28">
                      Password
                    </label>
                  </div>

                  <div class="pt-1 mb-4">
                    <button class="noselect button" type="button">
                      Login
                    </button>
                  </div>
<p class="small mb-5 pb-lg-2">
                    <a class="link-info" href="#!">
                      Forgot password?
                    </a>
                  </p>
                  <p>
                    Don't have an account?{" "}
                    <a href="#!" class="link-info">
                      Register here
                    </a>
                  </p>
                </form>
              </div>
            </div>
            <div class="col-sm-6 px-0 d-none d-sm-block">
              <img
                src={Bank}
                alt="Login image"
                class="w-100 vh-100 login-img"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default LogIn