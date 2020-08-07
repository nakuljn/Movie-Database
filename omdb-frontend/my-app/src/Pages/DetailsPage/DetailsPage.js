import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { baseUrl, axiosHeaders} from '../../utils/constants';

import Information from '../../Components/Information/Information';
import List2 from '../../Components/List2/List2';
// import Card from '../../Components/Card/Card';

export default function DetailsPage() {

    const [searchResult, setSearchResult] = useState({});

    const Success = (res) => {
        //console.log(res);
        // Data validation before setting searchResult
        console.log("in DetailsPage");
        console.log(res.data);
        if (res && res.data instanceof Object) {
        setSearchResult(res.data);
        }
    }


    
    /**
     * Call server with imdbID
     * URL Format : http://localhost:3001/omdb/imdb/tt0944947
     * const imdbID = params.imdbID;
     */
    const onView = () => {
    const params = useParams();
    const url = `${baseUrl}imdb/:imdbId?imdbId=${params.imdbID}`;
    axios.get(url, axiosHeaders)
        .then(res => Success(res))
        .catch(err => console.log(err));
    }

    return (
        <div> 
            <List2 value={searchResult} component={Information} function={onView} />
        </div>
    )
}