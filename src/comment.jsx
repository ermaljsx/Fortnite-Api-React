import React from "react";
import { useState } from "react";
import "./App.css"

function Comment(){

    const[username, setUsername] = useState('put your username here')
    const[usercomment, setUserComment] = useState('write your comment here')
    const[score, setScore] = useState('0')
    const[pend, setPend] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault(); //this prevents the page from being refreshing
        const comment = {username, usercomment, score};
        setPend(true)
         fetch('https://fortnite-api.com/v2/cosmetics/br/new', {
             method: 'POST',
             headers: {"Content-type": "application/json"},
             body:  JSON.stringify(comment)
         }).then(()=>{
             console.log("new comment added")
             setPend(false)
         })
      

    }

    return(
        <React.Fragment>
        <div className="create">
            <h2>Reviews</h2>
            <form  onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}required />
                <label>Comment</label>
                <textarea value={usercomment} onChange={(e)=>setUserComment(e.target.value)} required></textarea>
                <label>Score</label>
                <select value={score} onChange={(e)=>{setScore(e.target.value)}}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                {!pend && <button>Add Comment</button>}
                {pend && <button disabled>Adding Comment...</button>}
                
                <p>{username}</p>
                <p>{usercomment}</p>
                <p>{score}</p>

                
            </form>
           
        </div>
        </React.Fragment>
    )
}

export default Comment