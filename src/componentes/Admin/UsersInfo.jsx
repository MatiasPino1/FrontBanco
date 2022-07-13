import React,{useEffect, useState} from 'react'

const UsersInfo = () => {
  const [users,setUsers] = useState([])
  const [params,setParams] = useState(0)
  const [filtered,setFiltered] = useState("")
  const data = null
  useEffect(()=>{
  fetch("https://apibancoasenjopino.herokuapp.com/admin",{
  method:"GET",
  headers: {'Content-Type': 'application/json'}
  })
  .then(response =>response.json())
  .then(data=>setUsers(data))
  },[])

const deleteUser = async(param) => {
await fetch(`https://apibancoasenjopino.herokuapp.com/admin/${param}`,{
  method:"DELETE",
  headers: {'Accept': 'application/json',
    'Content-Type': 'application/json'}
})
}
  return (
    <>
    <section className="table-section">
        <div className="bg1 px-4 py-5 mt-5 text-center container text-white">
          <h2>General Users Info </h2>
          <h3>Fixed Table header</h3>
        </div>
        <div class="tbl-header">
          <input onChange={(e)=>setFiltered(String(e.target.value))}></input>
          <table cellpadding="0" cellspacing="0" border="0">
            <thead>
              <tr>
                <th>User Name</th>
                <th>Completed Name</th>
                <th>Email</th>
                <th>Savings Bank</th>
                <th>Action</th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="tbl-content">
          <table cellpadding="0" cellspacing="0" border="0">
            {users.filter(({username})=>username.includes(filtered)).map((e) => {
              return (
                <tbody>
                  <tr>
                    <td>{e.username}</td>
                    <td>{e.completedName}</td>
                    <td>{e.email}</td>
                    <td>{e.savingsBank}</td>
                    <button type="submit" onClick={()=>deleteUser(e.savingsBank)}></button>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </section>
    </>
  )
}

export default UsersInfo