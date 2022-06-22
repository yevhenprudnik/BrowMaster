import React from "react";
import '../App.css';
const Photo = ({link}) => {
    return(
            <img className = "photos grow br4" src={link}/>
    );
}
export default Photo;