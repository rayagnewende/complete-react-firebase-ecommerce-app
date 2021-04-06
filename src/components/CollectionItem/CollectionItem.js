import React from 'react'
import './CollectionItem.css'; 

const CollectionItem = ({ id, price, name, imageUrl}) => {
    return (
        <div className="collection-item">
            <div className="image"  
                style={{backgroundImage:`url(${imageUrl})`}}
            />
            <div className="collection-footer">
               <div className="name">
                    <span>{name}</span>
               </div>
                <div className="price">
                    <span>${price} </span>
                </div>
            </div>
        </div>
    )
}

export default CollectionItem; 
