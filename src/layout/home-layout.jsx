import { Link } from "react-router-dom";

export default function HomeLayout() {
    return ( 
        <>
            <header className="min-h-screen bg-black bg-opacity-75 showcase border-gray-600 border-b-8 flex justify-center items-center bg-no-repeat"  style={{backgroundImage: `url(/images/background_netflix.jpg)`}}>
                <div className="z-10 h-full py-32 md:py-0 text-gray-100 text-center flex items-center flex-col">
                    <h1 className="font-semibold text-4xl md:text-5xl w-10/12 md:w-3/4 text-center">
                        Unlimited movies, TV shows, and more.
                    </h1>
                    <h3 className="text-xl md:text-xl py-5">
                        Watch anywhere. Cancel anytime.
                    </h3>

                    <div className="w-full flex justify-center">
                        <div className="flex justify-center items-center w-11/12 md:w-10/12">
                            <Link to="movies" className="bg-primary_red font-medium md:font-normal md:w-1/2 flex justify-center items-center py-4 px-1 md:px-0 rounded-md md:text-2xl">
                                <span>
                                    WATCH FREE FOR 30 DAYS
                                </span>
                                <ion-icon name="chevron-forward-outline" className="text-2xl"></ion-icon>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <section className='flex flex-col md:flex-row items-center border-gray-900 border-b-8' style={{minHeight: `70vh`}}>
                <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left p-5 md:p-10 ">
                    <h2 className="md:text-5xl text-4xl font-semibold mb-4">
                        Enjoy on your TV.
                    </h2>
                    <h5 className="md:text-xl text-lg">
                        Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                    </h5>
                </div>
                <div className='md:w-1/2 flex justify-center items-center'>
                    <img src="/images/tv.png" className="w-8/12" alt=""/>
                </div>
            </section>

            <section className='flex flex-col md:flex-row items-center border-gray-900 border-b-8' style={{minHeight: `70vh`}}>
                <div className='md:w-1/2 flex justify-center items-center order-2'>
                    <img src="/images/mobile-0819.jpg" className="w-8/12" alt=""/>
                </div>
                <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left p-5 md:p-10">
                    <h2 className="md:text-5xl text-4xl font-semibold mb-4">
                        Download your shows to watch offline.
                    </h2>
                    <h5 className="md:text-xl text-lg">
                        Save your favorites easily and always have something to watch.
                    </h5>
                </div>
            </section>

            <section className='flex flex-col md:flex-row items-center border-gray-900 border-b-8' style={{minHeight: `70vh`}}>
                <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left p-5 md:p-10">
                    <h2 className="md:text-5xl text-4xl font-semibold mb-4">
                        Create profiles for kids.
                    </h2>
                    <h5 className="md:text-xl text-lg">
                        Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
                    </h5>
                </div>
                <div className='md:w-1/2 flex justify-center items-center'>
                    <img src="/images/netflix_kid.png" className="w-8/12" alt=""/>
                </div>
            </section>
            
            <footer className=" px-5 py-10 ">
                <ul className="flex justify-between items-center">
                    <li>&copy; All Right Reserved | 2022</li>
                    <li> Netflix Clone</li>
                </ul>
            </footer>
        </>
    );
}