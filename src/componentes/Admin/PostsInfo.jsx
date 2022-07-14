import React, { useState , useEffect} from 'react'
import {useSearchParams} from "react-router-dom"
const PostsInfo = () => {
  const [posts,setPosts] = useState([])
  const [searchParams,setSearchParams] = useSearchParams()
  const data = null
  useEffect(()=>{
  fetch("https://apibancoasenjopino.herokuapp.com/admin/comments",{
  method:"GET",
  headers: {'Content-Type': 'application/json'}
  })
  .then(response =>response.json())
  .then(data=>setPosts(data))
  console.log(posts)
  },[])

  const url = "https://apibancoasenjopino.herokuapp.com/admin/comments?title="
  const nota = "searchParams.get(filter entre comillas) concatenar esta variable a la url"
  return (
    <>
     <div className="bg container text-center d-flex">
 <section className="table-section">
        <div className="bg1 px-4 py-5 mt-5 text-center container text-white">
          <h2>General Users Info </h2>
          <h3>Fixed Table header</h3>
        </div>
        <input placeholder='Search by title'
        className="m-5 px-3 py-2 font-monospace border rounded-3"
        onChange={(e)=>{
      let title = e.target.value
        setSearchParams({title})}}></input>
        <div class="tbl-header">
          <table cellpadding="0" cellspacing="0" border="0">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="tbl-content">
          <table cellpadding="0" cellspacing="0" border="0">
            {posts.filter((param)=>{
              const title = searchParams.get("title")
              if(!title) return true
              else{
                const stringTitle = String(title)
                const postTitle= String(param.title)
                return postTitle.startsWith(stringTitle)
              }
            }).map((e) => {
              return (
                <tbody>
                  <tr>
                    <td>{e.id}</td>
                    <td>{e.title}</td>
                    <td>{e.body}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </section>
      </div>
    </>
  )
}

export default PostsInfo