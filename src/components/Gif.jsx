import React from 'react';
import './Gif.css'
export default function Gifs({id, title, url}) {
    return (
    <a href={`#${id}`} className="Gif">
        <h4>Title:{title}</h4>
        <img alt={title} src={url}></img>
    </a>
    )
}