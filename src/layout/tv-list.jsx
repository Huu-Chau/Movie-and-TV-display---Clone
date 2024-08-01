import FeaturedMovie from "../components/featured/featured";
import MovieCarousel from "../components/movie-carousel/movie-carousel.component";
import { useLoaderData, useLocation } from "react-router-dom";


export default function TVList() {
    const urlType = useLocation()
    const {TrendingTVShows, AiringTodayTVShows, OnTheAirTVShows, PopularTVShows, TopRatedTVShows} = useLoaderData()
    return(
        <>
            <FeaturedMovie displayData={TrendingTVShows.results}/> 
            <MovieCarousel name='Airing today TV shows' displayData={AiringTodayTVShows.results} type={urlType.pathname}/>
            <MovieCarousel name='On the air TV shows' displayData={OnTheAirTVShows.results} type={urlType.pathname}/>
            <MovieCarousel name='Popular TV shows' displayData={PopularTVShows.results} type={urlType.pathname}/>
            <MovieCarousel name='Top rated TV shows' displayData={TopRatedTVShows.results} type={urlType.pathname}/>
        </>
    )
}   