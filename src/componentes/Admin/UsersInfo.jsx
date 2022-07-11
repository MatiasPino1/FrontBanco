import React,{useEffect, useState} from 'react'

const UsersInfo = () => {
  const [users,setUsers] = useState([])
  const data = null
  useEffect(()=>{
  fetch("https://apibancoasenjopino.herokuapp.com/admin",{
  method:"GET",
  headers: {'Content-Type': 'application/json'}
  })
  .then(response =>response.json())
  .then(data=>setUsers(data))
  console.log(users)
  },[])

  return (
    <>
    <h1>General Users Info </h1>
    <section>
        <h1>Fixed Table header</h1>
        <div class="tbl-header">
          <table cellpadding="0" cellspacing="0" border="0">
            <thead>
              <tr>
                <th>User Name</th>
                <th>Completed Name</th>
                <th>Email</th>
                <th>Savings Bank</th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="tbl-content">
          <table cellpadding="0" cellspacing="0" border="0">
            <tbody>
              <tr>
              {users.map((e)=>{
    return <tr>
      <td>{e.username}
      <td>{e.completedName}</td>
      <td>{e.email}</td>
      <td>{e.savingsBank}</td>
      </td></tr>      
   })}
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
    </>
  )
}

export default UsersInfo