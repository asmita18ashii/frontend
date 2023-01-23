import {useState,useEffect} from "react";


const AppBackup=()=>{

  const [userdata,setuserdata]=useState(null);
  console.log("rerendder");
  const fecthrender=()=>{
    fetch('http://localhost:8081/view').then(data=>{
      return data.json();
    }).then(body=>{
      setuserdata(body)
    })
  }
  useEffect(()=>{
   fecthrender();
  },[])
  if(userdata==null){
    return <div>Loading...</div>
  }
 
  console.log(userdata)
  // const user=userdata?.body
  return (
    <div>
      {/* <h1>{userdata?.name}</h1> */}
      {/* <img src={user?.picture?.large} alt="abs"/> */}
      <tbody>
                   {/* {!userdata.length && <img src={loader} alt="loading"/>} */}
                {userdata.length && userdata.map((values,index)=>{
                    return(
                        <tr key={index}>
                        <td>{values.name}</td>
                        <td>{values.likes}</td>
                        <td>{values.description}</td>
                    </tr>
                    )
                })}
      </tbody>
      {/* <h1>{userdata?.[0]?.name}</h1> */}
      <br/>
      <button onClick={fecthrender}>Get new user</button>
    </div>
  )

}
export default AppBackup;