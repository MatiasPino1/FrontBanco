import React, { useState , useEffect} from 'react'

const PostsInfo = () => {
  const [posts,setPosts] = useState([])
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
 <section className="table-section">
        <div className="bg1 px-4 py-5 mt-5 text-center container text-white">
          <h2>General Users Info </h2>
          <h3>Fixed Table header</h3>
        </div>
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
            {posts.map((e) => {
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
    </>
  )
}

export default PostsInfo