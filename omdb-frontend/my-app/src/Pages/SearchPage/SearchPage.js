import React, { useState } from 'react';
import axios from 'axios';

import Card from '../../Components/Card/Card';
import List from '../../Components/List/List';
import Search from '../../Components/Search/Search';

import { baseUrl, axiosHeaders } from '../../utils/constants';

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const onSubmitSuccess = (res) => {
    //console.log(res);
    // Data validation before setting searchResult
    if (res && res.data && res.data.Search instanceof Array) {
      setSearchResult(res.data.Search);
    }
  }
  const onSubmit = (searchTerm) => {
    const uri = `${baseUrl}search?title=${searchTerm}`;
    axios.get(uri, axiosHeaders)
      .then(res => onSubmitSuccess(res))
      .catch(err => console.log(err));
  }

  return (
    <div>
      <Search value={searchTerm} onChange={setSearchTerm} onSubmit={onSubmit} />
      <br />
      <List elements={searchResult} component={Card} />
      
    </div>
  )
}