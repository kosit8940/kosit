import React, { Component } from 'react'
import { Link } from 'react-router-dom'
  

export class Header extends Component {
    render() {
        return (
            <div style={HeaderStyle} className="d-flex justify-content-around align-items-center">
                <Link style={InlineNone} to="/">
                <div className="d-flex justify-content-center">
                    <p className="m-0" style={LogoOne}>KOS</p>
                    <p className="m-0" style={LogoTwo}>IT</p>
                </div>
                </Link>
                <div>
                    <Link to="/" style={NavStyle}>HOME</Link>
                    <Link to="/Portfolio" style={NavStyle} className="ps-5">PORTFOLIO</Link>
                    <Link to="/Contact" style={NavStyle} className="ps-5">CONTACT</Link>
                </div>
            </div>
        )
    }
}

export default Header

const HeaderStyle = {
    height: "75px",
    backgroundColor: "#6c6cff",
}

const LogoOne = {
    fontSize: "27px",
    fontWeight: "800",
    color: "white"
}

const LogoTwo = {
    fontSize: "27px",
    fontWeight: "800",
    color: "#FF9B34"
}

const NavStyle = {
    color: "white",
    fontWeight: "600",
    textDecoration: "none",
    fontSize: "14px"
}

const InlineNone = {
    textDecoration: "none"
}