import React,{useState} from 'react'
import {useFormik} from "formik"
import * as yup from "yup"
import Vault from "../public/img/vault.png"
import Bank from "../public/img/Bank.webp"
import {Link,useNavigate} from "react-router-dom"
const Forgot = () => {
  const navigate = useNavigate()
  const [token,setToken] = useState([])
  let result = null
  const formik = useFormik({
      initialValues:{
        email:""
      },
      validationSchema:yup.object({
        email:yup.string()
          .email("Invalid email adress")
          .required("Required"),
          }),
          onSubmit:async(values)=>{
            const NewUser = {...values}
         let result= await fetch("https://apibancoasenjopino.herokuapp.com/users/forgot-password",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(NewUser)
  })
  result = await result.json().then(setToken(result.JWT))
  let tokenSu = result.JWT
  let message = result.message
  console.log(message)
  console.log(tokenSu)
  sessionStorage.setItem("token",tokenSu)
  sessionStorage.setItem("message",message)
  navigate("/login")
}})
  return (
    <section class="vh-100">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-6 d-flex align-items-center text-white">
              <div className="px-5 mt-5  ms-xl-4 ">
                <img src={Vault} width="100" height="100" />
                {/* <span class="h1 fw-bold mb-0 text-white">Logo</span> */}
                <div class="d-flex text-white align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5"></div>

                <form className="login-form" onSubmit={formik.handleSubmit}>
                  <h3 class="fw-normal mb-3 pb-3">Recovery Password</h3>

                  <div class="form-outline mb-4">
                    <input
                      type="email"
                      name='email'
                      id="email"
                      class="form-control form-control-lg"
                      {...formik.getFieldProps("email")}
                    />
                    {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
                    <label class="form-label" htmlFor="email">
                      Email
                    </label>
                  </div>

                 

                  <div class="pt-1 mb-4">
                    <button class="noselect button btn-forgot" type="submit">
                      Submit
                    </button>
                  </div>
                  {sessionStorage.getItem("message")}
                  <p>
                    Don't have an account?{" "}
                    <Link className="link-info" to={"/signup"}>
                Register Here
              </Link>
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

export default Forgot