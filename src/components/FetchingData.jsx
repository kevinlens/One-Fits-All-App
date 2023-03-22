import React, { useState, useEffect } from 'react';

//RTK QUERY
import { useFetchPopularMoviesForYear2022Query } from '../store/reduxStore/fetchApi';

const FetchingData = () => {
  // const { data: popularMoviesForYear2022 } = useFetchPopularMoviesForYear2022Query();

  useEffect(() => {
    // if(popularMoviesForYear2022){
    // console.log('🍑🍑🍑🍑', popularMoviesForYear2022)
    getCollectionOfMoviesFor2022();
    // }
  }, []);

  const getCollectionOfMovies = async (year, pages) => {
    // let totalPages;
    // if (pages >= 501) {
    //   //API LIMIT IS 500 PAGES OR 10,000 ITEMS
    //   totalPages = 500;
    // } else {
    //   totalPages = pages;
    // }

    // const d1 = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=8e6ba047d3bc0b9dddf8392f32410006&language=en-US&page=499&primary_release_date.gte=2022-01-01&primary_release_date.lte=2022-12-31&region=US')
    // // `/.netlify/functions/fetch-movies?startingParams=${'movie/popular'}&gte=${`${year}-01-01`}&lte${`${year}-12-31`}&page=${'1'}`
    // const d2 = await d1.json()
    // console.log('🍌🍌🍌🍌🍌', d2)

    let dataArray = [];
    let mergedArray = [];
    // const fetchTotalPages = async (index) => {
    // const pageNumber = index + 1;
    const data = await fetch(
      // `https://api.themoviedb.org/3/tv/popular?api_key=8e6ba047d3bc0b9dddf8392f32410006&language=en-US&page=${pageNumber}&first_air_date.gte=2022-01-01&first_air_date.lte=2022-12-31`
      // `https://api.themoviedb.org/3/movie/popular?api_key=8e6ba047d3bc0b9dddf8392f32410006&language=en-US&page=${pageNumber}&primary_release_date.gte=2021-01-01&primary_release_date.lte=2021-12-31&region=US`
      `/.netlify/functions/fetch-movies?isFirebase=${true}&firebaseMovieYear=${2021}`
      // 'https://film-city-6d3c6-default-rtdb.firebaseio.com/popularMoviesFor2022.json'
    );
    const movieData = await data.json();

    for (const key in movieData) {
      dataArray.push([movieData[key]]);
    }
    //   return movieData;
    // };

    // // * fetches all url at once as each url is limited to 20 array elements
    // const list = await Promise.all(
    //   Array.from({ length: 463 }, (_, index) => fetchTotalPages(index))
    // );


    // mergedArray = movieData.map((item) => {
    //   return item.results;
    // });

    mergedArray = dataArray.flat();

    console.log('🍱🍱🍱🍱', mergedArray)

    // for (let i = 1; i <= 8; i++) {
    //   dataArray.push(fetchTotalPages(i))
    // }
    // const list = await Promise.all(
    //   dataArray
    // );

    // console.log('---------------', list.flat(1))\
    // mergedArray = dataArray[0].flat();
    return mergedArray;
  };

  // const postToFirebase = async (collection) =>{
  //   const data = await fetch('https://film-city-6d3c6-default-rtdb.firebaseio.com/popularTVShowsAiredIn2022.json',{
  //     method: 'POST',
  //     body: JSON.stringify(collection),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   });
  //   const data2 = await response.json();
  //   console.log('🍱🍱🍱🍱', data2)

  // }

  const getCollectionOfMoviesFor2022 = async () => {
    const collection = await getCollectionOfMovies();
    // console.log('---------------', collection.flat());

    // postToFirebase(collection)
  };

  return <div>FetchingData</div>;
};

export default FetchingData;
