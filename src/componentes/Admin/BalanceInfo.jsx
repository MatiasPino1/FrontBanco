import React,{useState, useEffect} from 'react'

const BalanceInfo = () => {
    const [balance,setBalance] = useState([])
    const data = null
    useEffect(()=>{
    fetch("https://apibancoasenjopino.herokuapp.com/admin/balance/all",{
    method:"GET",
    headers: {'Content-Type': 'application/json'}
    })
    .then(response =>response.json())
    .then(data=>setBalance(data))
    console.log(balance)
    },[])
  return (
    <>
     <section className="table-section">
        <div className="bg1 px-4 py-5 mt-5 text-center container text-white">
          <h2>General Users Info </h2>
          <h3>Fixed Table header</h3>
        </div>
        <div class="tbl-header">
          <table cellpadding="0" cellspacing="0" border="0">
            <thead>
              <tr>
                <th>Completed Name</th>
                <th>Account Balance</th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="tbl-content">
          <table cellpadding="0" cellspacing="0" border="0">
            {balance.map((e) => {
              return (
                <tbody>
                  <tr>
                    <td>{e.completedName}</td>
                    <td>{e.accBalance}</td>
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

export default BalanceInfo