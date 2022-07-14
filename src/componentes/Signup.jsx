import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {useNavigate} from "react-router-dom"
const Signup = () => {
  const navigate = useNavigate()
  const [token, setToken] = useState([]);
  let result = null;
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      completedName: "",
      savingsBank: 0,
      email: "",
      file: "",
    },
    validationSchema: yup.object({
      username: yup
        .string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      password: yup
        .string()
        .max(90, "Must be 20 characters or less")
        .required("Required"),
      completedName: yup.string().max(30, "Must be 30 characters or less"),
      savingsBank: yup.number().required("Required"),
      email: yup.string().email("Invalid email adress").required("Required"),
      file: yup.mixed().required("file required"),
    }),
    onSubmit: async (values) => {
      const NewUser = { ...values };
      let result = await fetch(
        "https://apibancoasenjopino.herokuapp.com/users/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(NewUser),
        }
      );
      result = await result.json().then(setToken(result.JWT));
      let tokenSu = result.JWT;
      let userId = [result.userid];
      let userName = [result.username];
      let completeName = [result.completedName];
      let userEmail = [result.email];
      let userFile = [result.file];
      console.log(result);
      console.log(tokenSu);
      sessionStorage.setItem("token", tokenSu);
      sessionStorage.setItem("userId", userId);
      sessionStorage.setItem("userName", userName);
      sessionStorage.setItem("completeName", completeName);
      sessionStorage.setItem("userEmail", userEmail);
      sessionStorage.setItem("userFile", userFile);
      navigate("/login")
    },
  });

  return (
    <>
    <Navbar></Navbar>
      <div className="container vh-100 mt-5 mb-5">
        <form onSubmit={formik.handleSubmit}>
          <div className="row mb-4">
            <h3 className="mb-3 fw-bold text-white">Registro de Cuentas</h3>
            <div className="col">
              <div className="form-outline">
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  name="username"
                  {...formik.getFieldProps("username")}
                  autoFocus
                />
                {formik.touched.username && formik.errors.username && (
                  <div>{formik.errors.username}</div>
                )}
                <label className="form-label text-white" htmlFor="username">
                  User Name
                </label>
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password && (
                  <div>{formik.errors.password}</div>
                )}
                <label className="form-label text-white" htmlFor="password">
                  Password
                </label>
              </div>
            </div>
          </div>

          <div className="form-outline mb-4">
            <input
              type="text"
              id="completedName"
              className="form-control"
              name="completedName"
              {...formik.getFieldProps("completedName")}
            />
            {formik.touched.completedName && formik.errors.completedName && (
              <div>{formik.errors.completedName}</div>
            )}
            <label className="form-label text-white" htmlFor="completedName">
              Completed Name
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="number"
              id="savingsBank"
              className="form-control"
              name="savingsBank"
              {...formik.getFieldProps("savingsBank")}
            />
            {formik.touched.savingsBank && formik.errors.savingsBank && (
              <div>{formik.errors.savingsBank}</div>
            )}
            <label className="form-label text-white" htmlFor="savingsBank">
              Savings Bank
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="email"
              id="email"
              className="form-control"
              name="email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <div>{formik.errors.email}</div>
            )}
            <label className="form-label text-white" htmlFor="email">
              Email
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="file"
              id="file"
              className="form-control"
              name="file"
              {...formik.getFieldProps("file")}
            />
            {formik.touched.file && formik.errors.file && (
              <div>{formik.errors.file}</div>
            )}
            <label className="form-label text-white" htmlFor="file">
              File
            </label>
          </div>

          <button type="submit" className="noselect button btn-register">
            Submit
          </button>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Signup;
