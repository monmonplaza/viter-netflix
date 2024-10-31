import { devImgPath } from '@/components/helpers/functions-general'
import { ChevronLeft, ChevronRight, Dot, Play, Search } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

import Slider from "react-slick";
import Header from './Header';
import Banner from './Banner';
import MovieSlider from './MovieSlider';
import useQueryData from '@/components/custom-hook/useQueryData';
import SpinnerTable from '@/components/partials/spinners/SpinnerTable';
import MovieSliderTopTen from './MovieSliderTopTen';

const Home = () => {

  const {
    isLoading,
    isFetching,
    error,
    data: movies,
  } = useQueryData (
   `/v1/movies`, // endpoint
   "get", // method
    "movies",
  );



  const {
    isLoading:topMoviesIsLoading,
    isFetching:topMoviesIsFetching,
    error:topMoviesError,
    data: topmovies,
  } = useQueryData (
   `/v1/top-movies`, // endpoint
   "get", // method
    "top-movies",
  );



   const getAllKdrama = !isLoading && movies?.data.filter((movie) => movie.movies_category === 'kdrama' )
   const getAllPinoy = !isLoading && movies?.data.filter((movie) => movie.movies_category === 'pinoy' )
   const getAllInternational = !isLoading && movies?.data.filter((movie) => movie.movies_category === 'international' )




  return (
    <>

    <Header/>
    <Banner/>

   
   {topMoviesIsLoading ? <SpinnerTable/> : <MovieSliderTopTen title="Top Movies" isTopTen={true} category={topmovies}/> }


   {isLoading ? <SpinnerTable/> : <MovieSlider title="Korean Drama" isTopTen={false} category={getAllKdrama}/> }
   {isLoading ? <SpinnerTable/> : <MovieSlider title="Pinoy Drama" isTopTen={false} category={getAllPinoy}/> }
   {isLoading ? <SpinnerTable/> : <MovieSlider title="International Drama" isTopTen={false} category={getAllInternational}/> }



    </>
  )
}

export default Home