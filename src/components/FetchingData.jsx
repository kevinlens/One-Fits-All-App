import React, { useState, useEffect } from 'react';

//RTK QUERY
import { useFetchTopRatedTVShowsQuery } from '../store/reduxStore/fetchApi';

const FetchingData = () => {

  const { data: movieDetails } = useFetchTopRatedTVShowsQuery('800');

  useEffect(()=>{

    if(movieDetails){
      console.log('🍑🍑🍑🍑', movieDetails)
    }

  }, [movieDetails])

  return <div>FetchingData</div>;
};

export default FetchingData;
