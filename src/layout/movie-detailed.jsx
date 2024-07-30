import { Link, useLoaderData } from "react-router-dom";
import ReactPlayer from 'react-player';

export default function MovieDetailed() {
    let trailerKey = '';
    const {details, trailer} = useLoaderData()
    trailer.results.forEach((result) => {
        if (result.name === "Official Trailer") {
          trailerKey = result.key
        }
    });
    return ( 
        // trailer on top, picture + description on the left
        <main className='bg-primary_black min-h-screen w-full' style={{paddingTop:'12vh'}}>
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=${trailerKey}`}
                width="100vw"
                height="75vh"
                controls={false}
                className="mx-auto overflow-hidden rounded-lg"
            />
            <section className='bg-primary_black  min-h-screen flex justify-around py-10'>
                <div className="p-8 w-4/12 relative" >
                    <h1 className="text-gray-200 text-5xl font-medium">{details.title}</h1>
                    <h2 className="text-2xl font-medium">{details.tagline}</h2> 
                    {/* <h3 className="text-gray-200 text-3xl font-medium">
                        Description
                    </h3> */}
                    <br/>
                    <div className="flex justify-center  items-center min-w-full movie_list">
                        <p className="text-gray-100 text-lg">
                            {details.overview}
                        </p>
                    </div>
                </div>
                <div className="p-8 w-3/12 relative">
                    <img src={`https://image.tmdb.org/t/p/original/${details.poster_path}`} className=".w-5\/12" alt=""/>
                    <Link to="/watch-movie" className="watch-now mt-4"><h1 className="text-2xl  ">Watch now</h1></Link>
                </div>
            </section>
        </main>
    );
}