import React from 'react'
import "./MenuItem.css"; 

const MenuItem = ({title, imageURL, size}) => {
    return (
        <div className={`${size} menu-item`} >
            <div    
            className="background-image"
             style={{ backgroundImage:`url(${imageURL})`}}  />
             <div className="content">
                       <div className="title">{title}</div>
                       <div className="subTitle">SHOP NOW </div>
             </div>
        </div>
    )
}

export default MenuItem
