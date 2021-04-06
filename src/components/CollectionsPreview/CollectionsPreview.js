import React from 'react'
import './CollectionsPreview.css'
import CollectionItem from "../CollectionItem/CollectionItem"; 

const CollectionsPreview = ({title, items}) => {
    
    return (
        <div className="collections-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter( (item, idx) => idx < 4).map(item => {
                      return   <CollectionItem
                                      key={item.id}
                                     price={item.price}
                                     name={item.name}
                                     imageUrl={item.imageUrl}
                                />
                    })
                }
            </div>
        </div> 
    )
}

export default CollectionsPreview; 
