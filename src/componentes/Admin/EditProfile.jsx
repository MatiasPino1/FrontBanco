import React,{useState} from 'react'
import {useFormik} from "formik"
import * as yup from "yup"
import Navbar from '../Navbar'
import Footer from '../Footer'
import {useNavigate} from "react-router-dom"
const EditProfile = () => {
  const navigate = useNavigate()
    const [token,setToken] = useState([])
    const savingsBank= Number(sessionStorage.getItem("savingsBank"))
    let result = null
    const formik = useFormik({
        initialValues:{
            username:"",
            password:"",
            completedName:"",
            savingsBank:0,
            email:"",
            file:""
        },
        validationSchema:yup.object({
            username:yup.string()
            .max(15,"Must be 15 characters or less")
            .required("Required"),
            password:yup.string()
            .max(90,"Must be 20 characters or less")
            .required("Required"),
            completedName:yup.string()
            .max(30,"Must be 30 characters or less"),
            savingsBank:yup.number()
            .required("Required"),
            email:yup.string()
            .email("Invalid email adress")
            .required("Required"),
            file:yup.mixed().required("file required")
            }),
            onSubmit:async(values)=>{
              const NewUser = {...values}
           let result= await fetch(`https://apibancoasenjopino.herokuapp.com/users/changeUser/${savingsBank}`,{
        method:"PATCH",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(NewUser)
    })
    result = await result.json()
    console.log(result)
    navigate("/youraccount")
 }})
  return (
    
    <>
    <Navbar></Navbar>
    <div className="container mt-5 mb-5">
        <form onSubmit={formik.handleSubmit}>
          <div className="row mb-4">
            <h3 className="mb-3 fw-bold text-white">Ajuste de Datos</h3>
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
                {formik.touched.username && formik.errors.username && <div>{formik.errors.username}</div>}
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
                 {formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}
                <label className="form-label text-white" htmlFor="password">
                  Password
                </label>
              </div>
            </div>
          </div>

          <div className="form-outline mb-4">
            <input type="text"
             id="completedName"
             className="form-control"
             name="completedName"
             {...formik.getFieldProps("completedName")}
              />
            {formik.touched.completedName && formik.errors.completedName && <div>{formik.errors.completedName}</div>}
            <label className="form-label text-white" htmlFor="completedName">
              Completed Name
            </label>
          </div>

          <div className="form-outline mb-4">
            <input type="email"
             id="email" 
             className="form-control"
             name="email" 
             {...formik.getFieldProps("email")}
             />
             {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
            <label className="form-label text-white" htmlFor="email">
              Email
            </label>
          </div>

          <div className="form-outline mb-4">
            <input type="file" 
            id="file"
            className="form-control"
            name="file"
            {...formik.getFieldProps("file")}
             />
             {formik.touched.file && formik.errors.file && <div>{formik.errors.file}</div>}
            <label className="form-label text-white" htmlFor="file">
              File
            </label>
          </div>


          <button type="submit" className="noselect button btn-edit">
            Submit
          </button>
        </form>
      </div>
      <Footer></Footer>
    </>
  )
}

export default EditProfile