import React from 'react';
import './ImageCard.css';

const ImageCard = ({photos}) => {
    return(
        <div className="sub-images">
            <img src={photos[1]} alt="" />
            <img src={photos[2]} alt="" />
            <img src={photos[3]} alt="" />
        </div>
            
    )
}

export default ImageCard;