import React from 'react';

const ContentCard = ({url, description}) => {
    return (
        <div >
            <p>
                {description.substring(0, 151) + "... "}
                <a href={url} style={{color: 'deepskyblue'}} target="_blank">อ่านต่อ</a>
            </p>
        </div>
        
    )
}

export default ContentCard;