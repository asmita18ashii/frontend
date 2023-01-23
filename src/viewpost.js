import { useState, useEffect } from "react";
import { Post } from "./Post";
import {Header} from './header'
export const ViewPost = () => {
    const [userdata, setuserdata] = useState(null);
    console.log("rerendder");
    const fecthrender = () => {
        fetch('http://localhost:8081/view').then(data => {
            return data.json();
        }).then(body => {
            setuserdata(body)
        }).catch(err=>{
            console.log(err)
        })
    }
    useEffect(() => {
        fecthrender();
    }, [])
    if (userdata == null) {
        return <div>Loading...</div>
    }
       

    console.log(userdata)
    // const user=userdata?.body
    return (
        <div>
            <Header/>
            <Post values={userdata}/>
        </div>
    )
}