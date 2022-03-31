import React, {useState, useEffect} from  "react";
import {Link} from 'react-router-dom'

import "./App.css"
function Shop(){

   useEffect(() => {
       setTimeout(()=>{
        fetchItems();

       },1000)
        
    },[] )

    const[items, setItems]= useState([]);
    const[pend,setPend] = useState(true);
    

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.com/v2/cosmetics/br/new')
        
        const jData = await data.json();
        console.log(jData.data.items);
        setItems(jData.data.items);
        setPend(false);
    }
  /* const[items, setItems]= useState([]);

     const {data, pending, Error} = useFetch('https://fortnite-api.com/v2/cosmetics/br/new')
   useEffect(()=>{
    setItems(data.data.items) 
   },[])*/
    
    return(
        <div>
            {pend && 
            
            <div className="bouncer">
                <div></div>
                <div></div>
                <div></div>
                 <div></div>
        </div>
       
}
           
            {items.map(item => (
                <h1 key={item.id}>
                    <Link to={`${item.id}`}>{item.name}</Link></h1>
            )   )}
        </div>
    )
}

export default Shop