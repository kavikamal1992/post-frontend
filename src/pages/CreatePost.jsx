import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { getUserName } from "./customHook";

const CreatePost = () => {

  const username = getUserName()
  const [cookie, setCookie] = useCookies(["access_token"]);


  const [title, settitle] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [desc, setdesc] = useState("");
  const [userOwner, setuserOwner] = useState(username);

  const nav = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title:title,
      imageUrl : imageUrl,
      desc:desc,
      userOwner:userOwner
    }
    try {
      const resp = await axios.post("https://post-backend-server.onrender.com/newPost",newPost,
        {
           headers : {authorization: cookie.access_token} 
        }
    );
    // console.log(resp);
    alert('post created')
    nav('/')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Create Post</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title : </label>
          <input
            type="text"
            name="title"
            id="title"
            required
            value={title}
            onChange={(e) => settitle(e.target.value)}
            placeholder="Enter Post Title"
          />{" "}
          <br />
          <br />
          <label htmlFor="image">Image URL : </label>
          <input
            type="text"
            name="image"
            id="image"
            value={imageUrl}
            required
            onChange={(e) => setimageUrl(e.target.value)}
            placeholder="Enter Post Image-URL"
          />{" "}
          <br />
          <br />
          <label htmlFor="desc">Description : </label>
          <input
            type="text"
            name="desc"
            id="desc"
            value={desc}
            required
            onChange={(e) => setdesc(e.target.value)}
            placeholder="Enter Post Description"
          />{" "}
          <br /> <br />
          <button>Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
