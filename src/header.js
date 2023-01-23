import  React from "react";
import {Link} from "react-router-dom"
import "./header.css"
export const Header=()=>{
    return (
        <>
        <nav className="header">
            <section className="logo">
                <img src={require("./image/icon.png")} alt="">

                </img>
            </section>
            <section className="camera-icon">
                <img src={require("./image/camera-icon.png")} alt=""/>
                
                <Link to="/post">
                        <div>
                            <button>c</button>
                        </div>
                </Link>
            </section>
        </nav>
        </>
    )
}