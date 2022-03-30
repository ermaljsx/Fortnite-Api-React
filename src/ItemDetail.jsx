import React, {useState, useEffect} from  "react";
import { useParams } from "react-router-dom";
import Comment from "./comment"
import "./App.css"

function ItemDetail(){

    useEffect(() => {
        fetchItem();
        
        
       
    },[] );
    const {id} = useParams();
    

    const[item, setItem]= useState({
        images: {}


    });


    const fetchItem = async () => {
        const data = await fetch(`https://fortnite-api.com/v2/cosmetics/br/${id}`);
        
        const jData = await data.json();
      console.log(jData.data);
        setItem(jData.data);
    }
    return(
        <div>
           
                <h1>{item.description}</h1>
                <img className="image" src={item.images.icon} alt="" />
                <Comment />
            
        </div>
        
    )
}

export default ItemDetail