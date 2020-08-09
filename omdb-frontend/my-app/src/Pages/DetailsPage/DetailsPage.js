import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { baseUrl, axiosHeaders} from '../../utils/constants';

import Information from '../../Components/Information/Information';

export default function DetailsPage() {

    const [searchResult, setSearchResult] = useState({});
    
    const params = useParams();
    
    useEffect(() =>{
    // console.log(baseUrl);
    const url = `${baseUrl}imdb/:imdbId?imdbId=${params.imdbID}`;
    axios.get(url, axiosHeaders)
        .then(res => setSearchResult(res.data))
        .catch(err => console.log(err));
    }, []);

    return (
        <div> 
            <Information movie={searchResult}/>
        </div>
    )
}