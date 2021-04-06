import React from 'react'
import "./MenuItem.css"; 
import {withRouter} from "react-router-dom"; 

const MenuItem = ({title, imageURL, size,linkUrl ,history, match}) => {
    console.log(match.url); 
    return (
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)} >
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

export default withRouter(MenuItem)
