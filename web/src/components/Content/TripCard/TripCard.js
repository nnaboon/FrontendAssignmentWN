import React from 'react';
import ContentCard from '../ContentCard/ContentCard';
import ImageCard from '../ImageCard/ImageCard';
import TagsCard from '../TagsCard/TagsCard';
import './TripCard.css';

const TripCard = ({trips}) => {
    return(
        <div className="tripcard">
                <img className="main-image"src={trips.photos[0]} />
                <div className="contentcard">
                    <a href={trips.url} className="content-title" target="_blank">{trips.title}</a>
                    <div>
                        <ContentCard
                            description={trips.description}
                            url={trips.url}
                        />  
                        <TagsCard tags={trips.tags} />                                    
                    </div>
                    
                    <ImageCard photos={trips.photos} />
                </div>
        </div>
    )
}

export default TripCard;