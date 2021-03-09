import React, {useContext} from 'react';
import {SearchContext} from '../../context/searchContext';
import './SearchBar.css';

const SearchBar = () => {
    const { searchKeyword, SearchKeywordInput, SearchSubmit} = useContext(SearchContext);
    return (
            <form onSubmit={SearchSubmit} >
                <input
                    type="text"
                    value={searchKeyword}
                    className = "search-bar"
                    placeholder="หาที่เที่ยวแล้วไปกัน...."
                    onChange={(event) => SearchKeywordInput(event.target.value)}
                /> 
            </form>            
        
    )
}

export default SearchBar;