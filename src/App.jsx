import { createBrowserRouter, RouterProvider, createRoutesFromElements ,Route, Navigate } from 'react-router-dom';
import RootLayout from './layout/root-layout';
import HomeLayout from './layout/home-layout';
import NotFound from './components/not-found/NotFound';
import MoviesLayout from './layout/movie-layout';
import MovieDetailed from './layout/movie-detailed';
import Watch from './layout/watch';
import MovieList from './layout/movie-list';

import TVList from './layout/tv-list';
import SearchLayout from './layout/search-layout';
import TVDetailed from './layout/tv-detailed';

import { getMoviesShow, getTVShows, getMovieTrailer, getTVTrailer } from './api/api-call';

export default function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<HomeLayout/>}/>
        
        <Route path="movies" element={<MoviesLayout/>}>
          <Route index loader={getMoviesShow} element={<MovieList/>}/>
          <Route path="detailed-movie/:movies_id" loader={({params}) => getMovieTrailer(params.movies_id)} element={<MovieDetailed/>}>
            <Route path="watch-movie/:movies_id" element={<Navigate to="/watch-movie"/>}/>
          </Route>
          <Route path="watch-movie/:movies_id" element={<Watch/>}/>
        </Route>
        
        <Route path="tv-series" element={<MoviesLayout/>}>
          <Route index loader={getTVShows} element={<TVList/>}/>
            <Route path="detailed-series/:series_id" loader={({params}) => getTVTrailer(params.series_id)} element={<TVDetailed/>}>
              <Route path="watch-series/:series_id" element={<Navigate to="/watch-series"/>}/>
            </Route>
          <Route path="watch-series/:series_id" element={<Watch/>}/>
        </Route>
        <Route path="search" element={<SearchLayout/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    )
  )
  
  return (
    <RouterProvider router={router}/>
  )
} 