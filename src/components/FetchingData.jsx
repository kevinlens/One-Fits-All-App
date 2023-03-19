import React, { useState, useEffect } from 'react';

//RTK QUERY
import { useFetchTopRatedTVShowsQuery, useFetchMovieDetailsQuery } from '../store/reduxStore/fetchApi';

const FetchingData = () => {

  const { data: movieDetails } = useFetchTopRatedTVShowsQuery();
  const { data: movieDetails2 } = useFetchMovieDetailsQuery('943822');
  
  useEffect(()=>{

    if(movieDetails, movieDetails2){
      console.log('🍑🍑🍑🍑', movieDetails)
      console.log('🍑🍑🍑🍑', movieDetails2)
    }

  }, [movieDetails, movieDetails2])

  return <div>FetchingData</div>;
};

export default FetchingData;
