import React from 'react'
import {Link} from "react-router-dom"
import './card.css'

const Card = ({image,name,desc,bool,style}) => {
    return (
        <>
        <div className="card">
            <img src={image} alt={`img of ${name}` } className="card-image"/>
            <h3 style={style}>{name}</h3>
            {bool?<p>{desc.split(".")[0]}.....</p>:""}
            {bool? <Link to={`/category/${name.toLowerCase()}`} className="btn">Show Menu</Link>:""}
        </div>
        </>
    )
}

export default Card
