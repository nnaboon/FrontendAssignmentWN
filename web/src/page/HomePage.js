import React, {useEffect, useState} from 'react';
import { useHistory, useLocation } from "react-router-dom";
import axios from 'axios';
import SearchBar from '../components/SearchBar/SearchBar';
import TripCard from '../components/Content/TripCard/TripCard';
import {SearchContext} from '../context/searchContext';
import './HomePage.css';

function HomePage() {
    const [searchKeyword, setSearchKeyword] = useState("");
    const [tripData, setTripData] = useState("");
    const location = useLocation();
    const history = useHistory();

    const fetchData = async () => {
        try{
            const res = await axios.get(`http://localhost:3001/api/trips${location.search}`)
            setTripData(res.data.trips);
        } catch (err) {
            console.log("Cannot fetch data" + err);
        }
    }

    const SearchKeywordInput = (text) => {
        setSearchKeyword(text);
    }

    const SearchSubmit = (event) => {
        if(event) {
            event.preventDefault();
        }

        history.push({
            pathname : '/',
            search: `?keyword=${searchKeyword}`
        });
    }

    useEffect(() => {
        fetchData();
    }, [location]);


    return(
        <SearchContext.Provider
            value={{
                searchKeyword,
                setSearchKeyword,
                SearchSubmit,
                SearchKeywordInput,
            }}
        >
            <div className="header">
                <div>เที่ยวไหนดี</div>
                <SearchBar />
            </div>
            <div className="content">
                {tripData ? (
                    tripData.map((trip) => <TripCard key={trip.eid} trips={trip} />)
                ) : (
                    <h2>Loading</h2>
                )}
            </div>
        </SearchContext.Provider>
    )
}

export default HomePage;