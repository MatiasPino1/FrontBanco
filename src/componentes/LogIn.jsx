import React, { useState } from "react";
import Bank from "../public/img/Bank.webp";
import Vault from "../public/img/vault.png";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router";
import {Link} from "react-router-dom"
const LogIn = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState([]);
  let result = null;
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().email("Invalid email adress").required("Required"),
      password: yup
        .string()
        .max(90, "Must be 20 characters or less")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      const userLogin = { ...values };
      let result = await fetch(
        "https://apibancoasenjopino.herokuapp.com/users/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userLogin),
        }
      );
      result = await result.json().then(setToken(result.JWT));
      let tokenSu = result.JWT;
      let userId = [result.id];
      let userName = [result.name];
      let completeName = [result.completedName];
      let userEmail = [result.email];
      let savingsBank = [result.savingsBank];
      let message = [result.message]
      console.log(result);
      console.log(tokenSu);
      console.log(userName);
      sessionStorage.setItem("token", tokenSu);
      sessionStorage.setItem("userId", userId);
      sessionStorage.setItem("userName", userName);
      sessionStorage.setItem("completeName", completeName);
      sessionStorage.setItem("userEmail", userEmail);
      sessionStorage.setItem("savingsBank", savingsBank);

      navigate("/youraccount");
    },
  });
  return (
    <section class="vh-100">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-6 d-flex align-items-center text-white">
            <div className="px-5 mt-5  ms-xl-4 ">
            <Link to={"/"}><img src={Vault} width="100" height="100" /></Link> 
              {/* <span class="h1 fw-bold mb-0 text-white">Logo</span> */}
              <div class="d-flex text-white align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5"></div>

              <form className="login-form" onSubmit={formik.handleSubmit}>
                <h3 class="fw-normal mb-3 pb-3">Log in</h3>

                <div class="form-outline mb-4">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="form-control form-control-lg"
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div>{formik.errors.email}</div>
                  )}
                  <label class="form-label" htmlFor="email">
                    Email
                  </label>
                </div>

                <div class="form-outline mb-4">
                  <input
                    type="password"
                    id="password"
                    class="form-control form-control-lg"
                    name="password"
                    {...formik.getFieldProps("password")}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <div>{formik.errors.password}</div>
                  )}
                  <label class="form-label" htmlFor="password">
                    Password
                  </label>
                </div>

                <div class="pt-1 mb-4">
                  <button class="noselect button btn-login" type="submit">
                    Login
                  </button>
                </div>
                <p class="small mb-5 pb-lg-2">
                <Link className="link-info" to={"/forgot"}>
                Forgot password?
              </Link>
                </p>
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
            <img src={Bank} alt="Login image" class="w-100 vh-100 login-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
