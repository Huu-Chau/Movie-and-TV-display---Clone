  
import axios from 'axios';

  const api_key = import.meta.env.VITE_API_KEY
  const api_url = import.meta.env.VITE_API_URL
  const getNowPlayingMovies = async () => {
    try {
      const response = await axios.get(`${api_url}/movie/now_playing?api_key=${api_key}`)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
  const getTopRatedMovies = async () => {
    try {
      const response = await axios.get(`${api_url}/movie/top_rated?api_key=${api_key}`)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
  const getPopularMovies = async () => {
    try {
      const response = await axios.get(`${api_url}/movie/popular?api_key=${api_key}`)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
  const getUpComingMovies = async () => {
    try {
      const response = await axios.get(`${api_url}/movie/upcoming?api_key=${api_key}`)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

export  const getMoviesShow = async () => {
    const movieTrending = await getTrendingMovieBanner()
    const moviesNowPlaying = await getNowPlayingMovies()
    const moviesTopRated = await getTopRatedMovies()
    const moviesPopular = await getPopularMovies()
    const moviesUpComing = await getUpComingMovies()
    return {movieTrending, moviesNowPlaying, moviesTopRated, moviesPopular, moviesUpComing}
  }

  const getAiringTodayTVShows = async () => {
    try {
      const response = await axios.get(`${api_url}/tv/airing_today?api_key=${api_key}`)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
  const getOnTheAirTVShows = async () => {
    try {
      const response = await axios.get(`${api_url}/tv/on_the_air?api_key=${api_key}`)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
  const getPopularTVShows = async () => {
    try {
      const response = await axios.get(`${api_url}/tv/popular?api_key=${api_key}`)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
  const getTopRatedTVShows = async () => {
    try {
      const response = await axios.get(`${api_url}/tv/top_rated?api_key=${api_key}`)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

 export const getTVShows = async () => {
    const TrendingTVShows = await getTrendingTVBanner()
    const AiringTodayTVShows = await getAiringTodayTVShows()
    const OnTheAirTVShows = await getOnTheAirTVShows()
    const PopularTVShows = await getPopularTVShows()
    const TopRatedTVShows = await getTopRatedTVShows()
    return {TrendingTVShows, AiringTodayTVShows, OnTheAirTVShows, PopularTVShows, TopRatedTVShows}
  }

  const getDetailedMovies = async (id) => {
    try {
      const response = await axios.get(`${api_url}/movie/${id}?api_key=${api_key}`)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  const getDetailedSeries = async (id) => {
    try {
      const response = await axios.get(`${api_url}/tv/${id}?api_key=${api_key}`)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  const getTrailerMovies = async (id) => {
    try {
      const response = await axios.get(`${api_url}/movie/${id}/videos?api_key=${api_key}`)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
  const getTrailerSeries = async (id) => {
    try {
      const response = await axios.get(`${api_url}/tv/${id}/videos?api_key=${api_key}`)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

 export const getMovieTrailer = async (id) => {
    const details = await getDetailedMovies(id)
    const trailer = await getTrailerMovies(id)
    return {details, trailer}
  }

 export const getTVTrailer = async (id) => {
    const details = await getDetailedSeries(id)
    const trailer = await getTrailerSeries(id)
    return {details, trailer}
  }

  export const getTrendingMovieBanner = async () => {
    try {
      const response = await axios.get(`${api_url}/trending/movie/day?api_key=${api_key}`)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
  export const getTrendingTVBanner = async () => {
    try {
      const response = await axios.get(`${api_url}/trending/tv/day?api_key=${api_key}`)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }