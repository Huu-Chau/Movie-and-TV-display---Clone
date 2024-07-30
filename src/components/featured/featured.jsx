import { Link, useLocation } from "react-router-dom";
// import {PlayOutline, InformationCircleOutline} from 'react-ionicons'

export default function Featured(){
    const location = useLocation()
    const showBanner = location.pathname === '/movies' || location.pathname === '/tv-series'
    return (    
            <section className="h-screen relative bg-no-repeat pb-8 pl-6 flex justify-end items-end bg-cover" style={{backgroundImage: `url(./src/assets/the-boys.png)`}}>
                <div>
                    <h2 className="text-6xl font-semibold text-white my-4">
                        The boys
                    </h2>
                    <br/>
                    <h4 className="`font-semibold text-white">
                        2019 | PG-16
                    </h4>
                    <p className=" w-11/12 md:w-5/12 font-medium text-white my-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus repellendus odit perspiciatis nostrum culpa exercitationem quis. Ab obcaecati odio minus. Dolorum sapiente eaque, repellendus ea fugiat amet fuga libero at!
                    </p>
                    <div className="flex my-4">
                        <Link to="watch-movie" className="flex items-center bg-white py-2 px-5 rounded-md">
                            <span className="ml-3 font-medium text-gray-900">
                                Play
                            </span>
                        </Link>
                        <Link to="detailed-movie" className="ml-4 text-white flex items-center bg-gray-500 bg-opacity-80 py-2 px-5 rounded-md">
                            <span className="ml-3 font-medium">
                                More Info
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
    );
}