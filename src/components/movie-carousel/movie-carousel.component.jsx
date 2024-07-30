import { Link } from "react-router-dom";

export default function MovieCarousel({name, displayData, type}) {
    return ( 
        // <Carousel >
        <section className='bg-primary_black mt-4'>
            <div className="w-full relative" >
                <h2 className="text-gray-200 text-2xl font-medium">
                    {name}
                </h2>
                <div className="flex items-center min-w-full movie_list" style={{overflowX:`scroll`}}>
                    {displayData.map(img => (
                        <Link key={img.id} to={`${type == "/movies" ? 'detailed-movie': 'detailed-series'}/${img.id}`} className="image-container overflow-hidden flex-shrink-0 h-40 m-4 bg-blue-500 rounded-md cursor-pointer w-2\/12 md:w-3\/12">
                            <img src={`https://image.tmdb.org/t/p/w300/${img.poster_path}`} className="w-full h-full" alt=""/>
                        </Link> 
                    ))}
                </div>
            </div>
        </section>
     );
}