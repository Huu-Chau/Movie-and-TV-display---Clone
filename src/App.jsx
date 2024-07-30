import { createBrowserRouter, RouterProvider, createRoutesFromElements ,Route, Navigate, useParams } from 'react-router-dom';
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
            <Route path="watch-movie" element={<Navigate to="/watch-movie"/>}/>
          </Route>
          <Route path="watch-movie" element={<Navigate to="/watch"/>}/>
        </Route>
        
        <Route path="tv-series" element={<MoviesLayout/>}>
          <Route index element={<TVList/>} loader={getTVShows}/>
            <Route path="detailed-series/:series_id" loader={({params}) => getTVTrailer(params.series_id)} element={<TVDetailed/>}>
              <Route path="watch-series" element={<Navigate to="/watch-series"/>}/>
            </Route>
          <Route path="watch-series" element={<Navigate to="/watch"/>}/>
        </Route>

        <Route path="search" element={<SearchLayout/>}/>
        <Route path="watch" element={<Watch/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    )
  )
  
  return (
    <RouterProvider router={router}/>
  )
} 