import React, { useContext} from 'react';
import {useHistory} from 'react-router-dom';
import './TagsCard.css';
import {SearchContext} from '../../../context/searchContext';

const TagsCard = ({tags}) => {

    const {SearchKeywordInput} = useContext(SearchContext);
    const history = useHistory();

    const ClickTag = (tag) => {
        history.push({
            pathname : '/',
            search: `?keyword=${tag}`
        });
    } 

    return(
        <div className="tags">
            {`หมวด `}
            {tags.map((tag, i) => {
                if(tags.length - 2 === i){
                    return (
                        <div className="tag" key={tag} style={{textDecoration: 'none'}}>{`และ`}</div>
                    )
                }else{
                    return(
                        <div className="tag" key={tag} onClick={() => {SearchKeywordInput(tag); ClickTag(tag);}} >{tag}</div>
                    )                    
                }

            })}            
        </div>
        
    )
}

export default TagsCard;