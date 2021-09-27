import React, { Component } from 'react'
import development from "../../assets/development.png"


import { Link } from 'react-router-dom'


export class MainOne extends Component {
    render() {
        return (
            <div style={MainOneStyle} className="row m-0 BgImageTwo">
                <div className="col-lg-4 col-sm-12 offset-lg-2 offset-sm-0 d-flex flex-column justify-content-center px-4">
                   <p style={HiStyle} className="pt-5 pt-lg-0">Hi, i'm Kosit Ngamprasert</p>
                   <p>
                        There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration in some form, by
                        injected humour, or randomised words which don't look even slightly
                        believable. 
                   </p>
                   
                   <button style={BtnOne}>
                        <Link to="/contact" style={NavStyle}>
                            Hire me
                        </Link>
                    </button>
                    
                </div>
                <div className="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center pt-5 pt-lg-0">
                    <figure>
                        <img src={development}></img>
                    </figure>
                </div>
            </div>
        )
    }
}

export default MainOne

const MainOneStyle = {
    minHeight: "700px",
    backgroundColor: "#6c6cff",
    color: "white"
}

const HiStyle = {
    fontSize: "60px",
    fontWeight: "700"
}

const BtnOne = {
    width: "100px",
    height: "40px",
    border: "none",
    borderRadius: "20px",
    backgroundColor: "#FF9B34",
}

const NavStyle = {
    color: "white",
    fontWeight: "600",
    textDecoration: "none"
}