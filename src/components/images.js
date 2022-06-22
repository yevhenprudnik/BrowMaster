import React from "react";
import Photo from "./photos"


const Images = ({links}) => {
    const cardComponent = links.map((user, i) => {
        return (<Photo 
        key = {i}
        link = {links[i].link}
        />)
    })
    return (
    <div>
        {cardComponent}
    </div>
    );
}
export default Images;