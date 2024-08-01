import FeaturedMovie from "../components/featured/featured";
import MovieCarousel from "../components/movie-carousel/movie-carousel.component";
import { useLoaderData, useLocation} from "react-router-dom";

export default function MovieList() {
    const urlType = useLocation()
    const {movieTrending, moviesNowPlaying, moviesTopRated, moviesPopular, moviesUpComing} = useLoaderData()
    return(
        <>
            <FeaturedMovie displayData={movieTrending.results}/> 
            <MovieCarousel name='Now playing Movies' displayData={moviesNowPlaying.results} type={urlType.pathname}/>
            <MovieCarousel name='Top rated Movies' displayData={moviesTopRated.results} type={urlType.pathname}/>
            <MovieCarousel name='Popular Movies' displayData={moviesPopular.results} type={urlType.pathname}/>
            <MovieCarousel name='Upcoming Movies' displayData={moviesUpComing.results} type={urlType.pathname}/>
        </>
    )
}   