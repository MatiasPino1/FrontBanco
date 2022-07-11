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

  return (
    <>
    <h1>General Posts Info </h1>
    {posts.map((e)=>{
    return e.title
   })}
    </>
  )
}

export default PostsInfo