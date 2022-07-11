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
    <h1>BalanceInfo</h1>
    {balance.map((e)=>{
    return e.completedName
   })}
    </>
  )
}

export default BalanceInfo