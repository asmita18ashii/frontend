import  React from "react";
import {Link} from "react-router-dom"
import "./landing.css"
const Landing=()=>{
    return(
        <>
        <div className="wrapper">
            <h1>Landing Page</h1>
        </div>
        <div className="Landing">
                <div  className="landing-img">
                    <img src={require("./image/13.JPG")} alt="pahal"/>
                </div>
                <div className="landing-action">
                    <h1>
                        10x Team 04
                    </h1>
                    <Link to="/view">
                        <div>
                            <button>Enter</button>
                        </div>
                    </Link>
                </div>
        </div>
        </>
    )
}
export default Landing;