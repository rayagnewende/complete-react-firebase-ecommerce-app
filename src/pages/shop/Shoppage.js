import React, { Component } from 'react'
import './Shoppage.css'; 
import data from '../../shop.data'; 
import CollectionsPreview from "../../components/CollectionsPreview/CollectionsPreview" ; 
            
 class Shoppage extends Component {
     constructor(props)
     {
         super(props); 
         this.state = {
             collections:data
         }
     }
    render() {
        return (
            <div className="shop-page">
                {this.state.collections.map(collection => {
                    return  <CollectionsPreview 
                                key={collection.id} 
                                title={collection.title}
                                items={collection.items} />
                })}
            </div>
        )
    }
}

export default Shoppage ; 
