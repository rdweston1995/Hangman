import React from "react";
import "./style.css";

function card(props){
    return(
        <div className="card" onClick={props.onClick} id={props.title}>
            <img src={props.image} className="card-img-top" alt={props.title}/>
            <div className="card-body">
                <h3 className="themeTitle">{props.title}</h3>
                <p className="themeText card-text">{props.description}</p>
            </div>
        </div>
    )
}

export default card;