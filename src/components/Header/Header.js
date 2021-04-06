import React from 'react'
import "./Header.css"
import { Link} from "react-router-dom"
import {ReactComponent as Logo} from "../../assets/crown.svg";
const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <Logo   />
            </Link>
            <div className="options">
                <Link className="option">
                    SHOP
                </Link>
                 <Link className="option">
                    CONTACT
                </Link>
            </div>
        </div>
    )
}

export default Header
