import React from "react";

const Card=(props)=>{

    return(

    <React.Fragment>
    {props.post.map((posts) => (
          <React.Fragment>
        <div className="card" style={{width: '20rem'}}>
          <div className="card-body">
            <a> {posts.id}</a>
            <h5> {posts.title}</h5>
            <p>  {posts.body}</p>
          
          </div>
        </div>
        <hr/>
        </React.Fragment>
    
                   
              ))}
                </React.Fragment>
    )
}

export default Card;