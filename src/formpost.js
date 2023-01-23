import { useState } from "react"
import "./formpost.css"

export const FormPost=()=>{
    const [userName,setUserName]=useState("");
    const [loaction,setLocation]=useState("");
    const [likes,setLikes]=useState("");
    const [description,setDescription]=useState("");
    const [postImage,setPostImage]=useState("");

    const uploadPost=()=>{
        const formData= new FormData();
        formData.append('name',userName);
        formData.append('location',loaction);
        formData.append('likes',likes);
        formData.append('description',description);
        formData.append("postImage",postImage);
        formData.forEach((val,key)=>{
            console.log(val)
        })
        
        fetch("http://localhost:8081/api",{
            method:'POST',
            // headers:{
            //     'content-Type':'application/json',
            //     'accept':'application/json'
            // },
            body:formData
            // body:JSON.stringify({
            //     "name":"Rahul",
            //     "location":"Hyderabad",
            //     "likes":50,
            //     "description": "Sample Description for Post",
            //     "PostImage": "relative path from local"
            // })
        })
    }
    return (
        <div className="container">
            <input placeholder="name" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
            <h1>{userName}</h1>
            <input placeholder="loaction" value={loaction} onChange={(e)=>{setLocation(e.target.value)}}/>
            <input placeholder="likes"value={likes} onChange={(e)=>{setLikes(e.target.value)}}  />
            <textarea  placeholder="description" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
            <input type="file" placeholder="postImage"  onChange={(e)=>{setPostImage(e.target.files[0])}}/>
            <button onClick={uploadPost}>Submit</button>
        </div>
    )
}
