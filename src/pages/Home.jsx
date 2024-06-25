import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Home = () => {

  const [post,setPost]= useState([])

  const getData  = async()=>{
    try {
      const resp = await axios.get('https://post-backend-server.onrender.com/getPosts') // {data,config}
      setPost(resp.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getData()
  },[])

  const nav = useNavigate()

  const handleCreate = () =>{
    nav('/create-post')
  }
  return (
    <div>
      <h1>Hello Homepage</h1>
      <button onClick={handleCreate}>Create Post</button>
      <div>
        {post.map((item,index)=>{
          return(
            <div key={index}>
              <h2>{item.title}</h2>
              <img src={item.imageUrl} height={150} width={150} alt={item.title} />
              <p>{item.desc}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
