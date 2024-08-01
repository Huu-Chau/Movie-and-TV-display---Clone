import { Link, useLocation } from "react-router-dom";
// import {PlayOutline, InformationCircleOutline} from 'react-ionicons'

export default function Featured({displayData}){
    const randomMovie = Math.floor(Math.random() * (20 - 1 + 1) + 1)
    const url = useLocation().pathname
    return (    
            <section className="h-screen relative bg-no-repeat pb-8 pl-6 flex items-end bg-cover" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${displayData[randomMovie].poster_path})`}}>
                <div>
                    <h2 className="text-6xl font-semibold text-white my-4">
                        {url === '/movies' ? displayData[randomMovie].title : displayData[randomMovie].name}
                    </h2>
                    <p className=" w-11/12 md:w-5/12 font-medium text-white my-4">
                        {displayData[randomMovie].overview}
                    </p>
                    <div className="flex my-4">
                        <Link to={url === '/movies' ? `/movies/watch-movie/${displayData[randomMovie].id}` : `/tv-series/watch-series/${displayData[randomMovie].id}`} className="flex items-center bg-white py-2 px-5 rounded-md">
                            <span className="ml-3 font-medium text-gray-900">
                                Play
                            </span>
                        </Link>
                        <Link to={url === '/movies' ? `/movies/detailed-movie/${displayData[randomMovie].id}` : `/tv-series/detailed-series/${displayData[randomMovie].id}`} className="ml-4 text-white flex items-center bg-gray-500 bg-opacity-80 py-2 px-5 rounded-md">
                            <span className="ml-3 font-medium">
                                More Info
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
    );
}